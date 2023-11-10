import  ReactDOM  from "react-dom/client";
import ProductsList from "./ProductsList";

const App = () => {
    return (
        <ProductsList />
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);