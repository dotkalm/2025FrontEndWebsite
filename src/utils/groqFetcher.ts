interface SanityResponse<T> {
  result: T;
  query: string;
  ms: number;
}
export async function sanityFetch<T = unknown, P = Record<string, unknown>>(
  query: string,
  params?: P,
  options?: {
    perspective?: 'published' | 'drafts';
  }
): Promise<T> {
    const SANITY_GROQ_URL = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v${process.env.NEXT_PUBLIC_SANITY_API_VERSION}/data/query/production`;
    const url = new URL(SANITY_GROQ_URL)
    url.searchParams.set('query', query)

    if (options?.perspective) {
        url.searchParams.set('perspective', options.perspective)
    }

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                url.searchParams.set(`$${key}`, String(`"${value}"`))
            }
        })
    }
    try {
        const response = await fetch(url.toString())

        console.log(response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data: SanityResponse<T> = await response.json()
        return data.result
    } catch (error) {
        console.error('Error fetching from Sanity:', error)
        throw new Error(`Sanity fetch failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
}

export async function getSanityUsingGroq<T = unknown>(GROQ_QUERY: string): Promise<T> {

  return sanityFetch<T, undefined>(
    GROQ_QUERY,
    undefined,
    {
      perspective: (process.env.NEXT_PUBLIC_SANITY_PERSPECTIVE as 'published' | 'drafts') || 'published'
    }
  )
};