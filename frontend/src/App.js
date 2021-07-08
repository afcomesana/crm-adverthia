import React, { useEffect } from 'react';
import './App.css';

import SignInPage from './pages/sign-in/sign-in-page.component';
import Sidebar from './components/sidebar/sidebar.component';
import DefaultPage from './pages/default/default-page.component';
import Leads from './pages/leads/leads.component';
import Chances from './pages/chances/chances.component';
import Candidates from './pages/candidates/candidates.component';
import Customers from './pages/customers/customers.component';
import PopupContainer from './components/popup-container/popup-container.component';
import LeadPopup from './components/lead-popup/lead-popup.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Switch, Redirect } from 'react-router-dom';

import { selectCurrentUser } from './redux/user/user.selector';
import { selectIsPopupOpen } from './redux/lead-popup/lead-popup.selector';
import { checkUserSession } from './redux/user/user.actions';


const App = ({currentUser, checkUserSession, isPopupOpen}) => {
  useEffect(() => checkUserSession(), []);
  return (
        currentUser ? (
          <div className="App">
            <Sidebar />
            {isPopupOpen ? (
              <PopupContainer>
                <LeadPopup />
              </PopupContainer>
            ) : null}
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
  currentUser: selectCurrentUser,
  isPopupOpen: selectIsPopupOpen
});

const mapDispatchToProps = dispatch => ({ 
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);