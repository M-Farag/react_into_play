import  ReactDOM  from "react-dom/client";
import Category from "./Category";

const App = () => {
    return (
        <div>
            <Category />
        </div>
    );
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

