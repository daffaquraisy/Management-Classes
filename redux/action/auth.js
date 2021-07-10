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
      console.log(res);
    })
    .catch((err) => {
      // show loading loader
      dispatch(setLoading(false));
      // show alert
      showMessage('Ada Kesalahan');
    });
};
