const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
