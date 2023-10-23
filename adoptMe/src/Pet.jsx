const Pet = (data) => {
    return (
        <ul>
            <li>{data.name}</li>
            <li>{data.type}</li>
            <li>{data.breed}</li>
        </ul>
    )
};

export default Pet;