import axios from 'axios';
import {requireAuthorization, setSubmitButtonState} from '../reducers/user.js';
import {ResponseCodes} from 'c:/Users/extre/AppData/Local/Temp/Temp1_68889.zip/project-68889/src/constants/constants.js';

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
    const errStatus = err.response.status;
    if (errStatus === ResponseCodes.NO_ACCESS) {
      dispatch(requireAuthorization(true));
    } else if (errStatus === ResponseCodes.BAD_REQUEST) {
      dispatch(setSubmitButtonState(true));
    }
    return false;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export default createAPI;
