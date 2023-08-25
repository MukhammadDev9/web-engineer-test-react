import { FC } from "react"
import { useLoad } from "../../hooks/request"
import type { TContactMetaResponse } from "./types"
import { Loader } from "../../components"

interface Props {}

const Contact: FC<Props> = ({}) => {
    const getRequest = useLoad({ url: "contact.json" })
    const { response, loading }: TContactMetaResponse = getRequest

    if (loading) {
        return <Loader />
    }

    return (
        <section className="contact-page fade-in">
            <div className="container">
                <div className="contact-page__container">
                    <h1 className="contact-page--title page-">{response.meta?.title}</h1>
                    <p className="contact-page--description">{response.meta?.description}</p>
                </div>
            </div>
        </section>
    )
}

export default Contact
