import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from '../pages/Error';
import Layout from './Layout';
import NotFound from '../pages/NotFound';

import PrincipalPage from '../pages/PrincipalPage';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={PrincipalPage}></Route>
          <Route exact path="/error" component={Error}></Route>
          <Route  component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
