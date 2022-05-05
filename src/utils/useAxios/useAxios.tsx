import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = 'https://dummyapi.io/data/v1/';
axios.defaults.headers.common['app-id'] = '6271d06165b978589a0fa9a1';

const useAxios = (params: AxiosRequestConfig) => {
  const { url, method, headers = null } = params;
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.request(params);
      setResponse(res.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [method, url, headers]);

  return { response, error, loading };
};

export default useAxios;
