import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'src/views/_blocks';
import { MenuItem } from './_blocks';
import './styles.scss';


export default class Header extends React.Component {
    static propTypes = {
        me: PropTypes.shape({ id: PropTypes.string }),
        meStatus: PropTypes.string,
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
        const { me, meStatus, signOut } = this.props;
        const { active } = this.state;
        return (
            <>
                <Loader hidden={meStatus !== 'request'}/>
                <ul className="header">
                    <li key="surveys" className="header__item"><MenuItem to="/survey/list" active={active === 'survey/list'}>Опросы</MenuItem></li>
                    { me.id && <li key="users" className="header__item"><MenuItem to="/user/list" active={active === 'user/list'}>Пользователи</MenuItem></li>}
                    { me.id && <li key="profile" className="header__item header__item--user"><MenuItem to="/user/me" active={active === 'user/me'}>Профиль</MenuItem></li>}
                    { me.id && <li key="signout" className="header__item header__item--auth"><MenuItem to="/auth/signin" onClick={signOut}>Выход</MenuItem></li>}
                    { !me.id && <li key="signin" className="header__item header__item--auth"><MenuItem to="/auth/signin" active={active === 'auth/signin'}>Войти</MenuItem></li>}
                </ul>
            </>
        );
    }
}
