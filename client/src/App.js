import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import Home from './components/home/Home';
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';

import Register from './components/register/Register';
import Login from './components/login/Login';
import { useState } from 'react';
import LoggedInUserContext from './context/loggedInUser';
import ProtectedRoute from './helpers/ProtectedRoute';




function App() {

  const loggedInUser = JSON.parse(localStorage.getItem('userInfo'));
  const [user, setUser] = useState(loggedInUser);
  return (
    <LoggedInUserContext.Provider value={{ user, setUser }}>
      <>

        <BrowserRouter>
        {user && <Header />}
          
          <Box style={{ marginTop: 64 }}>
            <Switch>
              <ProtectedRoute path='/' user={user} exact>
                <Home />
              </ProtectedRoute>
              <ProtectedRoute path='/details/:id' user={user} exact>
                <DetailView />
              </ProtectedRoute>
              <ProtectedRoute path='/create/:category?' user={user} exact>
                <CreateView />
              </ProtectedRoute>
              <ProtectedRoute path='/update/:id' user={user} exact>
                <UpdateView />
              </ProtectedRoute>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
            </Switch>
          </Box>
        </BrowserRouter>


      </>
    </LoggedInUserContext.Provider>


  );
}

export default App;