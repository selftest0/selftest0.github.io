import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { Input, Modal, Footer, Image, List } from 'src/views/_blocks';
import './styles.scss';


export default class UserList extends React.Component {
    static propTypes = {
        fetchList: PropTypes.func.isRequired,
        list: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            avatar: PropTypes.string,
            description: PropTypes.string,
        })).isRequired,
        // count: PropTypes.number.isRequired,
        // history: PropTypes.shape({ push: PropTypes.func }).isRequired,
        // location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
    };
    state = {
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchList({ offset: 0, limit: 5, sort: 'created_at desc' });
    }

    render() {
        const { list } = this.props;

        return (
            <div className="user-list">
                {
                    list.map(item => <li key={item.id}><Link to={`/user/item/${item.id}`}><pre>{JSON.stringify(item, null, 4)}</pre></Link></li>)
                }
            </div>
        );
    }
}
