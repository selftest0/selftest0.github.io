import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';


export default class Header extends React.Component {
    static propTypes = {
        me: PropTypes.shape({ id: PropTypes.string }),
        signOut: PropTypes.func,
        // history: PropTypes.shape({ push: PropTypes.func }).isRequired,
        // location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
        // fetchMe: PropTypes.func,
    };

    render() {
        const { me, signOut } = this.props;
        // const active = location.pathname;
        return (
            <ul className="header">
                {
                    me.id
                        ? [
                            <li><Link to="/survey/list">Surveys</Link></li>,
                            <li><Link to="/user/list">Users</Link></li>,
                            <li><Link to="/user/me">Profile</Link></li>,
                            <li><Link to="/auth/signin" onClick={signOut}>Sign Out</Link></li>,
                        ]
                        : <li><Link to="/auth/signin">Sign In</Link></li>
                }
            </ul>
        );
    }
}
