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
  handleDelete = (allList) => {
    const filtered = this.state.list.filter((ls) => ls !== allList);
    this.setState({
      list: filtered,
    });
  };
  handleEdit = (input) => {
    console.log(input);
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

        {this.state.list.length > 0 ? (
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableTr}>
                <th style={thStyle}>USERNAME</th>
                <th style={thStyle}>EMAIL ADDRESS</th>
                <th style={thStyle}>PHONE NUMBER</th>
                <th style={thStyleDel}></th>
              </tr>
            </thead>
            {this.state.list.map((item) => (
              <tbody>
                <tr key={item.username} style={styles.tableTr}>
                  <td style={tdStyle}>{item.username}</td>
                  <td style={tdStyle}>{item.email}</td>
                  <td style={tdStyle}>{item.phone}</td>
                  <td style={tdStyle}>
                    <button
                      onClick={() => this.handleEdit(item)}
                      style={btnEdit}
                    >
                      EDIT
                    </button>
                    <button
                      onClick={() => this.handleDelete(item)}
                      style={btnDel}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        ) : null}
      </div>
    );
  }
}
const thStyle = {
  width: '27%',
  border: 'none',
  height: 30,
  fontFamily: '"Special Elite", cursive',
  borderBottom: '1px solid #000',
  backgroundColor: 'white',
};
const thStyleDel = {
  width: '19%',
  border: 'none',
  height: 30,
  fontFamily: '"Special Elite", cursive',
  borderBottom: '1px solid #000',
  backgroundColor: 'white',
};
const tdStyle = {
  border: 'none',
  height: 40,
  borderBottom: '1px solid #000',
  backgroundColor: '#bdbdbd',
};
const btnDel = {
  padding: 8,
  width: '40%',
  fontFamily: '"Special Elite", cursive',
  backgroundColor: '#8d8d8d',
  border: 'none',
  borderRadius: 4,
  marginLeft: 6,
};
const btnEdit = {
  padding: 8,
  width: '40%',
  fontFamily: '"Special Elite", cursive',
  backgroundColor: '#E0E0E0',
  border: 'none',
  borderRadius: 4,
  marginRight: 6,
};
