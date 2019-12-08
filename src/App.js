
import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/home";
import Payment from './components/payment';


class App extends Component{

  render() {
      
      return (
          <>
              {/* <Router>
                   <Switch>

                       <Route 
                
						path={["/"]}
                          component={({ props }) => (

                         <Home  {...props}  />
                            )}
                          />

                   </Switch>
              </Router> */}
          </>
      );
  }
}

export default App;
