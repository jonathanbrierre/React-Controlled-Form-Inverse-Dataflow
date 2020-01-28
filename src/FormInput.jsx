import React, { Component } from 'react';

class FormInput extends Component {

  render() {
    return (
      <form>
        <label htmlFor="input">Type something: </label>
        <input
          type="text"
          name="text"
          onChange={this.props.onChange}
          value={this.props.stateText}/>
      </form>
    );
  }

}

export default FormInput;
