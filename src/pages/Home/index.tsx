import { FC } from "react"
import { useLoad } from "../../hooks/request"

interface Props {}

const Home: FC<Props> = ({}) => {
    const { response, loading } = useLoad({ url: "home.json" })

    return (
        <section className="home-page">
            <div className="home-page__container">
                <h1 className="home-page--title page-">{!loading && response?.meta?.title}</h1>
                <p className="home-page__description">{!loading && response?.meta?.description}</p>
                <div className="quotes">
                    
                </div>
            </div>
        </section>
    )
}

export default Home
