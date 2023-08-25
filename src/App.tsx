import React from "react"
import AppRouter from "./router"
import { Footer, Navbar } from "./components"

function App() {
    return (
        <div className="wrapper">
            <Navbar />
            <main>
                <AppRouter />
            </main>
            <Footer />
        </div>
    )
}

export default App
