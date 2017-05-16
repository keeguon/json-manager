import React from 'react';
import { Redirect } from 'react-router-dom';
import { Modal, Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

class FilesLoadDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        file: ''
      },
      showModal: props.showModal,
      redirect: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.showModal != this.props.showModal) this.setState({ showModal: nextProps.showModal });
  }

  close() {
    this.props.handleFilesLoadDialog(false);
  }

  loadFile(e) {
    let files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      let rawData = null;
      let data    = null
      let file    = files[i];
      let reader  = new FileReader();

      reader.addEventListener('load', () => {
        rawData = reader.result
        data    = JSON.parse(rawData);

        Object.keys(data).forEach((key) => {
          let sourceJson = data[key].content;

          if (localStorage[key]) {
            let targetJson = JSON.parse(localStorage[key]).content;

            if (Array.isArray(sourceJson) && Array.isArray(targetJson)) {
              localStorage.setItem(key, JSON.stringify({ name: data[key].name, content: targetJson.merge(sourceJson) }));
            } else if (Array.isArray(sourceJson) && !Array.isArray(targetJson)) {
              localStorage.setItem(key, JSON.stringify({ name: data[key].name, content: sourceJson }));
            } else if (!Array.isArray(sourceJson) && Array.isArray(targetJson)) {
              localStorage.setItem(key, JSON.stringify({ name: data[key].name, content: sourceJson }));
            } else {
              localStorage.setItem(key, JSON.stringify({ name: data[key].name, content: Object.assign(targetJson, sourceJson) }));
            }
          } else {
            localStorage.setItem(key, JSON.stringify({ name: data[key].name, content: sourceJson }));
          }

          this.close();
        });
      }, false);
      reader.readAsBinaryString(file);
    }
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to="/" />
      )
    }

    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Load JSON database</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <FormGroup controlId="file">
                <ControlLabel>File location</ControlLabel>
                <FormControl type="file" name="file" value={this.state.form.file} placeholder="/path/to/file" onChange={this.loadFile.bind(this)} />
              </FormGroup>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default FilesLoadDialog;