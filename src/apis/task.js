import qs from 'query-string';
import axiosService from '../commons/axiosService';
import { API_ENDPOINT, } from '../constants';

const url = 'tasks';
export const getList = (params = {}) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};
export const addTask = (data) =>
  axiosService.post(`${API_ENDPOINT}/${url}`, data);

export const updateTask = (data, taskid) =>
  axiosService.put(`${API_ENDPOINT}/${url}/${taskid}`, data);

export const deleteTask = (taskid) =>
  axiosService.delete(`${API_ENDPOINT}/${url}/${taskid}`);
