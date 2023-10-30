const SearchParams = () => {
    return (
        <div id="formContainer">
            <form id="quoteSearch">
            <label htmlFor="quote">Quote Search:</label>
            <input type="text" id="quote" name="quote" />
            <button type="submit">Search</button>
        </form>

        <div id="searchResults">
            <p>
                results
            </p>
        </div>
        </div>
        
    );
};

export default SearchParams;