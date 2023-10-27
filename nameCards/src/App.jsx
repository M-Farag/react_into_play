import ReactDOM from "react-dom/client";
import SearchParams from "./searchParams";

const App = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
