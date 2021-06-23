import React from 'react';
import './styles/style.css'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/Home';
import PrivacyPage from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/Faq';

function App() {
  return (
    <>  
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/terms" component={Terms} />
          <Route path="/faq" component={FAQ} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
