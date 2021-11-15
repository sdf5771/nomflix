import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from '../Routes/Home';
import Search from '../Routes/Search';
import TV from '../Routes/TV';
import Header from './Header';

export default () => (
    <Router>
      <>
      <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/tv" exact component={TV}/>
          <Route path="/search" component={Search}/>
          <Redirect from='*' to='/'/>
        </Switch>
        </>
    </Router>
);