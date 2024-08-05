import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import View from '@widgets/view';


export default class MenuGroup extends React.Component {
	constructor(props) {
		super(props);

		this.onSelect = this.onSelect.bind(this);
		this.onExpand = this.onExpand.bind(this);
		this.onShrink = this.onShrink.bind(this);
	}

	onSelect(menuKey, customData) {
		if (this.props.onSelect)
			this.props.onSelect(menuKey, customData)
	}

	getTitleClassName() {
		let className = 'titleContainer';
		let { selectKey, menuKey } = this.props;
		if (selectKey === menuKey)
			className += ' active';
		return className;
	}

	onExpand(menuKey) {
		if (this.props.onExpand)
			this.props.onExpand(menuKey)
	}

	onShrink(menuKey) {
		if (this.props.onShrink)
			this.props.onShrink(menuKey)
	}

	getIconClassName() {
		let { expandArr, menuKey } = this.props;
		if (expandArr.indexOf(menuKey) >= 0)
			return 'openIcon';
		return 'closeIcon';
	}

	render() {
		let { expandArr, menuKey, selectKey, customData, style } = this.props;
		let isExpand = expandArr.indexOf(menuKey) >= 0 ? true : false;

		return (
			<React.Fragment>
				<div>
					<div  style={{ 'paddingLeft': style['paddingLeft'] + 'px' }} className={this.getTitleClassName()}>
						{/* 縮放按鈕 */}
						<div
							onClick={() => {
								if (isExpand)
									this.onShrink(menuKey);
								else
									this.onExpand(menuKey);
							}}
							className={this.getIconClassName()}
						>
						</div>

						{/* 標題 */}
						<span onClick={() => { this.onSelect(menuKey, customData) }}>
							{this.props.title}
						</span>
					</div>
					<View show={isExpand}>
						<div>
							{
								React.Children.map(this.props.children, (val) => {
									return React.cloneElement(val, {
										onSelect: this.onSelect,
										onShrink: this.onShrink,
										onExpand: this.onExpand,
										expandArr,
										selectKey,
										style: { 'paddingLeft': style['paddingLeft'] + 15 }
									});
								})
							}
						</div>
					</View>
				</div>
			</React.Fragment>

		)
	}
}

MenuGroup.propTypes = {
	children: PropTypes.any, //放MenuItem
	style: PropTypes.object,//處理padding問題

	title: PropTypes.any,	//顯示的名稱
	onSelect: PropTypes.func,
	menuKey: PropTypes.string,
	onShrink: PropTypes.func,
	onExpand: PropTypes.func,
	expandArr: PropTypes.array,
	selectKey: PropTypes.string,
	customData: PropTypes.object,
};

MenuGroup.defaultProps = {
	customData: {},
};
