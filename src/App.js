import React, { Component } from 'react';
import DisplayedPTag from './DisplayedPTag'
import FormInput from './FormInput'
import "./App.css"

class App extends Component {

  render() {
    return (
      <div className="App">
        <img src={require("./image.png")} alt="logo" className="App-logo" />
        <FormInput/>
        <DisplayedPTag/>
      </div>
    );
  }

}

export default App;
