import { useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";

const App = () => {

    const [countries,setCountries] = useState([]);

    // initially get countries
    useEffect(
        ()=> {

            




        },[]
    );

    return (
        <div className="box">
        <div className="label countries">
            <label for="countries">Countries:</label>
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
            <label for="regions">Regions:</label>
            <select id="regions">
            <option value="region1">Region 1</option>
            <option value="region2">Region 2</option>
            </select>
        </div>
        </div>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

export default App;