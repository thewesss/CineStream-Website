import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import GenreDropdown from './components/GenreDropDown';
import Actors from './Pages/ActorsPg/Actors';
import Actor from './Pages/ActorPg/Actor';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/genre" component={GenreDropdown} />
        <Route exact path="/actors" component={Actors} />
        <Route path="/actors/:actorId" component={Actor} />
      </Switch>
    </Router>
  );
};

export default App;
