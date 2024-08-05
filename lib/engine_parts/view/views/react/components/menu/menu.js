import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

export default class Menu extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectKey: props.selectKey,	//當前選擇的Key 為單純暫時為單選
			expandArr: props.expandArr,	//當前展開的Group 裡面放key
		}

		this.onSelect = this.onSelect.bind(this);
		this.onExpand = this.onExpand.bind(this);
		this.onShrink = this.onShrink.bind(this);
	}

	static getDerivedStateFromProps(props, state) {
		let data = {};
		if (props.selectKey !== state.selectKey)
			data.selectKey = props.selectKey;
		if (props.expandArr !== state.expandArr)
			data.expandArr = props.expandArr;
		return Object.keys(data).length > 0 ? data : null;
	}

	onSelect(selectKey, data) {
		if (this.props.autoControl) {
			this.setState({ selectKey }, () => {
				if (this.props.onSelect)
					this.props.onSelect(this.state, data);
			});
		}
		else {
			if (this.props.onSelect)
				this.props.onSelect({
					selectKey,
					expandArr: this.state.expandArr,

				}, data);
		}
	}

	//點擊展開
	onExpand(menuKey) {
		if (this.state.expandArr.indexOf(menuKey) >= 0)
			return;
		let expandArr = [...this.state.expandArr,];
		expandArr.push(menuKey);
		this.setState({ expandArr });
		if (this.props.expandChange)
			this.props.expandChange(expandArr)
	}

	//點擊縮起
	onShrink(menuKey) {
		let index = this.state.expandArr.indexOf(menuKey);
		if (index < 0)
			return;
		let expandArr = [...this.state.expandArr];
		expandArr.splice(index, 1);
		this.setState({ expandArr });
		if (this.props.expandChange)
			this.props.expandChange(expandArr)
	}

	getClassName() {
		let className = 'menuContainer'
		if (this.props.className)
			className = className + ' ' + this.props.className;
		return className;
	}

	render() {
		return (
			<div className={this.getClassName()}>
				{
					React.Children.map(this.props.children, (val) => {
						return React.cloneElement(val, {
							expandArr: this.state.expandArr,
							selectKey: this.state.selectKey,
							onSelect: this.onSelect,
							onExpand: this.onExpand,
							onShrink: this.onShrink,
							style: { 'paddingLeft': 10 }
						});
					})
				}
			</div>
		)
	}
}

Menu.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	onSelect: PropTypes.func,
	selectKey: PropTypes.string,
	expandArr: PropTypes.array,
	expandChange: PropTypes.func,		//展開陣列可由外部傳入 故改變縮放狀態時通知外部 以免狀態不統一
	autoControl: PropTypes.bool,		//是否由內部自動控制State
};

Menu.defaultProps = {
	selectKey: '',
	expandArr: [],
	autoControl: true,
};

