import { FC, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import clsx from "clsx"
import routes from "../../data/routes.json"
import { getLocaleStorage, setLocaleStorage } from "../../helpers/utils"

interface Props {}

const Navbar: FC<Props> = ({}) => {
    const [activePage, setActivePage] = useState<string>(
        getLocaleStorage("page") == null ? "home" : String(getLocaleStorage("page")),
    )
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const [activeNavbar, setActiveNavbar] = useState<boolean>(false)

    const handleActivePage = (name: string) => {
        setLocaleStorage("page", name)
        setActivePage(name)
        setOpenMenu(false)
    }

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
        if (openMenu) {
            window.document.body.removeAttribute("style")
        } else {
            window.document.body.style.overflow = "hidden"
            window.document.body.style.height = "100vh"
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) setActiveNavbar(true)
            else setActiveNavbar(false)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <nav className="navbar">
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
                                                onClick={() => handleActivePage(route.name)}>
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
        </nav>
    )
}

export default Navbar
