// Include the Main React Dependencies
import React from "react"
import ReactDOM from "react-dom"

// We need to include all of the components we"re utilizing

import Navbar from "./components/Navbar"
import AvailableProjects from "./components/AvailableProjects"
import Panel from "./components/Panel"

ReactDOM.render(
// Here we dump all of the components into a single main-container
// Again, treat them like they are any other HTML elements.
  <div className="container">
    <Navbar />
    <AvailableProjects />
    <Panel />
  </div>
  , document.getElementById("app")
);
