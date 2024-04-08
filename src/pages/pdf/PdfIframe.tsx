import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { IconButton, Stack } from '@mui/material'
import { pdfjs } from 'react-pdf'
import CloseIcon from '@mui/icons-material/Close'
import { useEffect, useState } from 'react'
import './pdfCard.scss'
import { Failed } from 'atic-common-helpers/helpers/toast.helper'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '60%', md: '50%', xl: '40%' },
  height: '80vh',
  bgcolor: 'background.paper',
}

type pdfprops = {
  fileurl?: any
  isOpen: boolean
  handleChange: (_: any) => void
}

export default function PDFViewerModal({
  fileurl,
  isOpen,
  handleChange,
}: pdfprops) {
  const [pdfUrl, setPdfUrl] = useState<any>(null)
  const handleClose = () => handleChange(false)
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  function blobToBase64(blob: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject // Handle errors
      reader.readAsDataURL(blob)
    })
  }

  const convertBlobToBase64 = async () => {
    try {
      const result = await blobToBase64(fileurl)
      setPdfUrl(result)
    } catch (e) {
      Failed('something went wrong')
    }
  }

  useEffect(() => {
    convertBlobToBase64()
  }, [])

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack
          direction={'row'}
          alignItems={'flex-end'}
          sx={{ width: '100%', position: 'relative' }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: '-37px',
              top: '-33px',
              borderRadius: '50%',
            }}
          >
            <CloseIcon sx={{ color: '#fff' }} />
          </IconButton>
        </Stack>
        <iframe
          src={pdfUrl}
          width={'100%'}
          height={'100%'}
          style={{ border: 'none' }}
        />
      </Box>
    </Modal>
  )
}
