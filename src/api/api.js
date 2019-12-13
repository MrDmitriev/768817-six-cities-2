import axios from 'axios';
import {isEmpty} from 'ramda';
import {requireAuthorization} from '../reducers/user';
import history from '../history/history';

const createAPI = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return isEmpty(response.data) ? history.push(`/offers-not-found`) : response;
  };

  const onError = (err) => {
    if (err.response.satus === 403) {
      return requireAuthorization(true);
    }

    return history.push(`/offers-not-found`);
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export default createAPI;
