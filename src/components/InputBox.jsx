import React, { Component } from 'react';

export default class InputBox extends Component {
  state = {
    error: false,
    inputText: '',
  };
  render() {
    let placeholder = this.props.placeholder;
    let errorText = this.props.errorText;
    let regex = this.props.regex;
    const { onChangeProps } = this.props;
    return (
      <div
        style={{
          color: 'black',
          width: '100%',
          padding: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontFamily: '"Special Elite", cursive',
        }}
      >
        <input
          {...this.props}
          type='text'
          placeholder={placeholder}
          onChange={onChangeProps}
          onBlur={(e) => {
            this.setState({
              error: !RegExp.test(e.target.value),
              inputText: e.target.value,
            });
          }}
          style={{
            width: '80%',
            border: 'none',
            height: 30,
            fontFamily: '"Special Elite", cursive',
            borderBottom: '1px solid #000',
          }}
        />
        <span>{errorText}</span>
      </div>
    );
  }
}
