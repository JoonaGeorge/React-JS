import React,{Component} from 'react';
import './App.css';
import Home from './Home';
import Depositor from './Depositor';
import Collector from './Collector';
import {
          BrowserRouter as Router,
          Switch,
          Route,
          Link
        } from "react-router-dom";

class App extends Component
{
      render()
      {     return(
            <Router>
            <div>
            <nav className="navbar navbar-expand-lg">
            <h1>WasteManagement</h1>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" ><Link to="/">Home</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" ><Link to="/about">Depositor</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" ><Link to="/collector">Collector</Link></a>
                  </li>
                </ul>
              </div>
            </nav>


                  <Switch>
                  <Route exact path="/">
                        <Home />
                  </Route>
                  <Route path="/about">
                        <Depositor/>
                  </Route>
                  <Route path="/collector">
                        <Collector/>
                  </Route>
                  </Switch>
                </div>
        </Router>
      );
    }
}
export default App;
