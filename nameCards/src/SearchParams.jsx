import { useState, useEffect } from "react";

const SearchParams = () =>
{
    const [value, setValue] = useState("");
    const [department,setDepartment] = useState("");
    const [users,setUsers] = useState([]);

    const departments = ["HR","Accounting","IT","Engineering"];
    const records = 10;

    useEffect(()=> {
        requestUsers();
    },[]);


    async function requestUsers() 
    {
        const result = await fetch(
            `https://hub.dummyapis.com/employee?noofRecords=${records}&idStarts=1001`
        );

        const json = await result.json();
        setUsers(json);
    }

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

            <hr />
            <p>
                All users: 
                <select id="users">
                    {
                        users.map(
                            user => (
                                <option key={user.id}>{user.firstName}</option>
                            )
                        )
                    }
                </select>
            </p>
        </div>
    );
}

export default SearchParams;