import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Button, Card, IconButton, Stack } from '@mui/material'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Download } from '@mui/icons-material'
import './pdfCard.scss'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '60%', md: '50%', lg: '35%' },
  height: '90vh',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  p: 4,
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
  const handleClose = () => handleChange(false)
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  // function onDocumentLoadSuccess({ numPages }: any) {
  //   setNumPages(numPages);
  // }
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages)
    setPageNumber(1)
  }
  const handlenextpage = () => {
    setPageNumber((pre) => pre + 1)
  }

  const handleprepage = () => {
    setPageNumber((pre) => pre - 1)
  }

  const handleDownload = () => {
    window.open(fileurl, '_blank')
  }
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {/* <Typography variant="h6" component="h2" textAlign={'end'}> */}
        {!!numPages && (
          <Stack
            direction={'row'}
            justifyContent={'flex-end'}
            alignItems={'center'}
            sx={{ width: '100%' }}
          >
            <IconButton onClick={handleprepage} disabled={pageNumber <= 1}>
              <ArrowBackIosNewIcon />
            </IconButton>
            {pageNumber} / {numPages}
            <IconButton
              onClick={handlenextpage}
              disabled={pageNumber == numPages}
            >
              <ArrowForwardIosIcon />
            </IconButton>
            <IconButton onClick={handleDownload}>
              <Download />
            </IconButton>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
        )}
        {/* </Typography> */}
        <Card className="pdfviewer_card">
          <Document file={fileurl} onLoadSuccess={onDocumentLoadSuccess}>
            <Page scale={1} pageNumber={pageNumber} renderTextLayer={false} />
          </Document>
        </Card>
      </Box>
    </Modal>
  )
}
