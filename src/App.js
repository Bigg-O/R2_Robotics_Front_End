import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./Components/Forms/Login"
import Signup from "./Components/Forms/Signup"
import NavBar from "./Components/NavBar"
import Home from "./Components/Forms/Home"
import View from "./Containers/View"
import PointCloud from "./Containers/PointCloud"

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return ( 
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>

          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/view" element={<View/>}/>
          <Route exact path="/PointCloud" element={<PointCloud/>}/>

        </Routes>
      </Router>
     );
  }
}
 
export default App;