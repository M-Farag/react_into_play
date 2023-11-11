import  ReactDOM  from "react-dom/client"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Link } from "react-router-dom";
import Profile from "./Profile"
const App = () => {
    return (
        <BrowserRouter>

            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Me</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            
        </BrowserRouter>
    );
};

const About = () => {
    return <h1>About</h1>;
};

const Contact = () => {
    return <h1>Contact Me</h1>;
};

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App />);