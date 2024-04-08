import { Link, Stack, Typography, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import { useTheme } from '@mui/material/styles'
import { dateFormat } from 'atic-common-helpers/hooks/customHook'
import CalendarImg from 'asset/images/bill-info/calendar.svg'
import { useEffect, useState } from 'react'
import { Visibility } from '@mui/icons-material'
import { VisibilityOff } from '@mui/icons-material'
import Assets from 'helpers/assets.helper'

/* Text view type */
interface DetailViewType {
  fieldName: string
  fieldValue: any
  type?: string
  priceType?: string
  alignment?: string
}

const DetailView = ({
  fieldName,
  fieldValue,
  type = 'text',
  priceType = '',
  alignment = 'flex-start',
}: DetailViewType) => {
  const [visiblity, setVisibility] = useState(false)
  const [ssn, setSsn] = useState('')
  const theme = useTheme()
  useEffect(() => {
    if (type === 'ssn') {
      setSsn(fieldValue)
    }
  }, [])
  useEffect(() => {
    if (!visiblity) {
      const lastFourDigits =
        typeof fieldValue === 'string' ? fieldValue?.slice(7) : ''
      setSsn(fieldValue ? `XXX-XX-${lastFourDigits}` : '')
    } else {
      setSsn(fieldValue)
    }
  }, [visiblity, fieldValue])
  const handleSSNIconClick = () => {
    setVisibility(!visiblity)
  }
  const VIcon = Assets['visibility']
  const VOFFIcon = Assets['visibilityOff']

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '8px !important',
      }}
    >
      <Typography
        color={theme.palette.text.secondary}
        fontSize={'.875rem'}
        fontWeight={400}
        variant="inherit"
        sx={{ color: theme.palette.text.secondary }}
      >
        {fieldName}
      </Typography>
      {(() => {
        switch (type) {
          case 'price':
            return (
              <Typography
                sx={{ color: theme.palette.text.primary, fontWeight: '500' }}
              >
                <Box
                  component={'span'}
                  sx={{ color: '#888888', fontWeight: 600 }}
                >
                  $
                </Box>
                <Box
                  component={'span'}
                  sx={{
                    color:
                      priceType === 'total'
                        ? theme.palette.text.light
                        : theme.palette.text.primary,
                    fontWeight: 600,
                  }}
                >
                  {fieldValue ? fieldValue : '-'}
                </Box>
              </Typography>
            )

          case 'date':
            return (
              <Typography
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box
                  component={'img'}
                  sx={{ marginRight: '10px', height: '16px' }}
                  src={CalendarImg}
                  alt=""
                />
                {fieldValue ? dateFormat(fieldValue) : '-'}
              </Typography>
            )

          case 'address':
            return (
              <Typography
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: '500',
                  textAlign: 'right',
                }}
              >
                {fieldValue?.addressLine1} <br />
                {fieldValue?.addressLine2}, {fieldValue?.city},<br />{' '}
                {fieldValue?.state} - {fieldValue?.zip}
              </Typography>
            )
          case 'phoneNumber':
            return (
              <Typography
                sx={{ color: theme.palette.text.light, fontWeight: '500' }}
              >
                {fieldValue ? (
                  <Link href={`tel:${fieldValue}`} underline="none">
                    {fieldValue}
                  </Link>
                ) : (
                  '-'
                )}
              </Typography>
            )
          case 'ssn':
            return (
              <Typography
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: '500',
                  display: 'flex',
                  height: '1.18rem',
                }}
              >
                {fieldValue ? ssn : '-'}
                <IconButton
                  onClick={() => {
                    handleSSNIconClick()
                  }}
                >
                  {visiblity ? <VIcon /> : <VOFFIcon />}
                </IconButton>
              </Typography>
            )
          default:
            return (
              <Typography
                sx={{ color: theme.palette.text.primary, fontWeight: '500' }}
              >
                {fieldValue ? fieldValue : '-'}
              </Typography>
            )
        }
      })()}
    </Box>
  )
}

export default DetailView
