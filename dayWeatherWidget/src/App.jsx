import  ReactDOM from "react-dom/client"
import Widgets from "./Widgets"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Widgets />} />
            </Routes>
        </BrowserRouter>
        
    )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App />)