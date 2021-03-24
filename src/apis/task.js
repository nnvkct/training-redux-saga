import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'taskss';
export const getList = () => axiosService.get(`${API_ENDPOINT}/${url}`);
