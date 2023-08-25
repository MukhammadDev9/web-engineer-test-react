export interface TContentMetaResponse {
    loading: boolean
    response: {
        name: string
        meta: {
            title: string
            description: string
        }
    }
}