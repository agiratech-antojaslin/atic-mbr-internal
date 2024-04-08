import Swal from 'sweetalert2'

type sweetalertProps = {
  status?: number
  message: string
  title: string
  onSuccess?: Function
  onError?: Function
}

const SweetAlertComponent = ({
  status,
  title,
  onSuccess,
  message,
  onError,
}: sweetalertProps) => {
  return Swal.fire({
    icon: status === 200 ? 'success' : status === 400 ? 'error' : 'warning',
    title: title,
    text: message,
    allowOutsideClick: false,
  }).then(() => {
    if (onSuccess) {
      onSuccess()
    } else if (onError) {
      onError()
    }
  })
}

export default SweetAlertComponent
