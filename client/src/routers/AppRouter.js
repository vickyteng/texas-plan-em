import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateSession from 'components/CreateSession';
import JoinSession from 'components/JoinSession';
import Users from 'components/users/Users';
import GameContainer from 'components/GameContainer';


const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={CreateSession} />
      <Route exact path="/join/:id" component={JoinSession} />
      <Route exact path="/game/:id" component={GameContainer} />
      <Route exact path="/users" component={Users} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
