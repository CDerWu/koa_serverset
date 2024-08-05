import React from 'react';
import { Intl } from '@intl';
import Exception from 'ant-design-pro/lib/Exception';
import PropTypes from 'prop-types';
import './index.scss';

function DefaultPage(props) {
    return (
        <div className='defaultPageContainer'>
        <Exception
            type="404"
            title={props.getLS('defaultpage.title')}
            desc={props.getLS('defaultpage.content')}
        />
        </div>
    )
}

DefaultPage.propTypes = {
    //包裝起來的props
    getLS: PropTypes.func.isRequired,
};

export default Intl(DefaultPage);