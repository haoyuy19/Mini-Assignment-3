import React from 'react';
import './GridCell.css';

export default class GridCell extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentColor: props.color,
      currentStatus: props.status
    };
  }

  render() {
    console.log(this.props);
    return (
      <div
        class='GridCell'
        onClick={() => this.changeColor()}
        style={{ backgroundColor: this.state.currentColor }}
        status={this.state.currentStatus}
      ></div>
    );
  }

  changeColor() {
    if (this.state.currentColor === 'white') {
      this.setState({
        currentColor: 'black',
        currentStatus: 'true'
      });
      this.props.onFunc();
    } else {
      this.setState({
        currentColor: 'white',
        currentStatus: 'false'
      });
      this.props.offFunc();
    }
  }
}
