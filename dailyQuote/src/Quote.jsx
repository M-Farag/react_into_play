import { useEffect, useState } from "react"

const Quote = () => {

    const [quote,setQuote] = useState('')
    
    useEffect(
        ()=> {

        getDailyQuote()
        async function getDailyQuote(){
            const results = await fetch(`https://type.fit/api/quotes`);

            const json = await results.json();
            console.log(json);
            setQuote(json);
        }

        },[]

    )


    return (
        <div className="quote-box">
            <div className="quote-text">{quote.q}</div>
            <div className="quote-author">{quote.a}</div>
        </div>
    )
}
export default Quote