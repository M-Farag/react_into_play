import  ReactDOM  from "react-dom/client";

const App = () => {
    return (
        <div> hello from react</div>
    );
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

