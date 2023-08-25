import { FC } from "react"
import { useLoad } from "../../hooks/request"
import { THomeMetaResponse } from "./types"
import { Loader } from "../../components"

const Home: FC = () => {
    const getRequest = useLoad({ url: "home.json" })
    const { response, loading }: THomeMetaResponse = getRequest

    if (loading) {
        return <Loader />
    }

    return (
        <section className="home-page fade-in">
            <div className="container">
                <div className="home-page__container">
                    <h1 className="home-page--title page-">{response?.meta?.title}</h1>
                    <p className="home-page--description">{response?.meta?.description}</p>
                    <div className="topic">
                        <ul className="topic__list">
                            {response?.meta?.topics.map((topic) => (
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
            </div>
        </section>
    )
}

export default Home
