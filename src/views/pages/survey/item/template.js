import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';


export default class SurveyItem extends Component {
  static propTypes = {
      fetchItem: PropTypes.func.isRequired,

      item: PropTypes.shape({
          title: PropTypes.string,
          content: PropTypes.string,
      }).isRequired,
      match: PropTypes.shape({ id: PropTypes.string }),
  };

  componentDidMount() {
      const { id } = this.props.match.params;
      this.props.fetchItem(id);
  }

  render() {
      return (
          <div className="survey-item-page">
              <pre>{JSON.stringify(this.props.item, null, 4)}</pre>
          </div>
      );
  }
}
