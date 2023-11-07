import { useEffect, useState } from "react"
const localCache = [];

export default function useProductList(category) {
    const [productsList,setProductsList] = useState([]);    

    useEffect(() =>
    {
        if (! category)
        {
            setProductsList([])
        }
        else if ( localCache[category])
        {
            setProductsList(localCache[category])
        }
        else
        {
            // request productList
            requestProductList(category)
        }
        

        async function requestProductList(category)
        {
            const results = await fetch(
                `https://fakestoreapi.com/products/category/${category}`
            );
            const json = await results.json();
            localCache[category] = json;
            
            setProductsList(json);
        }

    }
    ,[category]);


    return [productsList]
}