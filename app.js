// const heading = React.createElement("h1", { id: "heading" }, "Hello boys");

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello h1"),
    React.createElement("h2", {}, "Hello h2"),
  ]),
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
