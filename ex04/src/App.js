import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
    <div className="App">
      <button onClick={this.setLocalStorage}>Set Local Storage</button>
      <button onClick={this.getLocalStorage}>Get Local Storage</button>
    </div>
    )
  }

  getLocalStorage = () => {
    let myLocalStorageData = localStorage.getItem('Arena');

    return myLocalStorageData;
  }

  setLocalStorage = () => {
    localStorage.setItem('Arena', 'Selection Month');
  }
}

export default App;