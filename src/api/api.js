import axios from 'axios';
import {isEmpty} from 'ramda';
import {requireAuthorization} from '../reducers/user';
import history from '../history/history.js';

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
    // if (err.response.satus === 403) {
    //   return requireAuthorization(true);
    // }

    switch (err.response.satus) {
      case 403:
        return requireAuthorization(true);
      case 401:
        console.log(`401 status`);
        return history.push(`/login`);
    }

    return err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export default createAPI;
