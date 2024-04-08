import { Box, Typography } from '@mui/material'
import MainContainerWrapper from 'atic-common-helpers/wrappers/MainContainerWrapper'

const Dashboard = () => {
  return (
    <>
      <MainContainerWrapper bgColor="transparent" px={1} py={4}>
        <Typography variant="h3" sx={{ px: 4, fontSize: '20px' }}>
          {'Dashboard'}
        </Typography>
      </MainContainerWrapper>
    </>
  )
}

export default Dashboard
