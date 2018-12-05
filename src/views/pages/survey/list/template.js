import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row } from 'src/views/_blocks/index';
import './styles.scss';


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
            <Row id="survey-list-page">
                {
                    list.map(i => (
                        <Link className="survey-list__card" to={`/survey/item/${i.id}`}>
                            {i.title}
                        </Link>
                    ))
                }
            </Row>
        );
    }
}
