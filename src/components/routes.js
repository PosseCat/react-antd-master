import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'

import GoodsList from './components/goodsList'
import GoodsAdd from './components/goodsAdd'

export class goodsList extends Component {
	render(){
		return (
			<div>
				<GoodsList />
			</div>
		)
	}
}
export class goodsAdd extends Component {
	render(){
		return (
			<div>
				<GoodsAdd />
			</div>
		)
	}
}