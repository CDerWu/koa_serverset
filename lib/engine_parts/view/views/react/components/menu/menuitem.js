import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';


export default class MenuItem extends React.Component {
	constructor(props) {
		super(props);

		this.onSelect = this.onSelect.bind(this);
	}

	onSelect(menuKey, customData) {
		if (this.props.onSelect)
			this.props.onSelect(menuKey, customData)
	}

	getClassName() {
		let className = 'menuItemontainer';
		let { selectKey, menuKey } = this.props;
		if (selectKey === menuKey)
			className += ' active'
		return className;
	}

	render() {
		let { customData, menuKey, style } = this.props;

		//Item前方沒有縮放按鈕	 因此針對縮放按鈕進行微調
		if ('paddingLeft' in style)
			style['paddingLeft'] = style['paddingLeft'] + 15 + 'px';

		return (
			<React.Fragment>
				<div style={style} className={this.getClassName()} >
					<span onClick={() => { this.onSelect(menuKey, customData) }}>
						{this.props.children}
					</span>
				</div>
			</React.Fragment>

		)
	}
}
MenuItem.propTypes = {
	style: PropTypes.object,//處理padding問題

	children: PropTypes.any,
	onSelect: PropTypes.func,
	menuKey: PropTypes.string,
	selectKey: PropTypes.string,
	customData: PropTypes.object,
};

MenuItem.defaultProps = {
	customData: {},
};
