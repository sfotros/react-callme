import React, { Component } from 'react';

export default class Btn extends Component {
  render() {
    return (
      <div>
        <button
          style={{
            width: 120,
            height: 40,
            backgroundColor: this.props.bg,
            fontFamily: '"Special Elite", cursive',
          }}
          onClick={this.props.onClickProp}
        >
          {this.props.title}
        </button>
      </div>
    );
  }
}
