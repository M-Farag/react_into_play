import  ReactDOM  from "react-dom/client";
import UserProfile from "./UserProfile";
const App = () => {

    return (
        <div> 
            <UserProfile />
        </div>
    );

}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);