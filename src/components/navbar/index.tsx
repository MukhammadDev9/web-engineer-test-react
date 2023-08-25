import React, { FC, useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import clsx from "clsx"
import routes from "../../data/routes.json"

const Navbar: FC = () => {
    const [activePage, setActivePage] = useState<string>(localStorage.getItem("page") || "home")
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const [activeNavbar, setActiveNavbar] = useState<boolean>(false)

    const handleActivePage = useCallback((name: string) => {
        localStorage.setItem("page", name)
        setActivePage(name)
    }, [])

    const handleOpenMenu = useCallback(() => {
        setOpenMenu((prevState) => !prevState)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setActiveNavbar(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(() => {
        const currentPage = routes.find((route) => route.path === window.location.pathname)
        if (currentPage) {
            setActivePage(currentPage.name)
        }
    }, [])

    const handlePageClick = (name: string) => {
        handleActivePage(name)
        handleOpenMenu()
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const bodyStyle = document.body.style
    if (!openMenu) {
        bodyStyle.removeProperty("overflow")
        bodyStyle.removeProperty("height")
    } else {
        bodyStyle.overflow = "hidden"
        bodyStyle.height = "100vh"
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div
                    className={clsx(
                        "navbar__wrapper",
                        activeNavbar && !openMenu && "_active",
                        openMenu && "_active-menu",
                    )}>
                    <div className="navbar__container">
                        <div className="navbar__body">
                            <div className="navbar__logo">
                                <Link to="/" className="navbar__logo--link">
                                    Company
                                </Link>
                            </div>
                            <div className="navbar__menu menu">
                                <div className={clsx("menu__body", openMenu && "_active")}>
                                    <ul className="menu__list menu__container">
                                        {routes.map((route) => (
                                            <li key={route.id} className="menu__item">
                                                <Link
                                                    to={route.path}
                                                    className={clsx(
                                                        "menu__link",
                                                        activePage === route.name && "_active",
                                                    )}
                                                    onClick={() => handlePageClick(route.name)}>
                                                    {route.component}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <button
                                type="button"
                                className={clsx("menu__icon", openMenu && "_active")}
                                onClick={handleOpenMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
