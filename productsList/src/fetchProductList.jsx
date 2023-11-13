async function fetchProductList ({queryKey}) {
    
    const category = queryKey[1];
    const results = await fetch(
        `https://dummyjson.com/products/category/${category}`
    );
    
    if (!results.ok) {
        throw new Error(`Error getting data`);
      }

    const json = await results.json();
    
    return json.products

}

export default fetchProductList;