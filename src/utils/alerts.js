
import { toast } from "react-toastify";



import "react-toastify/dist/ReactToastify.css";




export const errorAlert = (message) => {
  toast.error(`${message}`, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    maxToast: 3,
  });
  toast.clearWaitingQueue();
};

export const warningAlert = (message) => {
  toast.warn(`${message}`, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    maxToast: 3,
  });
  toast.clearWaitingQueue();
};

export const successAlert = (message) => {
  toast.success(`${message}`, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    maxToast: 3,
  });
  toast.clearWaitingQueue();
}; 

export const successAlertDark = (message) => {
  toast.success(`${message}`, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
    maxToast: 3,
  });
  toast.clearWaitingQueue();
};
