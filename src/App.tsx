import React from "react"
import AppRouter from "./router"
import { Navbar } from "./components"

function App() {
    return (
        <div className="wrapper">
            <div className="container">
                <Navbar />
                <main>
                    <AppRouter />
                </main>
            </div>
        </div>
    )
}

export default App
