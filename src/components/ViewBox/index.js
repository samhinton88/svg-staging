import React, { Component } from 'react';

class ViewBox extends Component {
  render() {
    return (
      <svg viewbox='0 0 1000 500' height='500' width='100%'>
        {this.props.children}
      </svg>
    )
  }
}

export default ViewBox;