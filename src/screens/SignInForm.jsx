import React, { Component } from 'react';
import styles from './styles';
import InputBox from '../components/InputBox';
import Btn from '../components/Btn';

export default class SignInForm extends Component {
  state = {
    username: '',
    email: '',
    phone: '',
    showMsg: false,
  };

  onChangeHandle = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });
  };
  //   handleSignIn = (newEntry) => {
  //     this.setState((prevState) => ({ list: [...prevState.list, newEntry] }));
  //   };
  handleSubmitForm = (e) => {
    e.preventDefault();
    let { username, email, phone } = this.state;
    this.props.handleSignIn({ username, email, phone });
    this.setState({ showMsg: true, username: '', email: '', phone: '' });
  };

  render() {
    return (
      <form style={styles.form} onSubmit={this.handleSubmitForm}>
        <h2 style={{ textAlign: 'center' }}>New Contact</h2>
        {/* <label>Username</label> */}
        <InputBox
          nameProp='username'
          placeholder='Username'
          regex={/^[a-z0-9]{2,}$/}
          errorText='username cannot include space'
          value={this.state.username}
          onChangeProps={this.onChangeHandle}
        />
        <InputBox
          nameProp='email'
          placeholder='Email'
          regex={/^[a-z0-9]{3,}@[2-z]{2,}\.[a-z]{2,4}$/i}
          errorText='invalid E-mail format'
          value={this.state.email}
          onChangeProps={this.onChangeHandle}
        />
        <InputBox
          nameProp='phone'
          placeholder='Phone No.'
          regex={/^07[0-9]{9}$/}
          errorText='invalid Mobile Number format'
          value={this.state.phone}
          onChangeProps={this.onChangeHandle}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          <Btn
            title='Submit'
            bg='#bdbdbd'
            onClickProp={this.handleSubmitForm}
          />
          {this.state.showMsg ? (
            <span>New entry added to Address Book</span>
          ) : null}
        </div>
      </form>
    );
  }
}
