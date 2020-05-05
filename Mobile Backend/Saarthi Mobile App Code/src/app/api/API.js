import {getAsValue} from '@utils';
import axiosAuth from '../axios/axiosAuth';

const API = async (endPoint, req, type = 'get') => {
  const jwt = await getAsValue('jwt');
  const baseUrl = req.baseUrl;
  console.log(`\n JWT header>>>>\n${jwt}` + '\n\n');
  const request = {
    url: endPoint,
    body: req.body,
  };
  const axios = axiosAuth(req.store, baseUrl);
  axios.defaults.headers.common['jwt'] = jwt;
  console.log(`\n\n${endPoint} API Request: ` + JSON.stringify(req.body));
  if (type == 'post') {
    return axios.post(request.url, req.body);
  } else {
    return axios.get(request.url);
  }
};

export default API;
