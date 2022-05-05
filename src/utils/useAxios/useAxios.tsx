import { useState, useEffect } from 'react';
import axios from 'axios';
import { AxiosParams } from './index';

axios.defaults.baseURL = 'https://dummyapi.io/data/v1/';
axios.defaults.headers.common['app-id'] = '6271d06165b978589a0fa9a1';

const useAxios = ({
  url,
  method,
  body = null,
  headers = null,
}: AxiosParams) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    let promise;
    switch (method) {
      case 'post':
        promise = axios.post(url, JSON.parse(headers), JSON.parse(body));
        break;
      default:
        promise = axios.get(url, JSON.parse(headers));
    }

    promise
      .then((res: any) => {
        setResponse(res.data);
      })
      .catch((err: any) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { response, error, loading };
};

export default useAxios;
