export function json(response, statusCode, payload, extraHeaders = {}) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    ...extraHeaders
  });
  response.end(JSON.stringify(payload));
}

export function noContent(response, extraHeaders = {}) {
  response.writeHead(204, extraHeaders);
  response.end();
}

export async function readJsonBody(request) {
  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  const rawBody = Buffer.concat(chunks).toString('utf8');
  if (!rawBody) return {};

  try {
    return JSON.parse(rawBody);
  } catch {
    throw new Error('invalid_json');
  }
}

export function getCorsHeaders(origin, allowedOrigins) {
  const headers = {
    Vary: 'Origin',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  };

  if (origin && allowedOrigins.includes(origin)) {
    return {
      ...headers,
      'Access-Control-Allow-Origin': origin
    };
  }

  return headers;
}
