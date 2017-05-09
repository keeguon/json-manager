import React from 'react';
import { Grid, Col, Row, Table, ButtonToolbar, Button } from 'react-bootstrap';
import 'font-awesome-webpack';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: []
    };
  }

  componentWillMount() {
    this._fetchFiles();
  }

  _fetchFiles() {
    let files = [];
    Object.keys(localStorage).forEach(key => files.push(JSON.parse(localStorage[key])));
    this.setState({ files });
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={12}>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.files.map(file => (
                  <tr>
                    <td><code>{file.title}</code></td>
                    <td className="col-sm-2">
                      <ButtonToolbar className="btn-toolbar-no-float text-center">
                        <Button bsStyle="primary"><i className="fa fa-edit"></i> Edit</Button>
                        <Button bsStyle="danger"><i className="fa fa-trash"></i> Delete</Button>
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

export default Index;