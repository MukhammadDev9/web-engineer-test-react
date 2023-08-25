import { FC } from "react"
import { useLoad } from "../../hooks/request"

interface Props {}

const Home: FC<Props> = ({}) => {
    const { response, loading } = useLoad({ url: "home.json" })

    return <div>{loading ? "loading" : response.name}</div>
}

export default Home
