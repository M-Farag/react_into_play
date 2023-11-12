import ReactDOM  from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Quote from "./Quote"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Quote />} />
            </Routes>
        </BrowserRouter>
    )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App />)