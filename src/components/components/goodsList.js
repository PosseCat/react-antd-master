import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import { Table, Pagination , Icon , Input , Button } from 'antd'

import './goodsList.css'


const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Joe Black',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Jim Green',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Jim Red',
  age: 32,
  address: 'London No. 2 Lake Park',
}];




export default class goodsList extends Component{
	state = {
		filterDropdownVisible: false,
		data: [],
		searchText: '',
		filtered: false,
	};
	componentDidMount(){
		fetch('./initData/goodsList.json')
		.then(res => res.json())
		.then(res => {
			this.setState({
				data: res.goodsList ,
				dataCopy: res.goodsList
			})
		})
	}
	onInputChange = (e) => {
		this.setState({ searchText: e.target.value });
	}
	onSearch = () => {
		const { searchText } = this.state;
		const reg = new RegExp(searchText, 'gi');
		this.setState({
			filterDropdownVisible: false,
			filtered: !!searchText,
			data: this.state.dataCopy.map((record) => {
				const match = record.name.match(reg);
				if (!match) {
					return null;
				}
				return {
					...record,
					name: (
						<span>
							{record.name.split(reg).map((text, i) => (
								i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
							))}
						</span>
					),
				};
			}).filter(record => !!record),
		});
	}
	render() {
		const columns = [{
			title: '名字',
			dataIndex: 'name',
			key: 'name',
			filterDropdown: (
				<div className="custom-filter-dropdown">
					<Input
						ref={ele => this.searchInput = ele}
						placeholder="Search name"
						value={this.state.searchText}
						onChange={this.onInputChange}
						onPressEnter={this.onSearch}
					/>
					<Button type="primary" onClick={this.onSearch}>Search</Button>
				</div>
			),
			filterIcon: <Icon type="smile-o" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
			filterDropdownVisible: this.state.filterDropdownVisible,
			onFilterDropdownVisibleChange: (visible) => {
				this.setState({
					filterDropdownVisible: visible,
				}, () => this.searchInput.focus());
			}
		}, {
			title: '钱',
			dataIndex: 'price',
			key: 'price'
		}, {
			title: '库存',
			dataIndex: 'stock',
			key: 'stock'
		}, {
			title: '分类',
			dataIndex: 'cateName',
			key: 'cateName',
		}, {
			title: '状态',
			dataIndex: 'isSale',
			key: 'isSale',
			filters: [{
				text: '在售',
				value: '在售',
			}, {
				text: '停售',
				value: '停售',
      			}],
			onFilter: (value, record) => record.isSale.indexOf(value) === 0
		}];
		return <Table columns={columns} dataSource={this.state.data} className="goods-list" />
	}
}