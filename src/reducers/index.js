import { combineReducers } from 'redux';
import user from './user';
import auth from './auth';
import survey from './survey';

export default combineReducers({
    user,
    auth,
    survey,
});
