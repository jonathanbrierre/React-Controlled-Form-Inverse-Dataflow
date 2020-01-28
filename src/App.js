import React, { Component } from 'react';
import DisplayedPTag from './DisplayedPTag'
import FormInput from './FormInput'
import "./App.css"

class App extends Component {
  state = {
    text: ''
  }

  onChange =  (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  render() {
    return (
      <div className="App">
        <img src={require("./image.png")} alt="logo" className="App-logo" />
        <FormInput onChange = {this.onChange} stateText = {this.state.text}/>
        <DisplayedPTag state = {this.state}/>
      </div>
    );
  }

}

export default App;
