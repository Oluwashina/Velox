import React from 'react';
import './styles/style.css'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <>  
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
