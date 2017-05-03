import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FilesIndex from './files/Index.jsx';

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/files" component={FilesIndex} />
      </Switch>
    );
  }
}

export default Main;