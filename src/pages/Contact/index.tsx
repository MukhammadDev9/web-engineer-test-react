import { FC } from "react"
import { useLoad } from "../../hooks/request"
import type { TContactMetaResponse } from "./types"

interface Props {}

const Contact: FC<Props> = ({}) => {
    const getRequest = useLoad({ url: "contact.json" })
    const { response, loading }: TContactMetaResponse = getRequest

    return (
        <section className="contact-page">
            <div className="contact-page__container">
                <h1 className="contact-page--title page-">{!loading && response.meta?.title}</h1>
                <p className="contact-page--description">
                    {!loading && response.meta?.description}
                </p>
            </div>
        </section>
    )
}

export default Contact
