export interface TContactMetaResponse {
    loading: boolean
    response: {
        name: string
        meta: {
            title: string
            description: string
        }
    }
}