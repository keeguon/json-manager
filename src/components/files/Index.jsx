import React from 'react';
import { Grid, Col, Row, Table, ButtonGroup, ButtonToolbar, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'font-awesome-webpack';

class FilesIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: {}
    };
  }

  componentWillMount() {
    this._fetchFiles();
  }

  deleteFile(e) {
    localStorage.removeItem(e.target.id);
    this._fetchFiles();
  }

  _fetchFiles() {
    let files = {}
    Object.keys(localStorage).forEach(key => files = {...files, [key]: JSON.parse(localStorage[key])});
    this.setState({ files: files });
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={12}>
            <ButtonToolbar>
              <LinkContainer to="/files/new"><Button bsSize="sm"><i className="fa fa-plus-square"></i> New JSON</Button></LinkContainer>
              <ButtonGroup>
                <Button bsSize="sm"><i className="fa fa-upload"></i> Import JSON files</Button>
                <Button bsSize="sm"><i className="fa fa-download"></i> Export JSON files</Button>
              </ButtonGroup>
            </ButtonToolbar>
            <hr />
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Content</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(this.state.files).map(key => (
                  <tr>
                    <td>{this.state.files[key].name}</td>
                    <td><code>{this.state.files[key].content}</code></td>
                    <td className="col-sm-2">
                      <ButtonToolbar className="btn-toolbar-no-float text-center">
                        <LinkContainer to={"/files/edit/" + key}><Button bsStyle="primary"><i className="fa fa-edit"></i> Edit</Button></LinkContainer>
                        <Button id={key} bsStyle="danger" onClick={this.deleteFile.bind(this)} ><i className="fa fa-trash"></i> Delete</Button>
                      </ButtonToolbar>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default FilesIndex;