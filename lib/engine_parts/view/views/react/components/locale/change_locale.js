import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Intl } from '@intl';
//import { intlShape, injectIntl, FormattedMessage } from 'react-intl';

import './change_locale.scss';
import { selectedLocale } from '@actions';

class App extends React.Component {
    render() {
        const { getLS } = this.props;
        const { intl, selectedLocale } = this.props;
        return (
            <div className="App">
                <p className="App-intro">
                    Select the language
                </p>

                <ul className="language">
                    <li onClick={() => selectedLocale('en-US')} className='enUS'>
                        en-US
                    </li>
                    <li onClick={() => selectedLocale('zh-TW')} className='zhTW'>
                        zh-TW
                    </li>
                    <li onClick={() => selectedLocale('zh-CN')} className='zhCN'>
                        zh-CN
                    </li>
                </ul>

                <p className="notice">
                    See the changes below
                </p>

                <p className="App-logo">
                    {getLS('login.test1', { desc: 'test language' })}
                    {/* {intl.formatMessage({ id: 'login.test1' }, { desc: 'test language' })} */}
                    {/* <FormattedMessage id='login.test1' values={{ desc: 'test language' }}/> */}
                </p>
            </div>
        );
    }
}

// bindActionCreators 就是將 Actions 和 dispatch 組合起來生成 mapDispatchToProps 需要生成的內容
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectedLocale }, dispatch);
}

App.propTypes = {
    //intl: intlShape.isRequired
};

//export default injectIntl(connect(null, mapDispatchToProps)(App));
export default connect(null, mapDispatchToProps)(Intl(App));