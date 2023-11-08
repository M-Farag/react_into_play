import { useEffect, useState } from "react";

const localCache = [];

export default  function useRegionsList(countryCode) {

    const [regionsList,setRegionsList] = useState([]);

    useEffect(
        ()=>{
            if (! countryCode) {
                setRegionsList([]);
            }
            else if ( localCache[countryCode])
            {
                setRegionsList(localCache[countryCode])
            }
            else 
            {
                getRegionsListList(countryCode)   
            }


            async function getRegionsListList(countryCode) {
                const results = await fetch(
                    `http://geodb-free-service.wirefreethought.com/v1/geo/countries/${countryCode}/regions?hateoasMode=false&limit=10&offset=0`
                    
                )

                const json = await results.json()
                localCache[countryCode] = json.data
                setRegionsList(json.data)
            }


        }, [countryCode]

    );

    return [regionsList]
}


