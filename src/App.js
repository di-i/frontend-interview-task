import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard } from './components/pages/Dashboard';
import { Finalize } from './components/pages/Finalize';
import { Results } from './components/pages/Results';
import { GlobalStyle, Wrapper } from './styled';

export const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard} />
        </Switch>
        <Route exact path='/results/:id' component={Results} />
        <Route exact path='/finalize/:id' component={Finalize} />
      </Router>
    </Wrapper>
  );
};
