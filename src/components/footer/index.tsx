import { FC, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import routes from "../../data/routes.json"
import { getLocaleStorage, setLocaleStorage } from "../../helpers/utils"
import clsx from "clsx"

interface Props {}

const Footer: FC<Props> = ({}) => {
    const [activePage, setActivePage] = useState<string>(
        getLocaleStorage("page") == null ? "home" : String(getLocaleStorage("page")),
    )

    const handleActivePage = (name: string) => {
        setLocaleStorage("page", name)
        setActivePage(name)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    useEffect(() => {
        routes.forEach((route) => {
            if (route.path === window.location.pathname) setActivePage(route.name)
        })
    }, [])

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__body">
                    <h3 className="footer__title">Footer</h3>
                    <div className="footer-menu">
                        <ul className="footer-menu__list">
                            {routes.map((route) => (
                                <li key={route.id} className="footer-menu__item">
                                    <Link
                                        to={route.path}
                                        className={clsx(
                                            "footer-menu__link",
                                            activePage === route.name && "_active",
                                        )}
                                        onClick={() => handleActivePage(route.name)}>
                                        {route.component}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
