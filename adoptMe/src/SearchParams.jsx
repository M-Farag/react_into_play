import {useState} from "react";    

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal,setAnimal] = useState("");
    const animals = ['dog','cat','rabbit','bird'];

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">Location
                    <input onChange={(e) => setLocation(e.target.value)}  id="location" value={location} placeholder="Location"/>
                </label>

                <label htmlFor="animal">
                    <select id="animal"
                    onChange={(e)=>{
                        setAnimal(e.target.value)
                    }}
                    >
                        <option key="">Please select animal </option>
                        {
                            animals.map(
                                (animal) => (
                                    <option key={animal}>{animal}</option>
                                )
                            )
                        }

                    </select>
                </label>


                <button>Submit</button>
                
            </form>

            <p>
                Search location is: {location}
                <br />
                Selected animal is: {animal}
            </p>
        </div>
    );
}

export default SearchParams;