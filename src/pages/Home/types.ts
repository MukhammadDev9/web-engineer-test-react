type NumberID = number

export interface THomeMetaResponse {
    loading: boolean
    response: {
        name: string
        meta: {
            title: string
            description: string
            topics: TTopics[]
        }
    }
}

type TTopics = NumberID & {
    topic_title: string
    quotes: TQuotes[]
}

type TQuotes = NumberID & {
    quote_title: string
    quote_body: string
}