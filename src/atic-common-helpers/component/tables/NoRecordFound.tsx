import React from 'react'
// import Notfound from '../../asset/images/no-record-found.png'
import { Stack } from '@mui/material'

const NoRecordFound = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      paddingY={'1rem'}
      sx={{ borderBottom: '1px solid rgba(234, 236, 240, 1)' }}
    >
      {/* <img src={Notfound} alt="record-not-found" width="150px" /> */}
      No Record Found
    </Stack>
  )
}

export default NoRecordFound
