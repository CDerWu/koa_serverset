import React from 'react';
import { Intl } from '@intl';
import './login.scss'

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errMessage: ''
		};
    }
    
    onUserLogin(e) {
        e.preventDefault();
        let username = this.refs.username.value.trim();
        let password = this.refs.password.value.trim();
        $.ajax({
            url: '/user/login',
            type: 'POST',
            dataType: 'json',
            data: {
                username: username,
                password: password,
            },

            success: function (data) {
                if (data.result != 0)
					this.props.toParent(data.message);
                else
                    window.location.href = data.url;
            }.bind(this)
        })
    }

    render() {
        return <form className="LoginForm" onSubmit={this.onUserLogin.bind(this) }>
            <label htmlFor="username"></label><input placeholder="請輸入帳號" type="text" ref="username"/><br /><br />
			<label htmlFor="password"></label><input placeholder="請輸入密碼" type="password" ref="password"/><br /><br />
			<input type="submit" value={"登入"} />
        </form>;
    }
}

class LoginCom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: ""
        };
    }

    getChildInfo(result) {
        this.setState({ result: result });
    }

    render() {
        return <div className="LoginTitle">
            <h3>登入: {this.state.result} </h3>
			<LoginForm toParent={this.getChildInfo.bind(this)} getLS={this.props.getLS} />
        </div>
    }
}

export default Intl(LoginCom);