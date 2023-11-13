import { useEffect, useState } from "react";
import useProductList from "./useProductsList";
import fetchProductList from "./fetchProductList";
import {useQuery} from "@tanstack/react-query";


const StoreCategory = () => {

    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const productsList  = useQuery(['key_1',category],fetchProductList);
    
    
    useEffect(
        ()=> {
            getCategories();

            async function getCategories()
            {   
                const results = await fetch(
                    `https://dummyjson.com/products/categories`
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
                            productsList.data && productsList.data.map(
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