import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Box, Card } from '@mui/material'
import { grey } from '@mui/material/colors'

type DynamicTabProps = {
  TabData: any
}
const DynamicTab = ({ TabData }: DynamicTabProps) => {
  const [value, setValue] = React.useState<number>(0)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <>
      <Tabs
        value={value}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons={false}
      >
        {TabData.map((tab: any, i: number) => {
          return (
            <Tab
              sx={{ fontSize: 16, py: 2, fontWeight: 550, color: grey[900] }}
              label={tab.label}
              key={i}
            />
          )
        })}
      </Tabs>

      <Card
        sx={{
          borderTop: 1,
          borderColor: 'divider',
          borderTopLeftRadius: '0px !important',
          borderTopRightRadius: '0px !important',
          // maxHeight: 'calc(100vh - 91px - 40px - 92px - 56px)',
          // overflowY: 'auto',
          // '&::-webkit-scrollbar': {
          //   width: '0.4em',
          // },
          // '&::-webkit-scrollbar-track': {
          //   '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
          // },
          // '&::-webkit-scrollbar-thumb': {
          //   backgroundColor: 'rgb(203, 200, 200)',
          //   borderRadius: '16px',
          // },
        }}
      >
        <Box
          sx={{
            maxHeight:
              TabData[value].label !== 'CPT Info'
                ? 'calc(100vh - 91px - 40px - 92px - 56px)'
                : 'none',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              width: '0.4em',
            },
            '&::-webkit-scrollbar-track': {
              '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgb(203, 200, 200)',
              borderRadius: '16px',
            },
          }}
          pt={TabData[value].label !== 'CPT Info' ? 2 : 1}
          pb={2}
          pl={2}
          pr={2}
        >
          {TabData[value].component()}
        </Box>
      </Card>
    </>
  )
}

export default DynamicTab
