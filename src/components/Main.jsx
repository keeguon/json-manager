import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Index as FilesIndex } from './files/Index.jsx';

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={FilesIndex} />
      </Switch>
    );
  }
}

export default Main;