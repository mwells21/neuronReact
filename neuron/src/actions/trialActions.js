import axios from 'axios';
import { GET_TRIALS, TRIALS_LOADING } from './types';

export const getTrials= () => dispatch => {
    dispatch(setTrialsLoading());
    axios.get('/api/trials').then(res =>
      dispatch({
        type: GET_TRIALS,
        payload: res.data
      })
    );
  };

  export const setTrialsLoading = () => {
    return {
      type: TRIALS_LOADING
    };
  };