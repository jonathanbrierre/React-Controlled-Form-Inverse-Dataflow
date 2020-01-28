import React, { Component } from 'react';

class FormInput extends Component {

  render() {
    return (
      <form>
        <label htmlFor="input">Type something: </label>
        <input
          type="text"
          name="text"
          onChange={ () => { console.log("You will need to change this in code." ) }}
          value={"You will need to change this in code."}/>
      </form>
    );
  }

}

export default FormInput;
