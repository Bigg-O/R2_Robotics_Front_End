import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"

import Login from "./Components/Forms/Login"
import Signup from "./Components/Forms/Signup"
import NavBar from "./Components/NavBar"
import Home from "./Components/Forms/Home"
import View from "./Containers/View"
import PointCloud from "./Containers/PointCloud"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
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

  setCurrentEmail = email => {
    for (const prop in email)
      localStorage.setItem(prop, email[prop]);
  }

  handleLogin = e => {
    e.preventDefault()
    this.setState({ isLoading: true })
    axios
      .post(process.env.HEROKU_URI + "/users/login", {
        email: e.target.formEmail.value,
        password: e.target.formPassword.value
      })
      .then(response => {
        this.setState({ isLoading: false })
        console.log("successful Login: ", response);
        localStorage.setItem("JWT", response.data.token);
        this.setCurrentEmail(response.data.email);
        // redirect to "/"
      })
      .catch(error => {
        console.log("Error in Login: ", error);
        if (error.response)
          alert(error.response.data.message);
      });
  }

  render() {
    return (
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/login" element={<Login onLogin={this.handleLogin} />}/>
          <Route path="/signup" element={<Signup/>}/>

          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/view" element={
            <View files={this.state.files} />
          }/>
          <Route exact path="/PointCloud" element={<PointCloud/>}/>

        </Routes>
      </Router>
     );
  }
}

export default App;