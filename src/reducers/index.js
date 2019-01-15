import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import gameReducer from './gameReducer';
import teamReducer from './teamReducer';
import playerReducer from './playerReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    game: gameReducer,
    team: teamReducer,
    player: playerReducer
})