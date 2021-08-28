import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import { Navbar, Nav, NavDropdown } from  'react-bootstrap';
import Gravatar  from 'react-gravatar';

import './App.css';
import {store} from './redux/store';
import Todos from './components/Todos';
import SignInAndSignUp from './components/SignInAndSignUp';
import NotFoundPage from './components/NotFoundPage';

function App() {

  const accessToken = localStorage.getItem('token')
  console.log('accessToken: ', accessToken)

  return (
    <div className="App">
      <Provider store={store}>
      <ToastProvider style={{ zIndex: '9999999' }}>
      <Router>
        <Switch>
        <Route exact path='/'>
          {
            accessToken ? <Todos/> : <SignInAndSignUp />
          }
        </Route>
          <Route exact path='/signin' component={SignInAndSignUp} />
          <Route exact path='/todos' component={Todos} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router >
      </ToastProvider>
      </Provider>
    </div>
  );
}

export default App;


