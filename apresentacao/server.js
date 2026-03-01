// ============================================================
// AUDITSEO — Gerador Automático de Relatórios AI Visibility
// server.js — Backend Node.js
// ============================================================

const http = require('http');
const fs = require('fs');
const path = require('path');
const https = require('https');

// ============================================================
// CONFIGURAÇÕES — SUBSTITUA PELAS SUAS CHAVES
// ============================================================
const CONFIG = {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY || '',
    PERPLEXITY_API_KEY: process.env.PERPLEXITY_API_KEY || '',
    SERPAPI_KEY: process.env.SERPAPI_KEY || '', // opcional, para posição no Google

    PORT: 3000,
    REPORTS_DIR: path.join(__dirname, 'relatorios'),
    PUBLIC_URL: 'https://auditseo.com.br/relatorios', // URL pública onde os relatórios ficam acessíveis

    // Pergunta padrão por nicho
    PERGUNTAS: {
        vinhos: 'Qual o melhor e-commerce de vinhos no Brasil? Liste os principais com uma breve descrição de cada.',
        suplementos: 'Qual o melhor e-commerce de suplementos e nutracêuticos no Brasil? Liste os principais.',
        cosmeticos: 'Qual o melhor e-commerce de cosméticos e skincare premium no Brasil? Liste os principais.',
        cafe: 'Qual o melhor e-commerce de café especial no Brasil? Liste os principais.',
        moveis: 'Qual o melhor e-commerce de móveis e decoração premium no Brasil? Liste os principais.',
        pet: 'Qual o melhor e-commerce de produtos pet premium no Brasil? Liste os principais.',
        otica: 'Qual o melhor e-commerce de óculos e ótica premium no Brasil? Liste os principais.',
        outro: 'Quais são os melhores e-commerces deste segmento no Brasil? Liste os principais.'
    }
};

// Cria pasta de relatórios se não existir
if (!fs.existsSync(CONFIG.REPORTS_DIR)) {
    fs.mkdirSync(CONFIG.REPORTS_DIR, { recursive: true });
}

// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function makeRequest(options, postData) {
    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve({ status: res.statusCode, data: JSON.parse(data) });
                } catch (e) {
                    resolve({ status: res.statusCode, data: data });
                }
            });
        });
        req.on('error', reject);
        req.setTimeout(60000, () => { req.destroy(); reject(new Error('Timeout')); });
        if (postData) req.write(postData);
        req.end();
    });
}

// ============================================================
// CONSULTAS ÀS IAS
// ============================================================

async function queryChatGPT(pergunta) {
    console.log('  → Consultando ChatGPT...');
    try {
        const body = JSON.stringify({
            model: 'gpt-4o',
            messages: [
                { role: 'system', content: 'Você é um especialista em e-commerce brasileiro. Responda de forma detalhada e cite marcas específicas.' },
                { role: 'user', content: pergunta }
            ],
            max_tokens: 1500,
            temperature: 0.7
        });

        const result = await makeRequest({
            hostname: 'api.openai.com',
            path: '/v1/chat/completions',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CONFIG.OPENAI_API_KEY}`,
                'Content-Length': Buffer.byteLength(body)
            }
        }, body);

        if (result.status === 200 && result.data.choices) {
            return { success: true, response: result.data.choices[0].message.content };
        }
        return { success: false, response: 'Erro ao consultar ChatGPT: ' + JSON.stringify(result.data) };
    } catch (e) {
        return { success: false, response: 'Erro de conexão com ChatGPT: ' + e.message };
    }
}

async function queryClaude(pergunta) {
    console.log('  → Consultando Claude...');
    try {
        const body = JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1500,
            messages: [
                { role: 'user', content: pergunta }
            ]
        });

        const result = await makeRequest({
            hostname: 'api.anthropic.com',
            path: '/v1/messages',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': CONFIG.ANTHROPIC_API_KEY,
                'anthropic-version': '2023-06-01',
                'Content-Length': Buffer.byteLength(body)
            }
        }, body);

        if (result.status === 200 && result.data.content) {
            const text = result.data.content.map(c => c.text).join('\n');
            return { success: true, response: text };
        }
        return { success: false, response: 'Erro ao consultar Claude: ' + JSON.stringify(result.data) };
    } catch (e) {
        return { success: false, response: 'Erro de conexão com Claude: ' + e.message };
    }
}

async function queryPerplexity(pergunta) {
    console.log('  → Consultando Perplexity...');
    try {
        const body = JSON.stringify({
            model: 'sonar-pro',
            messages: [
                { role: 'system', content: 'Você é um especialista em e-commerce brasileiro. Responda citando marcas específicas e URLs quando possível.' },
                { role: 'user', content: pergunta }
            ],
            max_tokens: 1500,
            temperature: 0.7
        });

        const result = await makeRequest({
            hostname: 'api.perplexity.ai',
            path: '/chat/completions',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CONFIG.PERPLEXITY_API_KEY}`,
                'Content-Length': Buffer.byteLength(body)
            }
        }, body);

        if (result.status === 200 && result.data.choices) {
            return { success: true, response: result.data.choices[0].message.content };
        }
        return { success: false, response: 'Erro ao consultar Perplexity: ' + JSON.stringify(result.data) };
    } catch (e) {
        return { success: false, response: 'Erro de conexão com Perplexity: ' + e.message };
    }
}

