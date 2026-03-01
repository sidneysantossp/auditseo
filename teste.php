<?php
// Habilita exibição de erros
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h1>Teste de Servidor</h1>";

echo "<h2>1. PHP funcionando:</h2>";
echo "<p style='color:green'>✅ PHP está funcionando!</p>";

echo "<h2>2. Verificando mod_rewrite:</h2>";
if (function_exists('apache_get_modules')) {
    $modules = apache_get_modules();
    if (in_array('mod_rewrite', $modules)) {
        echo "<p style='color:green'>✅ mod_rewrite ATIVO</p>";
    } else {
        echo "<p style='color:red'>❌ mod_rewrite não encontrado</p>";
    }
} else {
    echo "<p style='color:orange'>⚠️ Função apache_get_modules não disponível (normal em alguns servidores)</p>";
}

echo "<h2>3. Caminhos:</h2>";
echo "<p>DOCUMENT_ROOT: " . $_SERVER['DOCUMENT_ROOT'] . "</p>";

echo "<h2>4. Testando arquivo:</h2>";
$arquivo = $_SERVER['DOCUMENT_ROOT'] . '/saude/cardiologistas.html';
echo "<p>Procurando: " . $arquivo . "</p>";
if (file_exists($arquivo)) {
    echo "<p style='color:green'>✅ Arquivo EXISTE</p>";
} else {
    echo "<p style='color:red'>❌ Arquivo NÃO existe</p>";
}

echo "<h2>5. Listando pasta /saude/:</h2>";
$pasta = $_SERVER['DOCUMENT_ROOT'] . '/saude/';
if (is_dir($pasta)) {
    $arquivos = scandir($pasta);
    echo "<ul>";
    foreach ($arquivos as $arq) {
        if ($arq != '.' && $arq != '..') {
            echo "<li>" . $arq . "</li>";
        }
    }
    echo "</ul>";
} else {
    echo "<p style='color:red'>Pasta /saude/ não encontrada</p>";
}
?>