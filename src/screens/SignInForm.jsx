import React, { Component } from 'react';
import styles from './styles';
import InputBox from '../components/InputBox';
import Btn from '../components/Btn';

export default class SignInForm extends Component {
  state = {
    username: 'username',
    showMsg: false,
  };
  myBtnClick = () => {
    this.setState({
      showMsg: true,
    });
  };

  render() {
    return (
      <form style={styles.form}>
        <h2 style={{ textAlign: 'center' }}>New Contact</h2>
        <InputBox
          placeholder='Username'
          regex={/^[a-z0-9]{2,}$/}
          errorText='username cannot include space'
        />
        <InputBox
          placeholder='Email'
          regex={/^[a-z0-9]{3,}@[2-z]{2,}\.[a-z]{2,4}$/i}
          errorText='invalid E-mail format'
        />
        <InputBox
          placeholder='Phone No.'
          regex={/^07[0-9]{9}$/}
          errorText='invalid Mobile Number format'
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}
        >
          <Btn title='Submit' bg='#bdbdbd' onClickProp={this.myBtnClick} />
          {this.state.showMsg ? (
            <span> {this.state.username} added to Address Book</span>
          ) : null}
        </div>
      </form>
    );
  }
}
