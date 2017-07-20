import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import { Table, Pagination , Icon , Input , Button } from 'antd'

export default class goodsAdd extends Component {
	render() {
		return (
			<div>
				<input placeholder="Name..." />
				<Button>Add.</Button>
			</div>
		)
	}
}