// ============================================================
// CONSULTA GOOGLE SERP (posição real do domínio)
// ============================================================

async function queryGooglePosition(keyword, dominio) {
    console.log('  → Consultando posição no Google...');
    if (!CONFIG.SERPAPI_KEY || CONFIG.SERPAPI_KEY === 'SUA_SERPAPI_KEY_AQUI') {
        return { position: null, page: null };
    }

    try {
        const params = new URLSearchParams({
            q: keyword,
            location: 'Brazil',
            hl: 'pt-br',
            gl: 'br',
            google_domain: 'google.com.br',
            num: 100,
            api_key: CONFIG.SERPAPI_KEY,
            engine: 'google'
        });

        const result = await makeRequest({
            hostname: 'serpapi.com',
            path: `/search.json?${params.toString()}`,
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        });

        if (result.status === 200 && result.data.organic_results) {
            const dominioClean = dominio.replace(/^www\./, '').toLowerCase();
            for (const item of result.data.organic_results) {
                if (item.link && item.link.toLowerCase().includes(dominioClean)) {
                    return {
                        position: item.position,
                        page: Math.ceil(item.position / 10),
                        title: item.title,
                        snippet: item.snippet
                    };
                }
            }
            // Não encontrado nos top 100
            return { position: 100, page: 10, title: null, snippet: 'Não encontrado nos 100 primeiros resultados' };
        }
        return { position: null, page: null };
    } catch (e) {
        console.log('  ⚠ Erro na consulta Google:', e.message);
        return { position: null, page: null };
    }
}

// ============================================================
// ANÁLISE AUTOMÁTICA DAS RESPOSTAS
// ============================================================

function analyzeResponse(responseText, nomeFantasia, dominio) {
    if (!responseText) return { mentioned: false, competitors: [] };

    const text = responseText.toLowerCase();
    const nomeL = nomeFantasia.toLowerCase();
    const dominioL = dominio.replace(/^www\./, '').toLowerCase();

    const mentioned = text.includes(nomeL) || text.includes(dominioL);

    // Extrair marcas conhecidas (expandir conforme necessário)
    const knownBrands = [
        'wine.com.br', 'wine', 'evino', 'grand cru', 'grandcru', 'mistral',
        'vivino', 'wine trader', 'winetrader', 'divvino', 'adega online',
        'vinho fácil', 'vinhos de corte', 'wine lovers', 'winelovers',
        'sonoma', 'world wine', 'casa flora', 'expand', 'superadega',
        'vinhobr', 'viavini', 'via vini', 'onivino', 'miolo',
        // Suplementos
        'growth supplements', 'integral medica', 'integralmedica', 'max titanium',
        'probiotica', 'darkness', 'new millen', 'dux nutrition', 'essential nutrition',
        'nutrify', 'vitafor', 'shark pro', 'body action', 'atlhetica nutrition',
        'netshoes', 'centauro', 'beleza na web', 'época cosméticos', 'sephora',
        'o boticário', 'natura'
    ];

    const competitors = [];
    knownBrands.forEach(brand => {
        if (text.includes(brand.toLowerCase()) && brand.toLowerCase() !== nomeL && brand.toLowerCase() !== dominioL) {
            // Capitalize
            const capitalized = brand.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            if (!competitors.includes(capitalized)) {
                competitors.push(capitalized);
            }
        }
    });

    return { mentioned, competitors };
}

