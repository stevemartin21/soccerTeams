import axios from 'axios';
import { GET_ERRORS } from './types';

export const createTeam = (teamData, history) => dispatch => {

    axios.post('http://localhost:3001/create/team', teamData)
        .then(res => history.push('/dashboard'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));

}

export const createGame = (gameData, history) => dispatch => {

    axios.post('http://localhost:3001/create/game', gameData)
        .then(res => history.push('/dashboard'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
}

export const createPlayer = (playerData, history) => dispatch => {

    axios.post('http://localhost:3001/create/player', playerData)
        .then(res => history.push('/dashboard'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
}