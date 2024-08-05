import React from 'react'
import style from './about.css'
import { FormattedMessage } from 'react-intl';

class AboutCom extends React.Component {
	render() {
		return <div>
            <h3 className={style.title}>關於Demo</h3>
			<ul className={style.msg}>
                <li><em>公司</em>：AAAAAAAA</li>
                <li><em>地址</em>：BBBBBBBB</li>
                <li><em>專業</em>：CCCCCCCC</li>
                <li><em>電話</em>：DDDDDDDD</li>
                <li><em>email</em>：EEEEEEEEE</li>
                <li><FormattedMessage id='login.test1' values={{ desc: 'test language' }}/></li>
			</ul>
		</div>
	}
}

export default AboutCom;