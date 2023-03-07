import axios, {AxiosInstance} from 'axios';
import Config from 'react-native-config';

const $http: AxiosInstance = axios.create({
  baseURL: Config.BASE_URL,
  timeout: 20000,
  headers: {
    'content-type': 'application/json',
  },
});

const getApiCall = (
  endPoint: string,
  params: object,
  callback: (response: [object]) => void,
) => {
  $http
    .get(endPoint, params)
    .then(response => {
      console.log(
        '%c Response ',
        'color: white; background-color: #429a34',
        response,
      );
      if (response.status === 200) {
        callback(response.data);
      }
    })
    .catch(error => {
      console.log(
        '%c Error ',
        'color: white; background-color: #D33F49',
        error,
      );
    });
};

export {getApiCall, $http};
