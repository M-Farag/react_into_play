import ReactDOM  from "react-dom/client"

const App = () => {
    return (
        <h2>Hello from react</h2>
    )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App />)