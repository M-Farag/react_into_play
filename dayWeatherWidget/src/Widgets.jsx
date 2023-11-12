import DateWidget from "./DateWidget";

const Widgets = () =>
{

    return (
        <div className="container">
            <DateWidget />
            <div className="box weather-box">
                Weather
            </div>
            <div className="box quote-box"></div>
        </div>
    )

}

export default Widgets;