import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import Home from './components/home/Home';
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';




function App() {
  return (
    <>
      
        <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 64 }}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/details/:id' component={DetailView} />
                    <Route exact path='/create/:category?' component={CreateView} />
                    <Route exact path='/update/:id' component={UpdateView} />

                
                </Switch>
            </Box>
        </BrowserRouter>
      

    </>


  );
}

export default App;