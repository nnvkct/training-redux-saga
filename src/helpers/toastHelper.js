import { toast } from 'react-toastify';

export const toastError = (error) => {
  // if (typeof error === 'object' && error.message) {
  //   ({ message } = error);
  // }

  // if (message !== null && typeof message !== 'undefined' && message !== '') {
  toast.error(error);
  // }
};
