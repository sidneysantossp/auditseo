export function printLegacyNotice(scriptName, replacement) {
  const lines = [
    '',
    '========================================',
    ' LEGACY FLOW - NOT THE PRIMARY PATH',
    '========================================',
    `${scriptName} ainda existe apenas para compatibilidade e migração.`,
    'A fonte principal de verdade do projeto agora é o workspace Astro em apps/site.',
    replacement ? `Use preferencialmente: ${replacement}` : '',
    'Consulte o README da raiz antes de operar o legado.',
    '========================================',
    ''
  ].filter(Boolean);

  console.warn(lines.join('\n'));
}
