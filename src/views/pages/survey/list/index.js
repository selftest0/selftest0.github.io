import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'src/actions/survey';
import Template from './template';

const mapStateToProps = ({ auth, survey }) => ({
    me: auth.get('me').toJS(),
    list: survey.get('list').toJS(),
});

const mapDispatchToProps = dispatch => ({
    fetchList: params => dispatch(actions.list(params)),
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Template));
