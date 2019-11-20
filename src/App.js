import React from "react";
import "./App.css";
import APODList from "./components/APODList";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Official NASA logo" />
        <h1> #APOD </h1>
        <APODList />
      </div>
    </div>
  );
}
export default App;
