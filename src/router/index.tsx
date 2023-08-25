import { FC } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import routes from "../data/routes.json"
import { Contact, Content, Home } from "../pages"

interface Props {}

type TRoutes = {
    Home: React.ReactNode
    Content: React.ReactNode
    Contact: React.ReactNode
}

const AppRouter: FC<Props> = ({}) => {
    const RouteList: TRoutes = {
        Home: <Home />,
        Content: <Content />,
        Contact: <Contact />,
    }

    return (
        <Routes>
            {routes.map((route) => (
                <Route
                    key={route.id}
                    path={route.path}
                    element={RouteList[route.component as keyof TRoutes]}
                />
            ))}
            <Route path={"/*"} element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRouter
