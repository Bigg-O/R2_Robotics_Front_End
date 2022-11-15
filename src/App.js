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
  constructor(props) {
    super(props);
    this.state = {
      files: [
        {
          id:"111ididididididid",
          product_name: "1namenamename",
          product_info: "1infoinfoinfo",
          reference_num: "11referencenum_referencenum",
          country: "11Some Big Country",
          file_name: "11file name file name filename"
        },
        {
          id:"222ididididididid",
          product_name: "2namenamename",
          product_info: "2infoinfoinfo",
          reference_num: "22referencenum_referencenum",
          country: "22Some Big Country",
          file_name: "22file name file name filename"
        }
      ]
    }
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>

          <Route element={<Authentication loggedIn={this.state.loggedIn} />}>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/view" 
              element={<View files={this.state.files} />}
            />
            <Route exact path="/PointCloud" element={<PointCloud/>}/>
          </Route>

        </Routes>
      </Router>
     );
  }
}

export default App;