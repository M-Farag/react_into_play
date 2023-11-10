import  ReactDOM  from "react-dom/client";
import ProductsList from "./ProductsList";
import { BrowserRouter ,Link,Route, Routes } from "react-router-dom"
import Product from "./Product";


const App = () => {

    // Define routes
    
    


    return (
        <BrowserRouter>
        <header>
            <Link to="/"> HomePage </Link>
        </header>
        <Routes>
            <Route path="/products/:product_id" element={<Product />} />
            <Route path="/" element={<ProductsList />} />
        </Routes>


        </BrowserRouter>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);