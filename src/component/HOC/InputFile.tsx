import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Failed } from 'atic-common-helpers/helpers/toast.helper'
import './Hoc.scss'
import CloseIcon from '@mui/icons-material/Close'
import PDFCard from 'pages/pdf/PDFCard'
import ImageSVG from '../../asset/images/ImageLogo.svg'
import PDFSVG from '../../asset/images/pdflogo.svg'
import { cutFileName } from 'atic-common-helpers/helpers/function.helper'
import AttachFileIcon from '@mui/icons-material/AttachFile'

type InputType = {
  handleUploadFile: any
  uploadedFile: any
  isEdit?: boolean
  title?: string
  isTitle?: boolean
  isRequired?: boolean
  multiple?: boolean
}

const InputFile = ({
  handleUploadFile,
  uploadedFile,
  isEdit = true,
  title = 'Attachment',
  isTitle = true,
  isRequired = true,
  multiple = true,
}: InputType) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<any[]>([])
  const theme = useTheme()

  useEffect(() => {
    console.log('uploadedFile', uploadedFile)
    if (uploadedFile?.length) {
      const f = [...uploadedFile]
      setImage(f)
    }
  }, [])

  const handleFileChange = async (event: any) => {
    const selectedFiles = event.target.files
    const countLimit = 5 - image.length

    if (selectedFiles) {
      const arr = [...selectedFiles, ...image]
      const selectedSize = arr.reduce((acc: any, f: any) => {
        return f.size + acc
      }, 0)
      if (selectedFiles.length > countLimit) {
        return Failed('Maximum 5 files allowed.')
      }
      if (selectedSize >= 10 * 1024 * 1024) {
        return Failed('Size of attachments cannot exceed 10MB')
      }
      for (const file of selectedFiles) {
        console.log('file.type', file.type)
        if (
          !!file.type &&
          file.type != 'image/x-png' &&
          file.type !== 'image/png' &&
          file.type != 'image/jpeg' &&
          file.type != 'application/pdf'
        ) {
          console.log('file type', file.type)
          return Failed('Please Select a Image or PDF file.')
        }
      }
      if (event.target.files.length) {
        Promise.all(Array.prototype.map.call(event.target.files, readAsDataURL))
          .then((urls) => {
            urls.map((img: any) =>
              image.push({
                path: img.file,
                id: Math.floor(Math.random() * 100000),
                file_type: img.type,
              })
            )
            setImage((pre) => [...image])
            handleUploadFile([...uploadedFile, ...event.target.files])
          })
          .catch((error) => {})
      }
    }
  }
  const readAsDataURL = (file: any) => {
    return new Promise((resolve, reject) => {
      const fr = new FileReader()
      fr.onerror = reject
      fr.onload = () => {
        resolve({
          file: fr.result,
          name: file.name,
          size: file.size,
          type: file.type,
        })
      }
      fr.readAsDataURL(file)
    })
  }

  const handleFileRemove = (i: any) => {
    const updatedFileList = image.filter((file, index) => index !== i)
    setImage(updatedFileList)
    const updatedFileupload = uploadedFile.filter(
      (file: any, index: any) => index !== i
    )
    handleUploadFile(updatedFileupload)
  }

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  console.log('uploading files...', uploadedFile)
  const downloadUrl = (url: string, name?: string) => {
    console.log('url', url)
    // if(isEdit) return;
    window.open(url, '_blank')
  }

  console.log('images', image)

  const handleRemoveButton = (e: any, i: any) => {
    e.stopPropagation()
    handleFileRemove(i)
  }
  return (
    <>
      <Box width={'100%'}>
        {isTitle && (
          <>
            <Typography variant="h3" sx={{ fontSize: '20px', color: 'black' }}>
              {title}
              {isRequired && <span style={{ color: 'red' }}>*</span>}
            </Typography>
            {isEdit && (
              <Typography variant="h6" pt={1} sx={{ opacity: '0.8' }}>
                Image or PDF files only
              </Typography>
            )}
          </>
        )}
        <Box width={'100%'} sx={{ mt: 1 }}>
          {isEdit && (
            <>
              <Typography
                sx={{
                  color:
                    !(image?.length >= 5) && isEdit
                      ? theme.palette.primary.primary700
                      : '#ccc',
                  cursor: 'pointer',
                }}
                onClick={
                  !(image?.length >= 5) && isEdit ? handleFileUpload : () => {}
                }
                // disabled={(!(image.length >= 5) && isEdit) ? false : true}
              >
                <AttachFileIcon sx={{ color: 'black', fontSize: '15px' }} />
                Attach File
              </Typography>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="application/pdf,image/x-png,image/jpeg"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </>
          )}
          <Box className={isEdit ? 'InputField_container' : 'isEdit'}>
            <>
              {!!image.length &&
                image.map((img: any, index: any) => {
                  return (
                    <>
                      <Box
                        sx={{
                          border: '1px solid #ccc',
                          borderRadius: '5px',
                          cursor: 'pointer',
                        }}
                        p={0.5}
                        width={'100%'}
                        onClick={() =>
                          downloadUrl(
                            img?.id
                              ? URL.createObjectURL(uploadedFile[index])
                              : `${process.env.REACT_APP_IMG_URL}${img?.path}`
                          )
                        }
                      >
                        <Stack
                          direction={'row'}
                          height={'100%'}
                          justifyContent={
                            isEdit ? 'space-between' : 'flex-start'
                          }
                          alignItems={'center'}
                        >
                          <img
                            src={
                              img?.file_type === 'pdf' ||
                              img?.file_type === 'application/pdf'
                                ? PDFSVG
                                : ImageSVG
                            }
                            alt="img"
                            style={{
                              height: '1.5rem',
                              width: '1.5rem',
                              objectFit: 'contain',
                            }}
                          />
                          <Typography variant="h5" ml={isEdit ? 0 : 2}>
                            {img?.id
                              ? cutFileName(uploadedFile[index]?.name, 10, 5, 5)
                              : cutFileName(img?.path?.substring(1), 10, 5, 5)}
                          </Typography>
                          {isEdit && (
                            <IconButton
                              disableTouchRipple
                              sx={{
                                width: '15px',
                                height: '15px',
                                '&:hover': {
                                  backgroundColor:
                                    theme.palette.primary.primary700,
                                },
                                backgroundColor:
                                  theme.palette.primary.primary700,
                                borderRadius: '50%',
                                opacity: 0.8,
                                color: '#ef5350',
                                zIndex: 1000,
                              }}
                              disableRipple
                              disableFocusRipple
                              onClick={(e) => handleRemoveButton(e, index)}
                            >
                              <CloseIcon
                                sx={{
                                  color: '#ffffff',
                                  fontSize: '12px',
                                }}
                              />
                            </IconButton>
                          )}
                        </Stack>
                      </Box>
                    </>
                  )
                })}

              {/* {(!(image.length >= 5) && isEdit) &&
              < Box sx={{ border: "1px dashed #ccc"}} p={1} width={"10rem"} height={"10rem"}>
                <Stack direction={"row"} sx={{ backgroundColor: "rgba(244, 244, 246, 1)" }} height={"100%"} justifyContent={"center"} alignItems={"center"} >
                  <IconButton sx={{ px: 1, borderRadius: "24px", opacity: 0.8, backgroundColor: "rgba(204, 204, 204, 1)", color: "white" }} disableRipple disableFocusRipple onClick={handleFileUpload} >
                    <AddIcon />
                  </IconButton>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple={multiple}
                    accept="application/pdf,image/x-png,image/jpeg"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </Stack>
              </Box> */}
              {/* } */}
            </>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default InputFile
