import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./semester2main.scss";
import ID from "./component/ID/Sem2_id";
import CS from "./component/CS/Sem2_cs";
import Semester2 from "./component/sem2_landing";

class semester2main extends Component{

  render() {
    return (
      <div id="App">
        <Semester2 />
      </div>
    );
  }
}


export default semester2main;
