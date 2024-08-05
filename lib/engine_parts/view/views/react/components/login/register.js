
import React from 'react';

class RegisterForm extends React.Component {
    onUserLogin(e) {
        e.preventDefault();
        let account = this.refs.account.value.trim();
        let password = this.refs.password.value.trim();
        let nickname = this.refs.nickname.value.trim();
        $.ajax({
            url: '/users/register',
            type: 'POST',
            dataType: 'json',
            data: {
                account: account,
                password: password,
                nickname: nickname
            },

            success: function (data) {
                this.props.toParent(data.message);
            }.bind(this)
        })
    }

    render() {
        return <form className="LoginForm" onSubmit={this.onUserLogin.bind(this) }>
            <label htmlFor="account">帳號：</label><input placeholder="帳號" type="text" ref="account"/><br/><br/>
            <label htmlFor="password">密碼：</label><input placeholder="密碼" type="password" ref="password"/><br/><br/>
            <label htmlFor="nickname">暱稱：</label><input placeholder="暱稱" type="text" ref="nickname"/><br/><br/>
            <input type="submit" value="register" />
        </form>;
    }
}

class RegisterCom extends React.Component {
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
            <h3>註冊: {this.state.result} </h3>
            <RegisterForm toParent={this.getChildInfo.bind(this) } />
        </div>
    }
}

export default RegisterCom;