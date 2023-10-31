import { useEffect, useState } from "react";

const SearchParams = () => {
    const [quote, setQuote] = useState("");
    const [quotes, setQuotes] = useState([]);
    const category = "age";

    useEffect(
        () => {
            getQuotes()
        },[
            quote
        ]
    );
    

    async function getQuotes() {
        const results = await fetch(
            `https://type.fit/api/quotes`
        );

        const json = await results.json();
        setQuotes(json);
     }


    return (
        <div id="formContainer">
            <form id="quoteSearch">
            <label htmlFor="quote">Quote Search:</label>
            <input type="text" id="quote" 
            onChange={e=> (setQuote(e.target.val))}
            />
            <button type="button"
            onClick={e=>(
                getQuotes()
            )}
            >Search</button>
        </form>

        <div id="searchResults">

            <ul>
                {    
                    quotes.map(
                        quote => (
                            <li>Quote: {quote.text}</li>
                        )
                    )   
                }
                </ul>
        </div>
        </div>
        
    );
};

export default SearchParams;