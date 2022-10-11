import axios from 'axios';

const useFetch = async (url) => {
  const resp = await axios(url);

  return resp;
};

export default useFetch;
