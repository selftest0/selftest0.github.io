import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'src/actions/survey';
import Template from './template';

const mapStateToProps = ({ survey }) => ({
    item: survey.get('item').toJS(),
});
const mapDispatchToProps = dispatch => ({
    fetchItem: id => dispatch(actions.item(id)),
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Template));
