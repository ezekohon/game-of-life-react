import React, { Component } from 'react';
import '../index.css';
import { ButtonToolbar, Button, MenuItem, DropdownButton } from 'react-bootstrap';


class Buttons extends Component {

  handleSelect = (e) => {
    this.props.gridSize(e)
  }


  render() {
    return (
    <div className="center">
     <ButtonToolbar>
      <Button bsStyle="default" onClick={this.props.playButton}>Play</Button>
      <Button bsStyle="default" onClick={this.props.pauseButton}>Pause</Button>
      <Button bsStyle="default" onClick={this.props.clear}>Clear</Button>
      <Button bsStyle="default" onClick={this.props.slow}>Slow</Button>
      <Button bsStyle="default" onClick={this.props.fast}>Fast</Button>
      <Button bsStyle="default" onClick={this.props.seed}>Random</Button>
      
      <DropdownButton 
      title="Grid Size"
      id="size-menu"
      onSelect={this.handleSelect}
      >
        <MenuItem eventKey="1">20x10</MenuItem>
        <MenuItem eventKey="2">50x30</MenuItem>
        <MenuItem eventKey="3">70x50</MenuItem>
      </DropdownButton>
      

     </ButtonToolbar>
    </div>
    );
  }
}

export default Buttons;