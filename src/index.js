import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Message from "./components/MessageComponent";
import Name from "./components/nameComponent";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello from props!",
      name: "Freddy!"
    };
  }

  render() {
    return (
      <div className="App">
        <Message propsMessage={this.state.message} />
        <Name propsName={this.state.name} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
