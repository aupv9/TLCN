import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Router_URL from "./components/router_url";
import 'react-toastify/dist/ReactToastify.css';

class App extends Component{

  render() {
      return (
          <>
              <Router>
                  <Router_URL/>
              </Router>
          </>
      );
  }
}

export default App;
