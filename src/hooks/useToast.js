import { toast } from 'react-toastify';

const toastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

const useToast = () => {

  const toastInfo = (message) => toast.info(`${message}`, toastOptions)
  const toastSuccess = (message) => toast.success(`${message}`, toastOptions)
  const toastWarn = (message) => toast.warn(`${message}`, toastOptions)
  const toastError = (message) => toast.error(`${message}`, toastOptions)
  const toastNotify = (message) => toast(`${message}`, toastOptions)

  return {
    toastInfo,
    toastSuccess,
    toastWarn,
    toastError,
    toastNotify
  }
}

export { useToast };