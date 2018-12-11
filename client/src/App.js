import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResult: 'Contacting Api... this *should* not take long',
    };
    this.testApi();
  }
  testApi = async () => {
    var result = await axios.get('/api/test');
    if (!result) return this.setState({ apiResult: 'api is not working' });
    if (!result.data) return this.setState({ apiResult: 'api is not working' });
    this.setState({ apiResult: result.data });
  };
  render() {
    return (
      <div className="App">
        <h2>{this.state.apiResult}</h2>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
