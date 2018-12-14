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

    handleChange = index => (value) => {
        const { survey, results } = this.state;
        results[index] = survey.formula(value.findIndex(i => i.value));
        const disabled = results.filter(i => typeof i === 'number').length !== survey.list.length;
        this.setState({ results, disabled });
    };

    handleSubmit = () => {
        const { survey, results } = this.state;
        const verdict = survey.test(results.reduce((res, i) => res + i, 0));
        this.setState({ verdict });
    };

    render() {
        const { survey, disabled, verdict } = this.state;
        return (
            <Row id="survey-item-page">
                <div className="survey-item__title">{survey.title}</div>
                <div className="survey-item__description">
                    <ol>
                        <li>Эректильная функция <span>(вопросы 1, 2, 3, 4, 5, 15).</span></li>
                        <li>Функция оргазма <span>(вопросы 9, 10).</span></li>
                        <li>Сексуальное желание <span>(вопросы 11,12).</span></li>
                        <li>Удовлетворение половым актом <span>(вопросы 6, 7, 8).</span></li>
                        <li>Общая сексуальная удовлетворенность <span>(вопросы 13, 14).</span></li>
                    </ol>
                    Опросник МИЭФ содержит вопросы о том, как нарушения эрекции сказывались на сексуальной жизни в течение последних четырех недель.
                    Пожалуйста, ответьте на эти вопросы как можно более откровенно и определенно.
                    Если Вы не уверены в выборе ответа, пожалуйста, дайте тот ответ, который лучше всего отражает Вашу ситуацию.

                    Отвечая на эти вопросы, придерживайтесь следующих определений:
                    <ul>
                        <li>Половой акт определяется как введение полового члена во влагалище.</li>
                        <li>Сексуальные действия включают в себя половой акт, ласки, предшествующие половому акту, и мастурбацию.</li>
                        <li>Эякуляция определяется как выброс спермы из полового члена (или таковое ощущение).</li>
                        <li>Сексуальная стимуляция включает в себя такие действия, как эротические игры с сексуальной партнершей, просмотр эротических фильмов, фотографий, рисунков и т.д.</li>
                    </ul>
                </div>
                {
                    survey.list.map((card, index) => (
                        <div className="survey-item__card">
                            <div className="survey-item__question">{card.question}</div>
                            <CheckBoxList
                                className="survey-item__assumptions"
                                type={card.type}
                                list={card.assumptions.map((i, index) => ({
                                    key: index,
                                    value: false,
                                    children: i,
                                }))}
                                onChange={this.handleChange(index)}
                            />
                            <div className="survey-item__header">{index + 1}.</div>
                        </div>
                    ))
                }
                <div className="survey-item__send">
                    <Button type="submit" name="submit" blue onClick={this.handleSubmit} disabled={disabled}>Отправить</Button>
                </div>
                <Modal open={!!verdict} onClose={() => this.setState({ verdict: undefined })}>
                    <Modal.Header>Результат теста</Modal.Header>
                    <Modal.Body>{verdict}</Modal.Body>
                </Modal>
            </Row>
        );
    }
}
