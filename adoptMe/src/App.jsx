import ReactDOM from "react-dom";
import Pet from "./Pet";


// Main Component
// Remember that React data flow is one way top -> down
// means parent components can pass data to child components
// so in this example Component APP can pass data to Pet App

const App = () => {
  return (
    <div>
      <h1> Adopt me !!</h1>
      <Pet name="Luna" type="Dog" breed="Havanese" />
      <Pet name="Pepper" type="Bird" breed="Cockatiel" />
      <Pet name="Doink" type="Cat" breed="Mixed" />
    </div>
  );
}

// root
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
