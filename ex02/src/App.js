import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>Set my Storage</button>
        <button onClick={this.getMyStorage}>Get my Storage</button>
      </div>
    )
  }

  getMyStorage = () => {
    let myCookieData = document.cookie;
    let myLocalStorageData = localStorage.getItem('Paragon');
    let mySessionStorageData = sessionStorage.getItem('frontend');
    return (myCookieData, myLocalStorageData, mySessionStorageData);
  }

  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  }
}

export default App;