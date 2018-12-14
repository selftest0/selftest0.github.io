import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from './_blocks';
import './styles.scss';


export default class Header extends React.Component {
    static propTypes = {
        me: PropTypes.shape({ id: PropTypes.string }),
        signOut: PropTypes.func,
        location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
        // history: PropTypes.shape({ push: PropTypes.func }).isRequired,
        // fetchMe: PropTypes.func,
    };

    state = {
        active: this.props.location.pathname.slice(1).split('/', 2).join('/'),
    };

    componentWillReceiveProps(nextProps) {
        const { location } = nextProps;
        const active = location.pathname.slice(1).split('/', 2).join('/');
        if (active !== this.state.active) {
            this.setState({ active });
        }
    }

    render() {
        const { me, signOut } = this.props;
        const { active } = this.state;
        return (
            <ul className="header">
                <li key="surveys" className="header__item"><MenuItem to="/survey/list" active={active === 'survey/list'}>Surveys</MenuItem></li>
                { me.id && <li key="users" className="header__item"><MenuItem to="/user/list" active={active === 'user/list'}>Users</MenuItem></li>}
                { me.id && <li key="profile" className="header__item"><MenuItem to="/user/me" active={active === 'user/me'}>Profile</MenuItem></li>}
                { me.id && <li key="signout" className="header__item header__item--auth"><MenuItem to="/auth/signin" onClick={signOut}>Sign Out</MenuItem></li>}
                { !me.id && <li key="signin" className="header__item header__item--auth"><MenuItem to="/auth/signin" active={active === 'auth/signin'}>Sign In</MenuItem></li>}
            </ul>
        );
    }
}
