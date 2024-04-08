import Swal from 'sweetalert2'

type deletealertProps = {
  onCancel?: any
  onConfirmed?: any
  title?: string
  message?: string
  confirmButtonText?: string
  data?: any
  showCancel: boolean
}

const deleteAlert = ({
  onConfirmed,
  title,
  message,
  confirmButtonText,
  data = null,
  onCancel,
  showCancel,
}: deletealertProps) => {
  return Swal.fire({
    title: title,
    html: message,
    // text: message,
    imageUrl: '/asset/images/error.png',
    confirmButtonText: confirmButtonText,
    cancelButtonText: 'No',
    showCancelButton: showCancel ? true : false,
    allowOutsideClick: false,
    customClass: 'swal-mbr',
  }).then((result) => {
    if (result.isConfirmed && onConfirmed) {
      onConfirmed(data)
    } else if (result.dismiss && onCancel) {
      onCancel()
    }
  })
}

export default deleteAlert

type successAlertProps = {
  onCancel?: any
  onConfirmed?: any
  title?: string
  message?: string
  confirmButtonText?: string
  cancelButtonText?: string
  data?: any
  showCancel: boolean
  footer?: any
  navigate: () => void
}

export const successAlert = ({
  onConfirmed,
  title,
  message,
  confirmButtonText,
  cancelButtonText,
  data = null,
  onCancel,
  showCancel,
  footer,
  navigate,
}: successAlertProps) => {
  // const navigate = useNavigate()
  // const goToBills = () => {
  //   navigate('/medical-bills')
  // }
  return Swal.fire({
    title: title,
    html: message,
    // text: message,
    imageUrl: '/asset/images/success.png',
    confirmButtonText: confirmButtonText ? confirmButtonText : 'Yes',
    cancelButtonText: cancelButtonText ? cancelButtonText : 'No',
    showCancelButton: showCancel ? true : false,
    allowOutsideClick: false,
    customClass: 'swal-mbr-success',
    footer: footer,
    didOpen: () => {
      console.log(location.pathname)
      const goToBillsLink = document.getElementById('goToBillsLink')
      if (goToBillsLink) {
        goToBillsLink.addEventListener('click', () => {
          navigate()
          Swal.close()
        })
      }
    },

    preConfirm: () => {
      return false
    },
  }).then((result) => {
    if (result.isConfirmed && onConfirmed) {
      onConfirmed(data)
    } else if (result.dismiss && onCancel) {
      onCancel()
    }
  })
}

type infoAlertProps = {
  onCancel?: any
  onConfirmed?: any
  title?: string
  message?: string
  iconUrl?: string
  data?: any
  showCancel: boolean
}

export const infoAlert = ({
  onConfirmed,
  title,
  message,
  iconUrl,
  data = null,
  onCancel,
  showCancel,
}: infoAlertProps) => {
 
  return Swal.fire({
    title: title,
    html: message,
    imageUrl: iconUrl,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
    showCancelButton: showCancel ? true : false,
    allowOutsideClick: false,
    customClass: 'swal-mbr-info',
  }).then((result) => {
    if (result.isConfirmed && onConfirmed) {
      onConfirmed(data)
    } else if (result.dismiss && onCancel) {
      onCancel()
    }
  })
}
