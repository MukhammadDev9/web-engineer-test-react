import React, { FC, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import routes from "../../data/routes.json"
import clsx from "clsx"

const Footer: FC = () => {
    const activePageFromLocalStorage = localStorage.getItem("page")
    const [activePage, setActivePage] = useState<string>(activePageFromLocalStorage || "home")

    useEffect(() => {
        const currentPage = routes.find((route) => route.path === window.location.pathname)
        if (currentPage) {
            setActivePage(currentPage.name)
        }
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
                                    <FooterLink
                                        path={route.path}
                                        active={activePage === route.name}
                                        onClick={() => setActivePage(route.name)}>
                                        {route.component}
                                    </FooterLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

interface FooterLinkProps {
    path: string
    active: boolean
    onClick: () => void
    children: React.ReactNode
}

const FooterLink: FC<FooterLinkProps> = ({ path, active, onClick, children }) => (
    <Link to={path} className={clsx("footer-menu__link", active && "_active")} onClick={onClick}>
        {children}
    </Link>
)

export default Footer
