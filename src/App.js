import React from "react";
import logo from "./UmbrellaCorporation3.png";
import "./App.css";
import DisplayInformation from "./component/promps-state";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      information: "Welcome To Umbrella Corporation",
      command: "Umbrella Corp. © 2019"
    }
  }


// function App() {
render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DisplayInformation/>
        <p>
          {this.state.information}
        </p>
          <DisplayInformation command = {this.state.command}/>
          {" "}
        {" "}
        <a
          className="App-link"
          href="https://residentevil.fandom.com/wiki/Umbrella_Corporation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resident Evil . Umbrella Corporation{" "}
        </a>{" "}
      </header>{" "}
    </div>
  )
}}
// }

export default App;
