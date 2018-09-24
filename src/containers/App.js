import React, { Component } from 'react';
import Header from '../components/Header';
import RequestForm from './RequestForm';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Autocognita" />
        <RequestForm />
      </div>
    );
  }
}

export default App;
