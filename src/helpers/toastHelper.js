import { toast, } from 'react-toastify';

export const toastError = (error) => {
  let message = null;
  if (typeof error === 'object' && error.message) {
    ({ message, } = error);
  }

  if (message !== null && typeof message !== 'undefined' && message !== '') {
    // console.log('typeof error: ', JSON.stringify(error));
    toast.error(message);
  }
};
