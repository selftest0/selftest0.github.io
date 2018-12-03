import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';


export default class SurveyList extends React.Component {
    static propTypes = {
        fetchList: PropTypes.func.isRequired,
        list: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            soul: PropTypes.string,
            survey: PropTypes.number,
            rate: PropTypes.number,
            now: PropTypes.number,
        })).isRequired,
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchList();
    }

    render() {
        const { list } = this.props;

        return (
            <div className="survey-list">
                <pre>{JSON.stringify(list, null, 4)}</pre>
            </div>
        );
    }
}
