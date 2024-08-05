import React from 'react';
import ErrorBoundary from '@widgets/errorboundary';
import PropTypes from 'prop-types';
import { MenuData } from '@containers/menudata';
import { Page } from '@containers/page';
import { Intl } from '@intl';
import { Button,Icon } from 'antd';
import './index.scss';

class GroupPage extends React.Component {
    constructor(props) {
        super(props);

        this.setPageTitle = this.setPageTitle.bind(this);
        this.getChildDataArray = this.getChildDataArray.bind(this);
        this.getButtonHtmlByChildArr = this.getButtonHtmlByChildArr.bind(this);
    }

    setPageTitle(key) {
        this.pageTitle = this.props.getLS(key);
    }

    getChildDataArray() {
        let childArray = [];
        let { menuData, page } = this.props;
        let pageKey = page.name;

        let getChild = (item) => {
            if (item.key === pageKey) {
                this.setPageTitle(item.title);
                childArray = item.child;
            }
            else if (item.child) {
                getChild(item.child);
            }
        }

        let handleMeunData = (data) => {
            for (let item of data) {
                getChild(item)
                if (item.child)
                    handleMeunData(item.child);
            }
        }
        handleMeunData(menuData);

        return childArray;
    }

    getButtonHtmlByChildArr(childArray) {
        return (
            <div className='buttonContainer'>
                {
                    childArray.map((val) => {
                        return (
                            <React.Fragment key={val.key}>
                                <Button onClick={() => { this.props.setPage(val.key) }} className='btn-group' icon='edit'>
                                    {this.props.getLS(val.title)}
                                </Button>
                            </React.Fragment>
                        );
                    })
                }
            </div>
        );
    }


    render() {
        let childArray = this.getChildDataArray();

        return (
            <ErrorBoundary>
                <div className='groupPageContainer'>
                    <h1>{this.pageTitle}</h1>
                    {this.getButtonHtmlByChildArr(childArray)}
                </div>
            </ErrorBoundary>
        );
    }

}


GroupPage.propTypes = {

    //包裝起來的props
    menuData: PropTypes.array.isRequired,
    page: PropTypes.object.isRequired,
    setPage: PropTypes.func.isRequired,
    getLS: PropTypes.func.isRequired,
};

GroupPage.defaultProps = {
};

export default Intl(Page(MenuData(GroupPage)));


