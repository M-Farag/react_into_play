import { useState, useEffect } from "react";

const CountriesRegions = () => {
    const [countries,setCountries] = useState([]);

    // initially get countries
    useEffect(
        ()=> {

        getCountriesList()
        async function getCountriesList()
        {
            const results = await fetch(
                `http://geodb-free-service.wirefreethought.com/v1/geo/countries?hateoasMode=false&limit=10&offset=0`
            )

            const json = await results.json()
            setCountries(json.data)
        }



        },[]
    );

    return (
        <div className="box">
        <div className="label countries">
            <label htmlFor="countries">Countries:</label>
            <select id="countries">
            <option value="">--</option>
            {
                countries.map(
                    c => {
                        return <option key={c.code}>{c.name}</option>
                    }
                )
            }
            
            </select>
        </div>
        <div className="label regions">
            <label htmlFor="regions">Regions:</label>
            <select id="regions">
            <option value="region1">Region 1</option>
            <option value="region2">Region 2</option>
            </select>
        </div>
        </div>
    );
    
}

export default CountriesRegions;