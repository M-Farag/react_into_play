import ReactDOM  from "react-dom/client";


const App = () => {
    return (
        <div>
            <h1>Hello from React</h1>
        </div>
    );
}

const container  = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);