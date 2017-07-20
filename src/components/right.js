import React , { Component } from 'react'
import { Link , Route } from 'react-router-dom'
import { Menu, Icon } from 'antd'

import * as RouteComponents from './routes.js'

const style = {
	position: "absolute",
	top: 0,
	left: "25%",
	width: "75%",
	paddingLeft: "0"
}

export default class Right extends Component {
	render(){
		return(
			<div style={ style }>
				<Route path="/goods/list" component={ RouteComponents.goodsList } />
				<Route path="/goods/add" component={ RouteComponents.goodsAdd } />
			</div>
		)
	}
}