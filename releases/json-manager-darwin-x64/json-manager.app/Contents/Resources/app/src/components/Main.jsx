import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FilesIndex from './files/Index.jsx';
import FilesForm from './files/Form.jsx';

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={FilesIndex} />
        <Route exact path="/files/new" component={FilesForm} />
        <Route path="/files/edit/:id" component={FilesForm} />
      </Switch>
    );
  }
}

export default Main;