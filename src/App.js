import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./Components/Forms/Login"
import Signup from "./Components/Forms/Signup"
import Home from "./Components/Forms/Home"
import View from "./Containers/View"
import PointCloud from "./Containers/PointCloud"
import Authentication from './Middlewares/Authentication';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>

          <Route element={<Authentication />}>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/view" element={<View/>} />
            <Route exact path="/PointCloud" element={<PointCloud/>}/>
          </Route>

        </Routes>
      </Router>
     );
  }
}

export default App;