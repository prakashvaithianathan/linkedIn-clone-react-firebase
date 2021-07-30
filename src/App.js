import React from "react";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux'
import userReducer from './Store/Reducer/User'
import {createStore} from 'redux'
import style from './App.module.css'

const store = createStore(userReducer)

const App = () => {
  return (
    <div>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" exact component={Home}></Route>
            </Switch>
          </Router>
        </Provider>
    </div>
  );
};

export default App;
