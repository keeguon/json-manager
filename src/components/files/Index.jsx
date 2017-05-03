import React from 'react';

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
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <ul>
              {this.state.files.map(file => <li key={file.id}>{file.title}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;