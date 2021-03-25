import axios from 'axios';

class AxiosService {
  constructor() {
    const instance = axios.create();
    // instance.defaults.validateStatus = true;
    instance.interceptors.response.use(this.handleSucess, this.handleError);
    this.instance = instance;
  }

  handleSucess(reponse) {
    return reponse;
  }

  handleError(error) {
    // console.log('error: ', error);
    // console.log(JSON.stringify(error));
    // console.log('errorType', typeof error);
    // console.log('error', { ...error});
    return Promise.reject(error);
  }

  get(url) {
    console.log('im rehre!!!');
    return this.instance.get(url);
  }
}

export default new AxiosService();
