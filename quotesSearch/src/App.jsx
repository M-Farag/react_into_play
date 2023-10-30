import ReactDOM  from "react-dom/client";
import SearchParams from "./SearchParams";


const App = () => {
    return (
        <div>
            <SearchParams />
        </div>
    );
}

const container  = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);