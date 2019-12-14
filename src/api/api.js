import axios from 'axios';
import {requireAuthorization, setSubmitButtonState} from '../reducers/user.js';
import history from '../history/history.js';

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onError = (err) => {
    if (err.response.status === 401) {
      history.push(`/login`);
      requireAuthorization(true);
    } else if (err.response.status === 400) {
      dispatch(setSubmitButtonState(true));
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export default createAPI;
