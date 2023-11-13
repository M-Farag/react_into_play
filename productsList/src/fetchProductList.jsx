export default async function fetchProductList ({queryKey}) {
    
    const category = queryKey[1];
    // add default category if none is selected
    if (!category) {
        return [];
    }
    const results = await fetch(
        `https://dummyjson.com/products/category/${category}`
    );
    
    if (!results.ok) {
        throw new Error(`Error getting data`);
      }

    const json = await results.json();
    
    return json.products

}