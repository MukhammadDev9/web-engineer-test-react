import { FC } from "react"

interface Props {}

const Loader: FC<Props> = ({}) => {
    return (
        <div className="loader">
            <div className="loader__spin">Loading...</div>
        </div>
    )
}

export default Loader
