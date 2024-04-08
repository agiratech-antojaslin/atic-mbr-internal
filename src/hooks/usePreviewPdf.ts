import { useEffect, useState } from 'react'
import axios from 'axios'

export const usePreviewPdf = (billNumber: string) => {
  const [PDF, setPDF] = useState(null)
  const [pdfOpen, setOpen] = useState(false)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    if (billNumber) {
      setLoading(true)
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_END_URL}pdf/doc`,
        data: { billNumber },
        responseType: 'blob',
      })
        .then((res) => {
          setPDF(res.data)
          setOpen(true)
          setLoading(false)
        })
        .catch((error) => {
          console.error('Error fetching PDF', error)
          setLoading(false)
        })
    } else {
      setPDF(null)
    }
  }, [billNumber])

  return { PDF, pdfOpen, isLoading, setOpen }
}
