import  ReactDOM  from "react-dom/client";
import StoreCategory from "./StoreCategory";

const App = () => {
    return (
        <div>
            <StoreCategory />
        </div>
    );
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

