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

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return ( 
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>



        </Routes>
      </Router>
     );
  }
}
 
export default App;