import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

const style = {
	position: "absolute",
	top: 0,
	left: 0,
	width : "25%",
	height: "100%",
	background: "#333"
}


class Left extends Component {
	handleClick = (e) => {
		console.log('Clicked: ', e);
	}
	render(){
		return (
	 		<div style={ style }>
	 			<Menu
				        onClick={this.handleClick}
				        // defaultSelectedKeys={['2']}
				        // defaultOpenKeys={['sub1']}
				        mode="inline"
				        theme={"dark"}
				>
					<SubMenu key="goods" title={<span><Icon type="menu-unfold" /><span>商品相关</span></span>}>
						<SubMenu key="goods-goods" title="商品">
							<Menu.Item key="1">
								<Link to="/goods/list">商品列表</Link>
							</Menu.Item>
							<Menu.Item key="2">
								<Link to="/goods/add">商品添加</Link>
							</Menu.Item>
						</SubMenu>
						<SubMenu key="goods-cate" title="分类">
							<Menu.Item key="3">
								<Link to="/cate/list">分类列表</Link>
							</Menu.Item>
							<Menu.Item key="4">
								<Link to="/cate/add">分类添加</Link>
							</Menu.Item>
						</SubMenu>
						<SubMenu key="goods-attribute" title="属性">
							<MenuItemGroup key="goods-attribute-type" title="类别">
								<Menu.Item key="5">
									<Link to="/type/list">类别列表</Link>
								</Menu.Item>
								<Menu.Item key="6">
									<Link to="/type/add">类别添加</Link>
								</Menu.Item>
							</MenuItemGroup>
							<MenuItemGroup key="goods-attribute-attr" title="属性">
								<Menu.Item key="7">
									<Link to="/attribute/list">属性列表</Link>
								</Menu.Item>
								<Menu.Item key="8">
									<Link to="/attribute/add">属性添加</Link>
								</Menu.Item>
							</MenuItemGroup>
						</SubMenu>
					</SubMenu>
					<SubMenu key="user" title={<span><Icon type="user" /><span>用户</span></span>}>
						<Menu.Item key="9">
							<Link to="/user/list">用户列表</Link>
						</Menu.Item>
					</SubMenu>
					<SubMenu key="comment" title={<span><Icon type="message" /><span>评论管理</span></span>}>
						<Menu.Item key="10">
							<Link to="/comment/list">评论列表</Link>
						</Menu.Item>
					</SubMenu>
					<SubMenu key="activity" title={<span><Icon type="gift" /><span>促销/活动/待办项</span></span>}>
						<Menu.Item key="11">
							<Link to="/activity/list">活动列表</Link>
						</Menu.Item>
						<Menu.Item key="12">
							<Link to="/activity/add">活动添加</Link>
						</Menu.Item>
					</SubMenu>
				</Menu>
	 		</div>
		)
	}
}

export default Left