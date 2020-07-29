import React, { Component } from 'react';
import styles from './styles';
import SignInForm from './SignInForm';

export default class Home extends Component {
	initialItem = {
		username: '',
		email: '',
		phone: '',
	};
	state = {
		item: { ...this.initialItem },
		list: [],
		editMode: false,
	};
	handleSignIn = () => {
		this.setState((prevState) => ({
			list: [...prevState.list, prevState.item],
			item: { username: '', email: '', phone: '' },
		}));
	};
	handleDelete = (allList) => {
		const filtered = this.state.list.filter((ls) => ls !== allList);
		this.setState({
			list: filtered,
		});
	};
	handleEdit = (input) => {
		console.log(input);
		this.setState({
			item: input,
			editMode: true,
		});
	};

	changeItemsProps = ({ nam, val }) => {
		let newItem = { ...this.state.item, [nam]: val };
		console.log(newItem);
		this.setState({
			item: newItem,
		});
	};
	render() {
		return (
			<div style={styles.body}>
				<div style={styles.centerTitle}>
					<h1>Address Book</h1>
				</div>
				<div style={styles.main}>
					<SignInForm
						handleSignIn={this.handleSignIn}
						item={{ ...this.state.item }}
						changeItemsProps={this.changeItemsProps}
						editMode={this.state.editMode}
					/>
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
						{this.state.list.map((item, index) => (
							<tbody>
								<tr key={item.index} style={styles.tableTr}>
									<td style={tdStyle}>{item.username}</td>
									<td style={tdStyle}>{item.email}</td>
									<td style={tdStyle}>{item.phone}</td>
									<td style={tdStyle}>
										<button
											onClick={() => this.handleEdit(item, index)}
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
