import { useState } from "react";

const SearchParams = () =>
{
    const [value, setValue] = useState("");
    const [department,setDepartment] = useState("");

    const departments = ["HR","Accounting","IT","Engineering"];

    return (
        <div>
            <form className="search-params">
                <label htmlFor="name"> name:
                    <input id="name" value={value} placeholder="Search name" 
                    onChange={(e)=>setValue(e.target.value)}
                    />
                </label>
                <br />
                <label htmlFor="department"> Department 
                    <select id="department"
                    onChange={(e)=>{
                        setDepartment(e.target.value)
                    }}>
                    
                    <option />

                    {
                        departments.map(
                            (dep) => 
                                (
                                <option key={dep}>{dep}</option>
                                )
                        )
                    }
                        
                    </select>
                </label>


                <button>Submit</button>
            </form>
        </div>
    );
}

export default SearchParams;