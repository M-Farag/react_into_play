import React from "react";
import ReactDOM from "react-dom";

// Pet component

const Pet = (data) => {
  return React.createElement("ul", {}, [
    React.createElement("li", {}, data.name),
    React.createElement("li", {}, data.type),
    React.createElement("li", {}, data.breed),
  ]);
};

// Main Component
// Remember that React data flow is one way top -> down
// means parent components can pass data to child components
// so in this example Component APP can pass data to Pet App
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me !!"),
    React.createElement(Pet, { name: "Luna", type: "Dog", breed: "Havanese" }),
    React.createElement(Pet, {
      name: "Pepper",
      type: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, { name: "Doink", type: "Cat", breed: "Mixed" }),
  ]);
};

// root
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
