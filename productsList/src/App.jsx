import  ReactDOM  from "react-dom/client";

const App = () => {
    return (
        <div>
            <div className="main-container">
                <label htmlFor="categories">
                    <select>
                        <option>Category 1</option>
                    </select>
                </label>

                <label htmlFor="items">
                    <select>
                        <option>item 1</option>
                    </select>
                </label>
            </div>
        </div>
    );
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

