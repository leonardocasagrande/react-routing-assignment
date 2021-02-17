import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Aux from './hoc/Aux/Aux';
import Navigation from './components/Navigation/Navigation';



import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render() {
    return (
      <Aux>
        <Navigation />
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/courses" component={Courses} />
          <Redirect from="/all-courses" to="/courses" />
          <Route render={() => <h1>404 page not found</h1>} />
        </Switch>
      </Aux>
    );
  }
}

export default App;
