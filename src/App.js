//import logo from './logo.svg';
import React,  { Component } from 'react';
import './App.css';
import Top from './components/Top/index.js';
import Bottom from './components/Bottom/index.js';
import Formulary from './components/Formulary/index.js';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/mensagem');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <Top/>
        <header className="App-header">
          <Formulary />
          <p>{this.state.response}</p>
        </header>
        {/*
        <header className="App-header">
          <Top />
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
        */}
        <Bottom />
      </div>
    );
  }
}

export default App;
