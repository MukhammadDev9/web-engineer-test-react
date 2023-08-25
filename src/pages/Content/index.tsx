import { FC } from "react"
import { useLoad } from "../../hooks/request"
import type { TContentMetaResponse } from "./types"

interface Props {}

const Content: FC<Props> = ({}) => {
    const getRequest = useLoad({ url: "content.json" })
    const { response, loading }: TContentMetaResponse = getRequest

    return (
        <section className="content-page">
            <div className="container">
                <div className="content-page__container">
                    <h1 className="content-page--title page-">
                        {!loading && response.meta?.title}
                    </h1>
                    <p className="content-page--description">
                        {!loading && response.meta?.description}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Content
