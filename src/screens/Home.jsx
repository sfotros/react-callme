import React, { Component } from 'react';
import styles from './styles';
import SignInForm from './SignInForm';

export default class Home extends Component {
  render() {
    return (
      <div style={styles.body}>
        <div style={styles.centerTitle}>
          <h1>Address Book</h1>
        </div>
        <div style={styles.main}>
          <SignInForm />
        </div>
      </div>
    );
  }
}
