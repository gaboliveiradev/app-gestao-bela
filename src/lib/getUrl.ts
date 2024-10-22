/** { Recebe um parâmetro path opcional, que é uma string. Vai pegar o nosso baseUrl } */
/** { das nossas variáveis de ambientes, vai normalizar e retornar as duas juntas. baseUrl+Path} */
export function getUrl(path?: string) {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || '';
    const normalizedPath = path && !path.startsWith('/') ? `/${path}` : path || '';

    return `${baseUrl}${normalizedPath}`;
}