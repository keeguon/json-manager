import React from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'
import uuidV4 from 'uuid/v4';

class FilesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: '',
        content: ''
      },
      redirect: false
    };
  }

  componentWillMount() {
    if (this.props.match.params.id) this.setState({ form: JSON.parse(localStorage[this.props.match.params.id]) });
  }

  isValidName() {
    const length  = this.state.form.name.length;

    if (length === 0) {
      return null;
    } else if (length < 255) {
      return 'success';
    } else {
      return 'error';
    }
  }

  isValidJson() {
    const content = this.state.form.content;

    if (content.length === 0) {
      return null;
    }

    try {
      JSON.parse(content);
    } catch (e) {
      return 'error';
    }

    return 'success';
  }

  isValid() {
    const validationStates = [this.isValidName(), this.isValidJson()];
    let   valid            = true;

    validationStates.forEach(validationState => { if (validationState !== 'success') valid = false });

    return valid;
  }

  handleChange(e) {
    const fieldName  = e.target.name;
    const fieldValue = e.target.value;
    this.setState({ form: {...this.state.form, [fieldName]: fieldValue }});
  }

  saveFile(e) {
    e.preventDefault();

    const fileId = (this.props.match.params.id ? this.props.match.params.id : uuidV4());
    
    if (this.isValid() === true) {
      localStorage.setItem(fileId, JSON.stringify({ name: this.state.form.name, content: JSON.parse(this.state.form.content) }));
      this.setState({ redirect: true });
    }
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to="/" />
      )
    }

    return (
      <Grid fluid>
        <Row>
          <Col sm={12}>
            <Form onSubmit={this.saveFile.bind(this)}>
              <FormGroup controlId="fileName" validationState={this.isValidName()}>
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" name="name" value={this.state.form.name} placeholder="Your filename" onChange={this.handleChange.bind(this)} />
                <FormControl.Feedback />
                <HelpBlock>The name should be below 255 characters.</HelpBlock>
              </FormGroup>
              <FormGroup controlId="fileContent" validationState={this.isValidJson()}>
                <ControlLabel>Content</ControlLabel>
                <FormControl componentClass="textarea" name="content" value={this.state.form.content} onChange={this.handleChange.bind(this)} />
                <FormControl.Feedback />
                <HelpBlock>Must be a valid JSON construct.</HelpBlock>
              </FormGroup>

              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default FilesForm;