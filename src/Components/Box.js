import React, { Component } from 'react';
import '../index.css';


class Box extends Component {

  selectBox = () => {
    this.props.selectBox(this.props.row, this.props.col)
  }

  render() {
    return (
    <div 
      className={this.props.boxClass}
      id={this.props.id}
      onClick={this.selectBox}
      />
    );
  }
}

export default Box;