import React from 'react';
import GridCell from './GridCell';
import './Container.css';

export default class Container extends React.Component {
  constructor(props) {
    super();
    this.state = {
      onCount: 0
    };
  }

  render() {
    return (
      <div class='Container'>
        <h3>Count: {this.state.onCount}</h3>
        <br />
        <GridCell
          color='white'
          status='false'
          onFunc={() => this.countNumofOn()}
          offFunc={() => this.countNumofOff()}
        />
        <GridCell
          color='white'
          status='false'
          onFunc={() => this.countNumofOn()}
          offFunc={() => this.countNumofOff()}
        />
        <GridCell
          color='white'
          status='false'
          onFunc={() => this.countNumofOn()}
          offFunc={() => this.countNumofOff()}
        />
        <GridCell
          color='white'
          status='false'
          onFunc={() => this.countNumofOn()}
          offFunc={() => this.countNumofOff()}
        />
      </div>
    );
  }

  countNumofOn() {
    const updatedCount = this.state.onCount + 1;
    this.setState({
      onCount: updatedCount
    });
  }

  countNumofOff() {
    const updatedCount = this.state.onCount - 1;
    this.setState({
      onCount: updatedCount
    });
  }
}
