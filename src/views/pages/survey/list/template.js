import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row } from 'src/views/_blocks/index';
import surveys from 'src/views/pages/survey/data/list';
import { ReactComponent as SurveySVG } from './survey.svg';
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
        // this.props.fetchList();
    }

    render() {
        return (
            <Row id="survey-list-page">
                {
                    surveys.map(i => (
                        <Link className="survey-list__card" to={`/survey/item/${i.id}`}>
                            <SurveySVG className="survey-list__icon" />
                            {!i.card && <div className="survey-list__title">{i.title}</div>}
                            {i.card && <div className="survey-list__title">{i.card.title}</div>}
                            {i.card && <div className="survey-list__description">{i.card.description}</div>}
                        </Link>
                    ))
                }
            </Row>
        );
    }
}
