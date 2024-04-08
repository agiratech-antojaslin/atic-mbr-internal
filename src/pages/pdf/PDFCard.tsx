import { Card } from '@mui/material'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf'
import './pdfCard.scss'
import PDFViewerModal from './PDFView'
import { useState } from 'react'

type pdfprops = {
  filename?: string
  fileurl: any
  fileid?: any
  handleRadioChange?: any
  selectedCardId?: any
  CheckboxReq?: boolean
}

const PDFCard = (props: pdfprops) => {
  const { fileurl } = props
  const [isOpen, setOpen] = useState(false)

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  return (
    <>
      {isOpen && (
        <PDFViewerModal
          fileurl={fileurl}
          isOpen={isOpen}
          handleChange={() => setOpen(false)}
        />
      )}
      {/* <Box sx={{background:"#EEEEEE" , width:"205px",mt:"2rem",px:".8rem",pt:"0.8rem",pb:".5rem" }}> */}
      <Card className="pdf-card" onClick={() => setOpen(true)}>
        <Document file={fileurl}>
          <Page scale={1} pageNumber={1} />
        </Document>
      </Card>
      {/* <Stack direction="row" justifyContent={"space-between"}> */}
      {/* <Stack direction="row" justifyContent={"flex-start"} sx={{mt:".5rem",width:"100%"}} alignItems={"center"}> */}
      {/* <img src={pdfLogoImg} alt="pdfLogo" width={25} height={25} /> */}
      {/* <Typography variant="h2" sx={{ fontWeight: 500,letterSpacing:1, ml:1,fontSize: ".7rem",textTransform:"capitalize" }}>{filename}</Typography> */}
      {/* </Stack>
                {(userDetail.role != defaultRole.admin && CheckboxReq) &&
                <Checkbox sx={{color:theme.palette.primary.main, '& .MuiSvgIcon-root': { fontSize: 28 } }} value={fileid} name="cardSelection" checked={selectedCardId === fileid}
              onChange={handleRadioChange}/>
                }
              </Stack> */}
      {/* </Box> */}
    </>
  )
}

export default PDFCard
