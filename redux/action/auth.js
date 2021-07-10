import Axios from 'axios';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';

const API_HOST = {
  url: 'https://test-api-campus.herokuapp.com/api/v1',
};

export const signUpAction = (dataRegister, navigation) => (dispatch) => {
  // post through api
  Axios.post(`${API_HOST.url}/signup`, dataRegister)
    .then((res) => {
      const token = `${res.data.toke_type} ${res.data.token}`;
      const profile = res.data;

      // save token
      storeData('token', {
        value: token,
      });

      // save user data
      storeData('userProfile', profile);

      navigation.reset({index: 0, routes: [{name: 'Home'}]});

      // show loading loader
      dispatch(setLoading(false));
    })
    .catch((err) => {
      // show loading loader
      dispatch(setLoading(false));
      // show alert
      showMessage('Registration fail, please try again !');
    });
};

export const signInAction = (form, navigation) => (dispatch) => {
  dispatch(setLoading(true));

  Axios.post(`${API_HOST.url}/login`, form)
    .then((res) => {
      const token = `${res.data.toke_type} ${res.data.token}`;
      const profile = res.data;

      dispatch(setLoading(false));

      // store to async
      storeData('token', {value: token});
      storeData('userProfile', profile);

      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    })
    .catch((err) => {
      dispatch(setLoading(false));

      showMessage('Login fail, please try again !');
    });
};
