import React from 'react';
import style from './home.css';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {combineApp} from '@reducers/combineapp';
import App from '@components/todo/app';
let store = createStore(combineApp);

import { FormattedMessage } from 'react-intl';
import AppLocale from '../locale/change_locale';

class Home extends React.Component {
	render() {
		return <div className={style.index}>
            <h3><FormattedMessage id='login.item_introduction'/></h3>
			<div className={style.content}>
				<p>此項目是個人搭建的一個簡單的測試網站，它包括的功能有A1，A2，A3...</p>
				<span>該網站利用了：</span>
				<ul className={style.tip}>
					<li>react構建前端的組件</li>
					<li>react-router管理路由使其成為單頁應用</li>
					<li>express4搭建後台接口</li>
					<li>MySql 數據的存取</li>
                    <li>webpack管理+構建</li>
                    <li><FormattedMessage id='login.test1' values={{ desc: 'test language' }}/></li>
				</ul>
				<p className={style.github}><a href='/'>Home</a></p>
			</div>

			<div className={style.content}>
				<Provider store={store}>
					<App />
				</Provider>
            </div>

            <div className={style.content}>
                <AppLocale />
            </div>
		</div>
	}
}

export default Home;