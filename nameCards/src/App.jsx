import ReactDOM from "react-dom";
import Contact from "./Contact";

const App = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <Contact name="john" title="Mr" company="Google" />
      <Contact name="Mark" title="Mr" company="Apple" />
      <Contact name="Jack" title="Mr" company="Facebook" />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
