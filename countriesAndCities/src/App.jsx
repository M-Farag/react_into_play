import ReactDOM  from "react-dom/client";
import CountriesRegions from "./CountriesRegions";

const App = () => {

    return (
        <CountriesRegions />
    )
    
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

export default App;