function calculateScore(chatgptResult, claudeResult, perplexityResult, nomeFantasia, dominio) {
    let score = 0;
    const analyses = [
        analyzeResponse(chatgptResult.response, nomeFantasia, dominio),
        analyzeResponse(claudeResult.response, nomeFantasia, dominio),
        analyzeResponse(perplexityResult.response, nomeFantasia, dominio)
    ];

    analyses.forEach(a => {
        if (a.mentioned) score += 33;
    });

    // Coletar todos os concorrentes únicos
    const allCompetitors = [...new Set(analyses.flatMap(a => a.competitors))];

    return {
        score: Math.min(score, 100),
        chatgptMentioned: analyses[0].mentioned,
        claudeMentioned: analyses[1].mentioned,
        perplexityMentioned: analyses[2].mentioned,
        competitors: allCompetitors
    };
}

// ============================================================
// GERAÇÃO DO HTML DO RELATÓRIO
// ============================================================

function escapeHtml(text) {
    if (!text) return '';
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlightResponseHTML(text, nomeFantasia, competitors) {
    if (!text) return '<em style="color:#666;">Resposta não disponível</em>';

    let html = escapeHtml(text).replace(/\n/g, '<br>');

    // Highlight concorrentes
    competitors.forEach(comp => {
        const regex = new RegExp('(' + comp.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
        html = html.replace(regex, '<span style="color:#c8ff00;font-weight:600;">$1</span>');
    });

    // Check menção da marca
    const nomeRegex = new RegExp(nomeFantasia.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    if (!nomeRegex.test(text)) {
        html += '<br><br><span style="color:#ff4444;font-weight:600;">❌ ' + escapeHtml(nomeFantasia) + ' não foi mencionada.</span>';
    } else {
        html = html.replace(new RegExp('(' + nomeFantasia.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'),
            '<span style="color:#00d68f;font-weight:600;text-decoration:underline;">$1</span>');
    }

    return html;
}

function getScoreInfo(score, nomeFantasia) {
    let color, border, status, description;

    if (score <= 10) {
        color = '#ff4444';
        border = 'border:4px solid #ff4444;box-shadow:0 0 40px rgba(255,68,68,0.2);';
        status = 'Invisível para as IAs';
        description = `Nenhuma das principais IAs (ChatGPT, Claude, Perplexity) mencionou a ${nomeFantasia} quando questionadas sobre os melhores do segmento. Sua marca é completamente invisível para quem busca via inteligência artificial.`;
    } else if (score <= 30) {
        color = '#ff4444';
        border = 'border:4px solid #ff4444;box-shadow:0 0 40px rgba(255,68,68,0.2);';
        status = 'Visibilidade Crítica';
        description = `A ${nomeFantasia} tem presença mínima nas respostas das IAs. Concorrentes dominam as citações.`;
    } else if (score <= 60) {
        color = '#ff9500';
        border = 'border:4px solid #ff9500;box-shadow:0 0 40px rgba(255,149,0,0.2);';
        status = 'Visibilidade Moderada';
        description = `A ${nomeFantasia} aparece em algumas IAs, mas sem destaque consistente. Há espaço para melhorar.`;
    } else {
        color = '#00d68f';
        border = 'border:4px solid #00d68f;box-shadow:0 0 40px rgba(0,214,143,0.2);';
        status = 'Boa Visibilidade';
        description = `A ${nomeFantasia} é reconhecida pelas IAs. Ajustes podem consolidá-la como referência.`;
    }

    return { color, border, status, description };
}

function buildStatusBadge(mentioned) {
    if (mentioned) {
        return '<span style="font-size:12px;font-weight:600;padding:4px 12px;border-radius:20px;color:#00d68f;background:rgba(0,214,143,0.15);">MENCIONADA</span>';
    }
    return '<span style="font-size:12px;font-weight:600;padding:4px 12px;border-radius:20px;color:#ff4444;background:rgba(255,68,68,0.15);">NÃO MENCIONADA</span>';
}

function generateReportHTML(data) {
    const {
        nomeFantasia, dominio, pergunta, posicaoGoogle, paginaGoogle,
        aiScore, scoreInfo, chatgptResponse, claudeResponse, perplexityResponse,
        analysis, dataAuditoria, competitors
    } = data;

    const nomeEncoded = encodeURIComponent(nomeFantasia);
    const iaPresent = [analysis.chatgptMentioned, analysis.claudeMentioned, analysis.perplexityMentioned].filter(Boolean).length;

    const competitorTags = competitors.map(c =>
        `<span style="display:inline-block;font-size:13px;font-weight:500;color:#c8ff00;background:rgba(200,255,0,0.15);padding:6px 14px;border-radius:20px;margin:4px;">${escapeHtml(c)}</span>`
    ).join('') + `<span style="display:inline-block;font-size:13px;font-weight:500;color:#ff4444;background:rgba(255,68,68,0.15);padding:6px 14px;border-radius:20px;margin:4px;">❌ ${escapeHtml(nomeFantasia)}</span>`;

    const chatgptHTML = highlightResponseHTML(chatgptResponse, nomeFantasia, competitors);
    const claudeHTML = highlightResponseHTML(claudeResponse, nomeFantasia, competitors);
    const perplexityHTML = highlightResponseHTML(perplexityResponse, nomeFantasia, competitors);

    // O template HTML completo do relatório (mesmo layout de antes)
    return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Relatório AI Visibility — ${escapeHtml(nomeFantasia)} | AUDITSEO</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;background:#0a0a0a;color:#fff;line-height:1.6;-webkit-font-smoothing:antialiased}
.container{max-width:800px;margin:0 auto;padding:40px 24px}
.header{text-align:center;padding:60px 0 40px;border-bottom:1px solid #222;margin-bottom:48px}
.header-badge{display:inline-block;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#c8ff00;background:rgba(200,255,0,0.15);padding:6px 16px;border-radius:20px;margin-bottom:24px}
.header h1{font-size:32px;font-weight:800;line-height:1.2;margin-bottom:8px}
.header h1 span{color:#c8ff00}
.header-subtitle{font-size:18px;color:#a0a0a0;margin-bottom:16px}
.header-meta{font-size:13px;color:#666}
.header-meta a{color:#a0a0a0;text-decoration:none}
.logo{font-size:14px;font-weight:700;letter-spacing:3px;margin-bottom:32px}
.logo span{color:#c8ff00}
.section{margin-bottom:48px}
.section-label{font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#c8ff00;margin-bottom:12px}
.section h2{font-size:24px;font-weight:700;margin-bottom:16px;line-height:1.3}
.section p{color:#a0a0a0;font-size:15px;line-height:1.7;margin-bottom:12px}
.score-hero{background:#161616;border:1px solid #222;border-radius:16px;padding:48px;text-align:center;margin-bottom:48px;position:relative;overflow:hidden}
.score-hero::before{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle at center,rgba(200,255,0,0.08) 0%,transparent 50%);pointer-events:none}
.score-circle{width:160px;height:160px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-direction:column;margin:0 auto 24px}
.score-number{font-size:56px;font-weight:900;line-height:1}
.score-max{font-size:16px;color:#666}
.score-label{font-size:20px;font-weight:700;margin-bottom:8px}
.score-description{font-size:15px;color:#a0a0a0;max-width:500px;margin:0 auto}
.stats-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:32px}
.stat-card{background:#161616;border:1px solid #222;border-radius:12px;padding:24px}
.stat-value{font-size:32px;font-weight:800;margin-bottom:4px}
.stat-label{font-size:13px;color:#a0a0a0;line-height:1.4}
.ai-result{background:#161616;border:1px solid #222;border-radius:12px;padding:24px;margin-bottom:16px}
.ai-result-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:8px}
.ai-result-platform{font-size:15px;font-weight:600}
.ai-result-query{font-size:13px;color:#666;margin-bottom:12px;font-style:italic}
.ai-result-body{font-size:14px;color:#a0a0a0;line-height:1.7;background:#0a0a0a;border-radius:8px;padding:16px;border-left:3px solid #222}
.divider{height:1px;background:#222;margin:48px 0}
.impact-item{display:flex;gap:16px;padding:20px 0;border-bottom:1px solid #1a1a1a}
.impact-item:last-child{border-bottom:none}
.impact-icon{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.impact-content h4{font-size:15px;font-weight:600;margin-bottom:4px}
.impact-content p{font-size:14px;color:#a0a0a0;line-height:1.6}
.cta-section{background:#161616;border:1px solid #c8ff00;border-radius:16px;padding:48px;text-align:center;margin-top:48px;position:relative;overflow:hidden}
.cta-section::before{content:'';position:absolute;top:-100px;left:-100px;width:300px;height:300px;background:radial-gradient(circle,rgba(200,255,0,0.08) 0%,transparent 70%);pointer-events:none}
.cta-section h2{font-size:24px;font-weight:700;margin-bottom:12px}
.cta-section p{color:#a0a0a0;font-size:15px;margin-bottom:32px;max-width:500px;margin-left:auto;margin-right:auto}
.cta-button{display:inline-block;background:#c8ff00;color:#000;font-size:15px;font-weight:700;padding:16px 40px;border-radius:8px;text-decoration:none;transition:all 0.3s}
.cta-button:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(200,255,0,0.3)}
.cta-sub{font-size:13px;color:#666;margin-top:16px}
.footer{text-align:center;padding:48px 0 24px;border-top:1px solid #222;margin-top:48px}
.footer-logo{font-size:13px;font-weight:700;letter-spacing:3px;color:#666;margin-bottom:8px}
.footer p{font-size:12px;color:#666}
.footer a{color:#c8ff00;text-decoration:none}
@media(max-width:600px){.container{padding:24px 16px}.header{padding:40px 0 32px}.header h1{font-size:24px}.score-hero{padding:32px 20px}.score-circle{width:120px;height:120px}.score-number{font-size:42px}.stats-grid{grid-template-columns:1fr}.cta-section{padding:32px 20px}}
</style>
</head>
<body>
<div class="container">

<header class="header">
    <div class="logo">AUDIT<span>SEO</span></div>
    <div class="header-badge">Relatório de AI Visibility</div>
    <h1>Relatório de Presença em IA<br><span>${escapeHtml(nomeFantasia)}</span></h1>
    <p class="header-subtitle">Como as inteligências artificiais respondem sobre sua marca hoje</p>
    <p class="header-meta">Preparado por <strong>Sidney Santos</strong> · AUDITSEO · ${dataAuditoria} · <a href="https://auditseo.com.br">auditseo.com.br</a></p>
</header>

<section class="section">
    <div class="score-hero">
        <p class="section-label">AI Visibility Score</p>
        <div class="score-circle" style="${scoreInfo.border}">
            <span class="score-number" style="color:${scoreInfo.color};">${aiScore}</span>
            <span class="score-max">/ 100</span>
        </div>
        <p class="score-label">${scoreInfo.status}</p>
        <p class="score-description">${scoreInfo.description}</p>
    </div>
</section>

<section class="section">
    <p class="section-label">Cenário</p>
    <h2>Onde a ${escapeHtml(nomeFantasia)} está hoje</h2>
    <div class="stats-grid">
        <div class="stat-card">
            <div class="stat-value" style="color:#c8ff00;">Página ${paginaGoogle}</div>
            <div class="stat-label">Posição no Google para<br>"${escapeHtml(pergunta.split('?')[0].substring(0, 40))}"</div>
        </div>
        <div class="stat-card">
            <div class="stat-value" style="color:#ff4444;">&lt;1%</div>
            <div class="stat-label">dos usuários chegam<br>até a página ${paginaGoogle} do Google</div>
        </div>
        <div class="stat-card">
            <div class="stat-value" style="color:#ff4444;">${iaPresent}/3</div>
            <div class="stat-label">IAs que mencionam<br>a ${escapeHtml(nomeFantasia)}</div>
        </div>
        <div class="stat-card">
            <div class="stat-value" style="color:#ff9500;">${competitors.length}</div>
            <div class="stat-label">concorrentes que aparecem<br>nas respostas das IAs</div>
        </div>
    </div>
</section>

<div class="divider"></div>

<section class="section">
    <p class="section-label">Teste em 3 plataformas</p>
    <h2>O que as IAs dizem quando perguntamos:<br>"${escapeHtml(pergunta)}"</h2>

    <div class="ai-result">
        <div class="ai-result-header">
            <span class="ai-result-platform">🤖 ChatGPT (GPT-4o)</span>
            ${buildStatusBadge(analysis.chatgptMentioned)}
        </div>
        <p class="ai-result-query">Pergunta: "${escapeHtml(pergunta)}"</p>
        <div class="ai-result-body">${chatgptHTML}</div>
    </div>

    <div class="ai-result">
        <div class="ai-result-header">
            <span class="ai-result-platform">🟣 Claude (Anthropic)</span>
            ${buildStatusBadge(analysis.claudeMentioned)}
        </div>
        <p class="ai-result-query">Pergunta: "${escapeHtml(pergunta)}"</p>
        <div class="ai-result-body">${claudeHTML}</div>
    </div>

    <div class="ai-result">
        <div class="ai-result-header">
            <span class="ai-result-platform">🔍 Perplexity AI</span>
            ${buildStatusBadge(analysis.perplexityMentioned)}
        </div>
        <p class="ai-result-query">Pergunta: "${escapeHtml(pergunta)}"</p>
        <div class="ai-result-body">${perplexityHTML}</div>
    </div>
</section>

<div class="divider"></div>

<section class="section">
    <p class="section-label">Quem aparece no seu lugar</p>
    <h2>Marcas que as IAs recomendam em vez da ${escapeHtml(nomeFantasia)}</h2>
    <p>Quando um consumidor pergunta à IA sobre o segmento, estas são as marcas citadas — e que estão capturando a atenção (e as vendas) que poderiam ser suas:</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;">${competitorTags}</div>
</section>

<div class="divider"></div>

<section class="section">
    <p class="section-label">Impacto no negócio</p>
    <h2>Por que isso importa para a ${escapeHtml(nomeFantasia)}</h2>
    <div class="impact-item">
        <div class="impact-icon" style="background:rgba(255,68,68,0.15);">📉</div>
        <div class="impact-content">
            <h4>58-62% das buscas no Google terminam sem clique</h4>
            <p>A IA responde diretamente na página de resultados. Se a ${escapeHtml(nomeFantasia)} não é citada, o consumidor nunca chega ao seu site. (SparkToro/Semrush, 2025-2026)</p>
        </div>
    </div>
    <div class="impact-item">
        <div class="impact-icon" style="background:rgba(255,68,68,0.15);">🤖</div>
        <div class="impact-content">
            <h4>800 milhões de pessoas usam ChatGPT toda semana</h4>
            <p>37% dos consumidores já iniciam buscas por IA. Quando perguntam sobre o segmento, a IA recomenda seus concorrentes. (OpenAI/Eight Oh Two, 2026)</p>
        </div>
    </div>
    <div class="impact-item">
        <div class="impact-icon" style="background:rgba(255,149,0,0.15);">💰</div>
        <div class="impact-content">
            <h4>Visitante vindo de IA vale 4.4x mais</h4>
            <p>Quem chega via citação de IA tem menor bounce rate (-27%), mais tempo no site (+38%) e converte mais. (Semrush/Adobe, 2025)</p>
        </div>
    </div>
    <div class="impact-item">
        <div class="impact-icon" style="background:rgba(255,149,0,0.15);">⏳</div>
        <div class="impact-content">
            <h4>Apenas ~3% das empresas otimizam presença em IAs</h4>
            <p>A janela está aberta. Tráfego de AI Search deve superar o orgânico até 2028. (AUDITSEO/Semrush, 2025)</p>
        </div>
    </div>
</section>

<div class="divider"></div>

<section class="section">
    <p class="section-label">Solução</p>
    <h2>O que pode ser feito</h2>
    <p>Existem estratégias específicas para fazer a ${escapeHtml(nomeFantasia)} aparecer nas respostas das IAs. O processo envolve otimização de conteúdo estruturado, entity building, presença em fontes autoritativas e técnicas de AI SEO.</p>
    <p>Na AUDITSEO, somos especializados em <strong>Search Intelligence AI</strong> — a ciência de tornar marcas encontráveis, citáveis e recomendáveis por humanos e máquinas.</p>
    <p>Se fizer sentido, posso preparar um <strong>diagnóstico completo gratuito em 48 horas</strong> com o plano de ação detalhado para a ${escapeHtml(nomeFantasia)}.</p>
</section>

<div class="cta-section">
    <p class="section-label">Próximo passo</p>
    <h2>Quer tornar a ${escapeHtml(nomeFantasia)}<br>visível para as IAs?</h2>
    <p>Agende uma conversa de 15 minutos. Sem compromisso.</p>
    <a href="https://wa.me/5511996384376?text=Ol%C3%A1%20Sidney!%20Vi%20o%20relat%C3%B3rio%20de%20AI%20Visibility%20da%20${nomeEncoded}%20e%20gostaria%20de%20saber%20mais." class="cta-button">QUERO O DIAGNÓSTICO COMPLETO →</a>
    <p class="cta-sub">Diagnóstico gratuito · Resposta em até 24h · Sem compromisso</p>
</div>

<footer class="footer">
    <div class="footer-logo">AUDITSEO</div>
    <p>Search Intelligence AI · <a href="https://auditseo.com.br">auditseo.com.br</a></p>
    <p style="margin-top:8px;">Sidney Santos · <a href="https://wa.me/5511996384376">+55 11 99638-4376</a></p>
    <p style="margin-top:8px;">São Paulo, SP · © 2024–2026 AUDITSEO</p>
    <p style="margin-top:16px;font-size:11px;">Relatório exclusivo para ${escapeHtml(nomeFantasia)} (${escapeHtml(dominio)}). Dados coletados em ${dataAuditoria}.</p>
</footer>

</div>
</body>
</html>`;
}

// ============================================================
// SERVIDOR HTTP
// ============================================================

const server = http.createServer(async (req, res) => {

    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Servir relatórios estáticos
    if (req.method === 'GET' && req.url.startsWith('/relatorios/')) {
        const filename = path.basename(req.url);
        const filepath = path.join(CONFIG.REPORTS_DIR, filename);
        if (fs.existsSync(filepath)) {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(fs.readFileSync(filepath, 'utf8'));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Relatório não encontrado');
        }
        return;
    }

    // Servir a interface
    if (req.method === 'GET' && (req.url === '/' || req.url === '/gerador')) {
        const htmlPath = path.join(__dirname, 'gerador.html');
        if (fs.existsSync(htmlPath)) {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(fs.readFileSync(htmlPath, 'utf8'));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('gerador.html não encontrado');
        }
        return;
    }

    // Listar relatórios existentes
    if (req.method === 'GET' && req.url === '/api/relatorios') {
        const files = fs.readdirSync(CONFIG.REPORTS_DIR)
            .filter(f => f.endsWith('.html'))
            .map(f => ({
                filename: f,
                url: `${CONFIG.PUBLIC_URL}/${f}`,
                localUrl: `/relatorios/${f}`,
                created: fs.statSync(path.join(CONFIG.REPORTS_DIR, f)).mtime
            }))
            .sort((a, b) => new Date(b.created) - new Date(a.created));

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ reports: files }));
        return;
    }

    // GERAR RELATÓRIO
    if (req.method === 'POST' && req.url === '/api/gerar') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
            try {
                const input = JSON.parse(body);
                const { nomeFantasia, dominio, nicho, keywordOrigem, posicaoManual, perguntaCustom } = input;

                if (!nomeFantasia || !dominio) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'nomeFantasia e dominio são obrigatórios' }));
                    return;
                }

                console.log(`\n========================================`);
                console.log(`Gerando relatório: ${nomeFantasia} (${dominio})`);
                console.log(`========================================`);

                const pergunta = perguntaCustom || CONFIG.PERGUNTAS[nicho] || CONFIG.PERGUNTAS.outro;
                const keyword = keywordOrigem || 'comprar vinho online';

                // Etapa 1: Consultar as 3 IAs em paralelo
                console.log('\n📡 Consultando IAs...');
                const [chatgptResult, claudeResult, perplexityResult] = await Promise.all([
                    queryChatGPT(pergunta),
                    queryClaude(pergunta),
                    queryPerplexity(pergunta)
                ]);

                console.log(`  ChatGPT: ${chatgptResult.success ? '✅' : '❌'}`);
                console.log(`  Claude: ${claudeResult.success ? '✅' : '❌'}`);
                console.log(`  Perplexity: ${perplexityResult.success ? '✅' : '❌'}`);

                // Etapa 2: Consultar posição no Google
                let posicaoGoogle = posicaoManual || null;
                let paginaGoogle;

                if (!posicaoGoogle) {
                    const googleResult = await queryGooglePosition(keyword, dominio);
                    if (googleResult.position) {
                        posicaoGoogle = googleResult.position;
                        paginaGoogle = googleResult.page;
                        console.log(`\n🔍 Google: posição ${posicaoGoogle} (página ${paginaGoogle})`);
                    } else {
                        posicaoGoogle = 100;
                        paginaGoogle = 10;
                        console.log('\n🔍 Google: não encontrado nos top 100 (usando 100+)');
                    }
                } else {
                    paginaGoogle = Math.ceil(posicaoGoogle / 10);
                }

                // Etapa 3: Analisar respostas
                console.log('\n🧠 Analisando respostas...');
                const analysis = calculateScore(chatgptResult, claudeResult, perplexityResult, nomeFantasia, dominio);
                const aiScore = analysis.score;
                const scoreInfo = getScoreInfo(aiScore, nomeFantasia);
                const competitors = analysis.competitors;

                console.log(`  Score: ${aiScore}/100 (${scoreInfo.status})`);
                console.log(`  Concorrentes encontrados: ${competitors.join(', ') || 'nenhum'}`);
                console.log(`  ChatGPT menciona: ${analysis.chatgptMentioned ? 'SIM' : 'NÃO'}`);
                console.log(`  Claude menciona: ${analysis.claudeMentioned ? 'SIM' : 'NÃO'}`);
                console.log(`  Perplexity menciona: ${analysis.perplexityMentioned ? 'SIM' : 'NÃO'}`);

                // Etapa 4: Data
                const now = new Date();
                const months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
                const dataAuditoria = `${now.getDate()} de ${months[now.getMonth()]} de ${now.getFullYear()}`;

                // Etapa 5: Gerar HTML
                console.log('\n📄 Gerando HTML...');
                const reportHTML = generateReportHTML({
                    nomeFantasia,
                    dominio,
                    pergunta,
                    posicaoGoogle,
                    paginaGoogle,
                    aiScore,
                    scoreInfo,
                    chatgptResponse: chatgptResult.response,
                    claudeResponse: claudeResult.response,
                    perplexityResponse: perplexityResult.response,
                    analysis,
                    dataAuditoria,
                    competitors
                });

                // Etapa 6: Salvar arquivo
                const filename = 'relatorio-' + dominio.replace(/\./g, '-').replace(/[^a-z0-9-]/gi, '') + '.html';
                const filepath = path.join(CONFIG.REPORTS_DIR, filename);
                fs.writeFileSync(filepath, reportHTML, 'utf8');

                const publicUrl = `${CONFIG.PUBLIC_URL}/${filename}`;
                const localUrl = `/relatorios/${filename}`;

                console.log(`\n✅ Relatório salvo: ${filepath}`);
                console.log(`🔗 URL pública: ${publicUrl}`);
                console.log(`🔗 URL local: http://localhost:${CONFIG.PORT}${localUrl}`);

                // Responder
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    success: true,
                    report: {
                        filename,
                        publicUrl,
                        localUrl: `http://localhost:${CONFIG.PORT}${localUrl}`,
                        score: aiScore,
                        scoreStatus: scoreInfo.status,
                        chatgptMentioned: analysis.chatgptMentioned,
                        claudeMentioned: analysis.claudeMentioned,
                        perplexityMentioned: analysis.perplexityMentioned,
                        competitors,
                        posicaoGoogle,
                        paginaGoogle
                    }
                }));

            } catch (e) {
                console.error('Erro:', e);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: e.message }));
            }
        });
        return;
    }

    // 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
});

server.listen(CONFIG.PORT, () => {
    console.log(`\n🚀 AUDITSEO Report Generator rodando em http://localhost:${CONFIG.PORT}`);
    console.log(`📁 Relatórios salvos em: ${CONFIG.REPORTS_DIR}`);
    console.log(`🌐 URL pública: ${CONFIG.PUBLIC_URL}\n`);
});
