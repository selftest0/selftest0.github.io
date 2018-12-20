import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'src/views/_blocks';
import './styles.scss';


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
      return (
          <div className="survey-profile">
              {/*<pre>{JSON.stringify(me, null, 4)}</pre>*/}
              <img className="survey-profile__picture" src={me.picture} />
              <Input className="survey-profile__name" value={me.name} readOnly />
              <Input className="survey-profile__email" value={me.email} readOnly />
          </div>
      )
  }
}
