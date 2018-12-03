import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'src/views/_blocks/index';
import './styles.scss';

export default class SingIn extends Component {
    static propTypes = {
        onSignIn: PropTypes.func.isRequired,
        history: PropTypes.shape({ replace: PropTypes.func }),
        status: PropTypes.oneOf([ 'request', 'success', 'failure' ]),
    };

    handleSignIn = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        this.props.onSignIn({ email, password }).then(({ error }) => !error && this.props.history.replace('/user/me'));
    };
    handleChange = ({ value, name }) => this.setState({ [name]: value });
    render() {
        const { status } = this.props;
        return (
            <div className="page-signin">
                <form onSubmit={this.handleSignIn}>
                    <Input type="text" name="email" title="E-mail" placeholder="input your e-mail" onChange={this.handleChange} />
                    <Input type="password" name="password" title="Password" placeholder="password" onChange={this.handleChange} />
                    {status === 'failure' && <p className="error">E-mail or password is incorrect! Try again!</p>}
                    <Button type="submit" name="submit" green>Sign in</Button>
                </form>
            </div>
        );
    }
}
