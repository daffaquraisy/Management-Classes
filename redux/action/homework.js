import Axios from 'axios';
import {getData} from '../../utils';

const API_HOST = {
  url: 'https://test-api-campus.herokuapp.com/api/v1',
};

export const getHomeworksData = () => (dispatch) => {
  getData('userProfile')
    .then((res) => {
      //   console.log(res.data.toke_type);
      //   console.log(res.data.token);
      Axios.get(`${API_HOST.url}/homework/quick`, {
        headers: {Authorization: `${res.data.toke_type} ${res.data.token}`},
      })
        .then((res) => {
          console.log(res);
          dispatch({type: 'SET_HOMEWORK', value: res.data.data.data});
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
