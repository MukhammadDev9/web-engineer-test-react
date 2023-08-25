import { FC } from "react"
import { useLoad } from "../../hooks/request"
import type { TContentMetaResponse } from "./types"
import { Loader } from "../../components"

const Content: FC = () => {
    const getRequest = useLoad({ url: "content.json" })
    const { response, loading }: TContentMetaResponse = getRequest

    if (loading) {
        return <Loader />
    }

    return (
        <section className="content-page fade-in">
            <div className="container">
                <div className="content-page__container">
                    <h1 className="content-page--title page-">{response?.meta?.title}</h1>
                    <p className="content-page--description">{response?.meta?.description}</p>
                </div>
            </div>
        </section>
    )
}

export default Content
