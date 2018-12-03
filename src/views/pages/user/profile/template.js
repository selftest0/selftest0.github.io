import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';


export default class Profile extends React.Component {
  static propTypes = {
      fetchMe: PropTypes.func.isRequired,
      me: PropTypes.shape({
          id: PropTypes.string,
          picture: PropTypes.string,
          name: PropTypes.string,
          email: PropTypes.string,
          role: PropTypes.string,
      }).isRequired,
  };

  render() {
      const { me } = this.props;
      return <pre>{JSON.stringify(me, null, 4)}</pre>;
  }
}
