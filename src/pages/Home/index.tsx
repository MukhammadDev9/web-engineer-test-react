import { FC } from "react"
import { useLoad } from "../../hooks/request"

interface Props {}

const Home: FC<Props> = ({}) => {
    const { response, loading } = useLoad({ url: "home.json" })

    return (
        <section className="home-page">
            <div className="home-page__container">{loading ? "loading" : response.name}</div>
        </section>
    )
}

export default Home
