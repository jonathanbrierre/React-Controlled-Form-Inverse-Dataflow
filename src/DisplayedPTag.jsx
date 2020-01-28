

import React, { Component } from 'react'

export class DisplayedPTag extends Component {
  render() {
    return (
      <div>
              <h1>The text below should change</h1>
              <p>{ this.props.state.text }</p>
      </div>
    )
  }
}

export default DisplayedPTag
