import {  useParams } from "react-router-dom";

const Product = () => {

    const {product_id} = useParams()

    return (
        <div>
            <h3>Product {product_id} details</h3>
        </div>
        
    )
}

export default Product;