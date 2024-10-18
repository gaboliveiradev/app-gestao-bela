// Essa função foi criada para receber um path como parâmetro, normaliza-lo,
// concatena-lo e retornar a url completa.
export function getUrl(path?: string) {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || '';
    const normalizedPath = path && !path.startsWith('/') ? `/${path}` : path || '';

    return `${baseUrl}${normalizedPath}`;
}