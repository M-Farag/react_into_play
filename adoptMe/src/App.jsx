import ReactDOM from "react-dom/client";
import SearchParams from "./SearchParams";


// Main Component
// Remember that React data flow is one way top -> down
// means parent components can pass data to child components
// so in this example Component APP can pass data to Pet App

const App = () => {
  return (
    <div>
      <h1> Adopt me !!</h1>
      <SearchParams />
    </div>
  );
}

// root
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
