import axios from 'axios';

const useAxios = async (url) => {
  const resp = await axios(url);

  return resp;
};

export default useAxios;
