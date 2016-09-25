var React = require("react");
var ReactDOM = require("react-dom");
var ListItem = require("./components/ListItem.jsx");

ReactDOM.render(<ListItem name="Mike" email="mike@example.com" />, document.getElementById('list'));