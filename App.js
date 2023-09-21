const heading = React.createElement("div", {id:"container"}, React.createElement("h1",{},"hello"))

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading2 = React.createElement("div", {id:"container2"}, React.createElement("h1",{},"hello from root2"))

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root.render(heading);

root2.render(heading2);