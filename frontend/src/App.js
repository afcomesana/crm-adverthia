import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import SignInPage from './pages/sign-in/sign-in-page.component';
import Sidebar from './components/sidebar/sidebar.component';
import DefaultPage from './pages/default/default-page.component';
import Leads from './pages/leads/leads.component';
import Chances from './pages/chances/chances.component';
import Candidates from './pages/candidates/candidates.component';
import Customers from './pages/customers/customers.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Switch, Redirect } from 'react-router-dom';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';


const App = ({currentUser, checkUserSession}) => {
  useEffect(() => checkUserSession(), []);
  return (
        currentUser ? (
          <div className="App">
            <Sidebar />
            <Switch>
              <Route exact path='/' component={currentUser ? DefaultPage : null} />
              <Route exact path="/candidatos" component={currentUser ? Candidates : null} />
              <Route exact path="/oportunidades" component={currentUser ? Chances : null} />
              <Route exact path="/clientes" component={currentUser ? Customers : null} />
              <Redirect from="/sign-in" to="/" />
            </Switch>
          </div>
        ) : (
          <Switch>
            <Route path='/sign-in' component={SignInPage} />
            <Redirect to='/sign-in' />
          </Switch>
        )
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({ 
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);