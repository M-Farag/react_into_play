export function DateWidget() 
{
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString(); // e.g., "12/11/2023"
    const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' }); // e.g., "Sunday"


    return (
        <div className="box date-box">
            <p>{dayName}</p>
            <p>{dateString}</p>
        </div>
    )
}

export default DateWidget