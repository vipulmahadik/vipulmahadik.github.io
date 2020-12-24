import React from "react";
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import About from './component/About';
import Home from './component/Home';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div className="container">
            <div className="row">
                <div className="col-12">
                  <nav>
                    <span className="nav-item">
                      <NavLink activeClassName='active' exact to="/" >Home</NavLink>
                    </span>
                    <span className="nav-item">
                      <NavLink activeClassName='active' exact to="/about" >Projects</NavLink>
                    </span>
                  </nav>
                </div>
            </div>
        </div>
        <Switch>
          {/* <Route exact route="/about" component={About} />   */}
          <Route exact route="/" component={Home} />  
        </Switch>

        <div className="container-fluid footer">
          <div className="row">
            <div className="col-12 text-center poppin-font" style={{marginTop: '200px'}}>
              <div>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/vipul.mahadik"><i class="fa fa-instagram"></i></a>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/vipul.mahadik/"><i class="fa fa-facebook"></i></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/vipulmahadik"><i class="fa fa-github"></i></a>
                <a target="_blank" rel="noreferrer" href="mailto:vipul.mahadik@gmail.com"><i class="fa fa-envelope"></i></a>
              </div>
              <p>© 2020 - present designed by Vipul Mahadik</p>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
