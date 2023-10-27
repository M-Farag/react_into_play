const SearchParams = () =>
{
    const value = '';

    return (
        <div>
            <form>
                <label htmlFor="names">
                    <input id="names" value={value} placeholder="Search names" />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default SearchParams;