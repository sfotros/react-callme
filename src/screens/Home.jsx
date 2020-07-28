import React, { Component } from 'react';
import styles from './styles';
import SignInForm from './SignInForm';

export default class Home extends Component {
  state = {
    list: [],
  };
  handleSignIn = (newEntry) => {
    this.setState((prevState) => ({ list: [...prevState.list, newEntry] }));
  };
  render() {
    return (
      <div style={styles.body}>
        <div style={styles.centerTitle}>
          <h1>Address Book</h1>
        </div>
        <div style={styles.main}>
          <SignInForm handleSignIn={this.handleSignIn} />
        </div>
        <div>contacts:</div>

        {this.state.list.length > 1 ? (
          <table>
            <tr>
              <th>USERNAME</th>
              <th>EMAIL ADDRESS</th>
              <th>PHONE NUMBER</th>
            </tr>
            {this.state.list.map((item) => (
              <tr>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </table>
        ) : null}
      </div>
    );
  }
}
