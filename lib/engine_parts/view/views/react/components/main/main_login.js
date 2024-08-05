import React from 'react';
import ErrorBoundary from '@widgets/errorboundary';
import Lobby from '@components/lobby';
import './main_login.scss';
import getSWComponent from '@react/js/conversionpagecomponent';
import { Intl } from '@intl';
//import { User } from '@containers/user';
import { httpGet, httpPost } from '@react/js/httpreq';
import AgentMenu from '@components/agentmenu';
import { Menu, Dropdown, Icon, Spin, Button } from 'antd';
import { Page } from '@containers/page';
import { remove, on, EventType } from '@react/js/event'
import PropTypes from 'prop-types';
import menuObject from '@react/js/default_menu';

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			expandMenuArr: [],
			menuIsReady: false,
			sWComponentIsReady: false,
		}

		this.initSWComponent();
		this.initAgentMenu();
		this.loadingCount = 0;

		window.onpopstate = this.onHistoryChange.bind(this);
	}

	componentDidUpdate() {
		this.setHistory();
	}

	componentDidMount() {
		this.triggerLoading({ loading: false });
		on(EventType.LOADING, this.triggerLoading);
		this.setHistory();
		//判斷是否為重置密碼狀態，將其導至修改密碼頁
		// if (this.props.user.ischangepw) {
		// 	this.props.setPage('ChangePassword');
		// }
	}

	componentWillUnmount() {
		remove(EventType.LOADING);
	}

	initSWComponent = async () => {
		this.SWComponent = await getSWComponent();
		this.setState({ sWComponentIsReady: true })
	}

	initAgentMenu = async () => {
		//由server拿取menuData
		this.menuData = await menuObject.getMenuInfo();

		//判斷menu資料內的expand決定標題是否展開
		let expandarr = [];
		let parseToExpand = function (arr) {
			for (let obj of arr) {
				autoExpand(obj);
			}
		}
		let autoExpand = function (data) {
			if (!data || !data.child)
				return;
			if (data.expand)
				expandarr.push(data.key);

			parseToExpand(data.child);
		}
		parseToExpand(this.menuData);

		this.setState({
			expandMenuArr: expandarr,
			menuIsReady: true
		})
	}
	
	setHistory = () => {
		if (this.state.menuIsReady === false || this.state.sWComponentIsReady === false)
			return;

		let props = this.props;
		if (!this.SWComponent[props.page.name])
			return;

		let curState = window.history.state;
		if (curState && (curState.SWType !== props.page.name))
			window.history.pushState({ ...props.page.data, SWType: props.page.name }, props.page.name, window.location);
		else {
			let newStates = {};
			let page_data = { ...props.page.data };
			Object.assign(newStates, curState, page_data, { SWType: props.page.name });
			window.history.replaceState(newStates, props.page.name, window.location);
		}
	}

	onHistoryChange = (event) => {
		let state = event.state;
		if (!state) return;
		if (state.SWType === this.props.page.name)
			return;

		switch (state.SWType) {
			default:
				this.props.setPage(state.SWType, { ...state })
				break;
		}
	}

	selectMenu = (menuState, data) => {
		const { getLS } = this.props;
		if (!data.accessPermission) {
			alert(getLS('menu.no_access_permission'));
			return;
		}

		let { selectKey, expandArr } = menuState;

		//切換時該頁面Key未定義
		if (selectKey in this.SWComponent === false)
			selectKey = this.props.page.name;

		this.menuExpandChange(expandArr);

		this.props.setPage(selectKey);
	}

	menuExpandChange = (expandMenuArr) => {
		this.setState({
			expandMenuArr,
		});
	}

	//登出
	logout = () => {
		httpPost('/user/logout', '', function (data) {
			if (data !== undefined) {
				window.location.href = data.url;
			}
			else { }
		}.bind(this), function (error) { });
	}

	//登出
	changePassword = () => {
		this.props.setPage('ChangePassword');
	}

	/**
     * 處理loading是否出現
     */
	triggerLoading = (obj = {}) => {
		let loading = obj.loading || false;

		if (loading)
			this.loadingCount += 1;
		else
			this.loadingCount = this.loadingCount <= 0 ? 0 : this.loadingCount - 1;

		this.setState({ loading: this.loadingCount <= 0 ? false : true })
	}


	render() {
		if (this.state.menuIsReady === false || this.state.sWComponentIsReady === false)
			return <div />;

		const { page, getLS } = this.props;
		const { loading } = this.state
		let pageInfo = { type: page.name, params: page.data };
		let menu = (
			<Menu>
				<Menu.Item key="1" onClick={this.changePassword}>變更密碼</Menu.Item>
				<Menu.Item key="2" onClick={this.logout}>登出</Menu.Item>
			</Menu>
		);

		return (
			<ErrorBoundary>
				<Spin spinning={loading} tip={getLS('common.loading')} size='large'>
					<div className='main-container'>
						<div className='main-sider'>
							<AgentMenu
								menuData={this.menuData}
								onSelect={this.selectMenu}
								expandArr={this.state.expandMenuArr}
								expandChange={this.menuExpandChange}
								selectKey={page.name}
							/>
						</div>
						<div className='content-container'>
							<div className='account-menu'>
								{/* <Dropdown overlay={menu}>
									<Button className="ant-dropdown-link user" type="primary" href="#">{user ? user.account : '未有名字'}<Icon type="down" /></Button >
								</Dropdown> */}
							</div>
							<div className="main-content">
								<Lobby showpage={pageInfo} SWComponent={this.SWComponent} />
							</div>
						</div>
					</div>
				</Spin>
			</ErrorBoundary>
		);
	}
}

Main.propTypes = {

	//包裝起來的props
	getLS: PropTypes.func.isRequired,
	setPage: PropTypes.func.isRequired,
	//user: PropTypes.object.isRequired,
	page: PropTypes.object.isRequired,
};

Main.defaultProps = {
};

export default Page(Intl(Main));
//export default Page(User(Intl(Main)));
