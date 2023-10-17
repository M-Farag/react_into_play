// Pet component

const Pet = () => {
    return React.createElement("ul",{},[
        React.createElement("li",{},"name"),
        React.createElement("li",{},"type"),
        React.createElement("li",{},"breed"),
    ]);
}




// Main Component
const App = () => {
    return React.createElement("div",{},
        [
            React.createElement("h1",{},"Adopt me !!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet)
        ]
    );
}

// root
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    React.createElement(App)
);