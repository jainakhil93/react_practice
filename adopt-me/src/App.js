import React from 'react'
import {
  render
} from 'react-dom'
import Pet from './Pet';

const App = () => {
  return React.createElement(
    "div", {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Harry1",
      animal: "Mice",
      breed: "Hamster",
    }),
    React.createElement(Pet, {
      name: "Iron",
      animal: "Dog",
      breed: "Labrador",
    }),
    React.createElement(Pet, {
      name: "lol",
      animal: "joker",
      breed: "Memer",
    })
  );
};

render(React.createElement(App), document.getElementById("root"));