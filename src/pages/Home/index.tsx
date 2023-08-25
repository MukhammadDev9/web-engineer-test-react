import { FC } from "react"
import { useLoad } from "../../hooks/request"
import { THomeMetaResponse } from "./types"

interface Props {}

const Home: FC<Props> = ({}) => {
    const getRequest = useLoad({ url: "home.json" })
    const { response, loading }: THomeMetaResponse = getRequest

    return (
        <section className="home-page">
            <div className="home-page__container">
                <h1 className="home-page--title page-">{!loading && response.meta?.title}</h1>
                <p className="home-page--description">{!loading && response.meta?.description}</p>
                <div className="topic">
                    <ul className="topic__list">
                        {!loading &&
                            response.meta?.topics.map((topic) => (
                                <li className="topic__item">
                                    <h2 className="topic__title">{topic.topic_title}</h2>
                                    <div className="quote">
                                        <ul className="quote__list">
                                            {topic.quotes.map((quote) => (
                                                <li className="quote__item">
                                                    <h3 className="quote__title">
                                                        {quote.quote_title}
                                                    </h3>
                                                    <p className="quote__body">
                                                        {quote.quote_body}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Home
