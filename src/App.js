import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Router_URL from "./components/router_url";
class App extends Component{

  render() {
      return (
          <>
              <Router>
                  <Router_URL></Router_URL>
              </Router>
          </>
      );
  }
}

export default App;
