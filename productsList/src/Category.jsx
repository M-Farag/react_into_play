import { useEffect, useState } from "react";

const Category = () => {

    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
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
        },[category]
    
        );
    return (
        <div className="main-container">
                <label htmlFor="categories">
                    <select id="category" onChange={
                        (e)=> {
                            setCategory(e.target.value)
                        }
                     }>
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
                        <option>item 1</option>
                    </select>
                </label>
            </div>
    );
}

export default Category