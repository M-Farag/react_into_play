import { useEffect, useState } from "react";
import useProductList from "./useProductsList";

const StoreCategory = () => {

    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const productsList = useProductList(category);
    
    useEffect(
        ()=> {
            getCategories();

            async function getCategories(category)
            {   
                const results = await fetch(
                    `https://fakestoreapi.com/products/categories`
                );
                const json = await results.json();
                setCategories(json);
            }
        },[]
    
        );
    return (
        <div className="main-container">
                <label htmlFor="categories">
                    <select id="category" onChange={e=>{
                        setCategory(e.target.value)
                    }}>
                        <option> -- </option>
                        {
                            categories.map(
                                cat => 
                                {
                                    return <option key={cat}>{cat}</option>
                                }
                            )
                        }
                    </select>
                </label>

                <label htmlFor="items">
                    <select>
                        <option> -- </option>
                        {
                            productsList.map(
                                item => 
                                {
                                    return <option key={item.id}>{item.title}</option>
                                }
                            )
                        }
                    </select>
                </label>
            </div>
    );
}

export default StoreCategory