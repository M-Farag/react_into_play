import { useState, useEffect } from "react";
import useRegionsList from "./useRegionsList";

const CountriesRegions = () => {
    const [countries,setCountries] = useState([]);
    const [region,setRegion] = useState('');
    const [regions] = useRegionsList(region);
    
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
            <select id="countries"
            onChange={e=>{
                setRegion(e.target.value)
            }}
            >
            <option value="">--</option>
            {
                countries.map(
                    c => {
                        return <option key={c.code} value={c.code}>{c.name}</option>
                    }
                )
            }
            
            </select>
        </div>
        <div className="label regions">
            <label htmlFor="regions">Regions:</label>
            <select id="regions">
            {
                regions.map(

                        r => {
                          return  <option key={r.isoCode}>{r.name}</option>

                    }
                )
            }
            </select>
        </div>
        </div>
    );
    
}

export default CountriesRegions;