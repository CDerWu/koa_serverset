import React from 'react';
import ErrorBoundary from '@widgets/errorboundary';
import Menu from '@components/menu';
import PropTypes from 'prop-types';
import { Intl } from '@intl';
import './index.scss';


class AgentMenu extends React.Component {
    getMenuContent(data) {
        if (!data)
            return;

        if (data.child)
            return this.getMenuGroupHtml(data);
        else
            return this.getMenuItemHtml(data);
    }

    getMenuGroupHtml(data) {
        return (
            <Menu.Group
                title={this.props.getLS(data.title)}
                menuKey={data.key}
                key={data.key}
                customData={data.data}
            >
                {(() => {
                    if (!data.child)
                        return null;
                    return data.child.map((obj) => {
                        return this.getMenuContent(obj);
                    });
                })()}
            </Menu.Group>
        );
    }

    getMenuItemHtml(data) {
        return (
            <Menu.Item
                menuKey={data.key}
                key={data.key}
                customData={data.data}
            >{this.props.getLS(data.title)}
            </Menu.Item>
        );
    }

    render() {
        let { onSelect, expandArr, selectKey, menuData, getLS, expandChange } = this.props;
        return (
            <ErrorBoundary>
                <div>
                    <div className='menu-title'>{getLS('menu.menu_title')}</div>
                    <div className='agent-menu'>
                        <Menu
                            onSelect={onSelect}
                            expandArr={expandArr}
                            expandChange={expandChange}
                            selectKey={selectKey}
                            autoControl={false}
                        >
                            {
                                menuData.map((obj) => {
                                    return this.getMenuContent(obj);
                                })
                            }
                        </Menu>
                    </div>
                </div>
            </ErrorBoundary>
        );
    }
}

AgentMenu.propTypes = {
    onSelect: PropTypes.func,
    expandArr: PropTypes.array,
    expandChange: PropTypes.func,
    selectKey: PropTypes.string,
    menuData: PropTypes.array.isRequired,

    getLS: PropTypes.any.isRequired,
};

AgentMenu.defaultProps = {
};

export default Intl(AgentMenu);