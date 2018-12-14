import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export default class UserItem extends Component {
  static propTypes = {
      fetchItem: PropTypes.func.isRequired,
      item: PropTypes.shape({
          name: PropTypes.string,
          avatar: PropTypes.string,
      }).isRequired,
      match: PropTypes.shape({ id: PropTypes.string }),
  };

  componentDidMount() {
      const { id } = this.props.match.params;
      this.props.fetchItem(id);
  }
  render() {
      return (<pre>{JSON.stringify(this.props.item, null, 4)}</pre>);
  }
}
