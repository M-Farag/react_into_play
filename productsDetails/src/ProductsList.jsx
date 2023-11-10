import { useEffect, useState } from "react"

const ProductsList = () => {
    const [products,setProducts] = useState([])

    useEffect(
        ()=> {

            getProducts()

            async function getProducts() {
                const results = await fetch(
                    `https://fakestoreapi.com/products`
                )

                const json = await results.json()
                setProducts(json)
            }

        },[]
    )


    return (
        <div>
            <h3>Product list</h3>

            <ol>
                {
                    products.map(
                        p => {
                            return <li key={p.id}> {p.title}</li>
                        }
                    )
                }
            </ol>
        </div>




    )
}


export default ProductsList