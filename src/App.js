import React from 'react';
import './styles/style.css'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/Home';
import PrivacyPage from './pages/Privacy';
import PrivacyMobile from './pages/PrivacyMobile';
import Terms from './pages/Terms';
import TermsMobile from './pages/TermsMobile';
import FAQ from './pages/Faq';
import FAQMobile from './pages/FaqMobile';


function App() {
  return (
    <>  
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/privacy-mobile" component={PrivacyMobile} />
          <Route path="/terms" component={Terms} />
          <Route path="/terms-mobile" component={TermsMobile} />
          <Route path="/faq" component={FAQ} />
          <Route path="/faq-mobile" component={FAQMobile} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
