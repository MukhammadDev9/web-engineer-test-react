import { FC } from "react"
import { useLoad } from "../../hooks/request"
import { TContentMetaResponse } from "./types"

interface Props {}

const Content: FC<Props> = ({}) => {
    const getRequest = useLoad({ url: "content.json" })
    const { response, loading }: TContentMetaResponse = getRequest

    return (
        <section className="home-page">
            <div className="home-page__container">
                <h1 className="home-page--title page-">{!loading && response.meta?.title}</h1>
                <p className="home-page--description">{!loading && response.meta?.description}</p>
            </div>
        </section>
    )
}

export default Content
