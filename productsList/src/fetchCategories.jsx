export default async function fetchCategories({queryKey})
{
    const categories = queryKey[1];
    const results = await fetch(
        `https://dummyjson.com/products/categories`
    );


    if(! results.ok) {
        throw new Error('Error getting categories');
    }
    
    const json = await results.json();
    return json;
}