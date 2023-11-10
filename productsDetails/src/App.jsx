import  ReactDOM  from "react-dom/client";
import ProductsList from "./ProductsList";
import { BrowserRouter ,Route, Routes } from "react-router-dom"
import Product from "./Product";


const App = () => {

    // Define routes
    
    


    return (
        <BrowserRouter>
        
        <Routes>
            <Route path="/products/:id" element={<Product />} />
            <Route path="/" element={<ProductsList />} />
        </Routes>

        
        </BrowserRouter>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);