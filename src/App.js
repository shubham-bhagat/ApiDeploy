import React,{Component} from 'react';
import logo from './logo.svg';
import {Route,Switch,Redirect} from 'react-router-dom';
import Posts from "./components/posts.jsx";
import Home from "./components/home.jsx";
import User from "./components/users.jsx";
import NotFound from "./components/notFound.jsx";

import './App.css';

import NavBar from "./components/navbar";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/ApiDeploy/posts" component={Posts} />
            <Route path="/ApiDeploy/user" component={User} />
            <Route path="/notfound" component={NotFound}/>
            <Route path="/ApiDeploy" exact component={Home}/>;
            <Redirect to="/not-found" />
          </Switch>
        </div>


        
        </React.Fragment>
    );
  }
}
 
export default App;



