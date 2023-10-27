import { useState } from "react";

const SearchParams = () =>
{
    const [value, setValue] = useState("");

    return (
        <div>
            <form>
                <label htmlFor="names">
                    <input id="names" value={value} placeholder="Search names" 
                    onChange={(e)=>setValue(e.target.value)}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default SearchParams;