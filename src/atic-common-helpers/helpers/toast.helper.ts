import { toast } from 'react-toastify'
import { Toast } from 'react-toastify/dist/types'

const options = {
  type: toast.TYPE.INFO,
  hideProgressBar: false,
  position: toast.POSITION.TOP_RIGHT,
  pauseOnHover: true,
  progress: undefined,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  autoClose: 3000,
}

export const Success = (message: string, positionCenter?: boolean) => {
  const success = { ...options, type: toast.TYPE.SUCCESS }
  return toast.success(message, {
    ...success,
    theme: 'light',
    position: positionCenter
      ? toast.POSITION.TOP_CENTER
      : toast.POSITION.TOP_RIGHT,
  })
}

export const Failed = (message: string, positionCenter?: boolean) => {
  const success = { ...options, type: toast.TYPE.ERROR }
  return toast.error(message, {
    ...success,
    theme: 'light',
    position: positionCenter
      ? toast.POSITION.TOP_CENTER
      : toast.POSITION.TOP_RIGHT,
  })
}

export const Info = (message: string) => {
  const success = { ...options, type: toast.TYPE.INFO }
  return toast.info(message, { ...success, theme: 'light' })
}

export const Warning = (message: string) => {
  const success = { ...options, type: toast.TYPE.WARNING }
  return toast.error(message, { ...success, theme: 'light' })
}

export const closeToaster = () => {
  toast.dismiss() // Close the toaster using the reference
}
