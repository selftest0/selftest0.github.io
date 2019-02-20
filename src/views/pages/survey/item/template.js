import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, CheckBoxList, Row, Modal } from 'src/views/_blocks/index';
import surveys from 'src/views/pages/survey/data/list';
import './styles.scss';


export default class SurveyItem extends Component {
    static propTypes = {
        item: PropTypes.shape({
            title: PropTypes.string,
            content: PropTypes.string,
        }).isRequired,
        match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }),
    };

    state = {
        survey: surveys.find(i => i.id === this.props.match.params.id),
        results: [],
        verdict: undefined,
        disabled: true,
    };

    handleChange = index => (value, a, b) => {
        const { survey, results } = this.state;
        const list = survey.list[index].list;
        results[index] = value.reduce((res, i) => [ ...res, i.value * list[i.key].value ], []);
        const disabled = survey.list.some((i, index) => i.type === 'radio' && !Array.isArray(results[index]));
        this.setState({ results, disabled });
    };

    handleSubmit = () => {
        const { survey, results } = this.state;
        const [ verdict, score ] = survey.formula(results);
        this.setState({ verdict, score });
    };

    render() {
        const { survey, disabled, score, verdict } = this.state;
        return (
            <Row id="survey-item-page">
                <div className="survey-item__title">{survey.title}</div>
                <div className="survey-item__description">{survey.description}</div>
                {
                    survey.list.map((card, index) => (
                        <div key={card.question} className="survey-item__card">
                            <div className="survey-item__question">{card.question}</div>
                            <CheckBoxList
                                className="survey-item__assumptions"
                                type={card.type}
                                list={card.list.map((i, ix) => ({
                                    key: `${ix}`,
                                    value: false,
                                    children: i.text,
                                }))}
                                onChange={this.handleChange(index)}
                            />
                            <div className="survey-item__header">{index + 1}.</div>
                        </div>
                    ))
                }
                <div className="survey-item__send">
                    <Button type="submit" name="submit" blue onClick={this.handleSubmit} disabled={disabled}>Результат</Button>
                </div>
                <Modal open={!!verdict} onClose={() => this.setState({ verdict: undefined })}>
                    <Modal.Header>Результат</Modal.Header>
                    <Modal.Body>{verdict}</Modal.Body>
                </Modal>
            </Row>
        );
    }
}
