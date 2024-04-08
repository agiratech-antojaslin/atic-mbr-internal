import { Box, Button, Typography, useTheme, Tooltip } from '@mui/material'
import theme from 'asset/themes'
import Assets from 'helpers/assets.helper'
import { useEffect, useState } from 'react'

interface ButtonTheme {
  color: string
  borderColor?: string
  backgroundColor: string
  fontWeight: number
}

interface IButton {
  label?: string
  icon?: string
  type: 'submit' | 'button' | 'reset'
  isDisabled?: boolean
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  size?: 'sm' | 'md'
  mode?: 'reset' | 'save' | 'none'
  title?: string
}

export const ContainedIconButton = ({
  label,
  type,
  icon = '',
  size = 'sm',
  isDisabled,
  handleClick,
}: IButton) => {
  const theme = useTheme()
  const ButtonIcon = Assets[icon]
  const btnIcon = <ButtonIcon sx={{ fontSize: '20px' }} />
  return (
    <Box>
      <Button
        variant="contained"
        type={type}
        sx={{
          backgroundColor: theme.palette.text.light,
          padding: size === 'md' ? '.75rem 1rem' : '.5rem 1rem',
          borderRadius: `${theme.shape.borderRadius}px`,
          '&:hover': {
            backgroundColor: theme.palette.text.light,
          },
          '&.Mui-disabled': {
            backgroundColor: 'rgba(0, 73, 143, 90%) !important',
            color: 'rgba(255, 255, 255, 50%) !important',
          },
        }}
        onClick={handleClick}
        disabled={isDisabled}
      >
        {btnIcon}
        <Typography
          sx={{
            ml: 1,
            fontWeight: 600,
            fontSize: '.875rem',
            color: theme.palette.common.white,
          }}
        >
          {label}
        </Typography>
      </Button>
    </Box>
  )
}

export const ContainedButton = ({
  label,
  type,
  icon = '',
  isDisabled = false,
  handleClick,
  size = 'md',
}: IButton) => {
  const theme = useTheme()

  return (
    <Box>
      <Button
        variant="contained"
        className="btn-contained"
        type={type}
        disabled={isDisabled}
        sx={{
          color: '#fff',
          backgroundColor: theme.palette.text.light,
          padding: '.6rem 1.5rem',
          borderRadius: `${theme.shape.borderRadius}px`,
          width: '100%',
          fontWeight: label === 'Process' ? 500 : 700,
          fontSize: size === 'sm' ? '.875rem' : '1rem',
          '&:hover': {
            backgroundColor: '#00498f',
          },
          '&.Mui-disabled': {
            backgroundColor: 'rgba(0, 73, 143, 90%) !important',
            color: 'rgba(255, 255, 255, 50%) !important',
          },
        }}
        onClick={handleClick}
      >
        {label}
      </Button>
    </Box>
  )
}

export const ContainedSecondaryButton = ({
  label,
  type,
  icon = '',
  isDisabled = false,
  handleClick,
  size = 'md',
}: IButton) => {
  const theme = useTheme()
  return (
    <Box>
      <Button
        variant="contained"
        type={type}
        disabled={isDisabled}
        sx={{
          color: theme.palette.text.light,
          backgroundColor: theme.palette.primary.light,
          padding: '.6rem 1.5rem',
          borderRadius: `${theme.shape.borderRadius}px`,
          width: '100%',
          fontWeight: 700,
          fontSize: size === 'sm' ? '.875rem' : '1rem',
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
          },
        }}
        onClick={handleClick}
      >
        {label}
      </Button>
    </Box>
  )
}

export const OutlinedButton = ({
  label,
  type,
  icon = '',
  isDisabled = false,
  handleClick,
  mode = 'none',
  size = 'md',
}: IButton) => {
  const theme = useTheme()
  const [buttonTheme, setButtonTheme] = useState<ButtonTheme>({
    color: theme.palette.text.primary,
    borderColor: theme.palette.secondary.secondary200,
    backgroundColor: theme.palette.common.white,
    fontWeight: 700,
  })
  useEffect(() => {
    console.log('Mode: ', mode, theme.palette.text.light)
    if (mode === 'reset') {
      setButtonTheme({
        color: 'rgba(0, 73, 143, 1)',
        borderColor: 'rgba(0, 73, 143, 1)',
        backgroundColor: theme.palette.common.white,
        fontWeight: 700,
      })
    } else if (mode === 'save') {
      setButtonTheme({
        color: theme.palette.text.light,
        borderColor: theme.palette.text.light,
        backgroundColor: 'transparent',
        fontWeight: 500,
      })
    } else {
      setButtonTheme({
        color: theme.palette.text.primary,
        borderColor: '#D0D5DD',
        backgroundColor: theme.palette.common.white,
        fontWeight: 700,
      })
    }
  }, [])
  return (
    <Box>
      <Button
        variant="outlined"
        type={type}
        sx={{
          color: buttonTheme.color,
          backgroundColor: buttonTheme.backgroundColor,
          padding: '.6rem 1.5rem',
          border: `1px solid ${buttonTheme.borderColor}`,
          borderRadius: `${theme.shape.borderRadius}px`,
          width: '100%',
          fontWeight: buttonTheme.fontWeight,
          fontSize: size === 'sm' ? '.875rem' : '1rem',
          '&:hover': {
            borderColor: buttonTheme.borderColor,
          },
        }}
        disabled={isDisabled}
        onClick={handleClick}
      >
        {label}
      </Button>
    </Box>
  )
}

export const TextButton = ({
  label,
  type,
  icon = '',
  isDisabled = false,
  handleClick,
}: IButton) => {
  const theme = useTheme()
  return (
    <Box>
      <Button
        variant="text"
        type={type}
        sx={{
          color: '#344054',
          padding: '.6rem 1.5rem',
          width: '100%',
          fontWeight: 500,
          fontSize: '16px',
        }}
        disabled={isDisabled}
        onClick={handleClick}
      >
        {label}
      </Button>
    </Box>
  )
}

export const OutlinedIconButton = ({
  label,
  type,
  icon = '',
  isDisabled = false,
  handleClick,
}: IButton) => {
  const theme = useTheme()
  const ButtonIcon = Assets[icon]
  const btnIcon = <ButtonIcon sx={{ fontSize: '20px' }} />
  return (
    <Box>
      <Button
        variant="outlined"
        disableFocusRipple
        type={type}
        sx={{
          color: '#344054',
          backgroundColor: '#fff',
          padding: '.75rem .875rem !important',
          border: `1px solid #D0D5DD`,
          borderRadius: `${theme.shape.borderRadius}px`,
          width: '100%',
          fontWeight: 700,
          fontSize: '1rem',
          minWidth: '5.5rem !important',
          '&:hover': {
            borderColor: '#D0D5DD !important',
          },
        }}
        disabled={isDisabled}
        onClick={handleClick}
      >
        {btnIcon}
        <Typography
          sx={{
            ml: 1,
            fontWeight: 600,
            fontSize: '.875rem',
            color: theme.palette.text.primary,
          }}
        >
          {label}
        </Typography>
      </Button>
    </Box>
  )
}

export const IconOnlyButton = ({
  type,
  icon = '',
  isDisabled = false,
  handleClick,
  title,
}: IButton) => {
  const theme = useTheme()
  const ButtonIcon = Assets[icon]
  const btnIcon = <ButtonIcon sx={{ fontSize: '20px' }} />
  return (
    <Box>
      <Tooltip title={title} placement="top">
        <Button
          variant="outlined"
          type={type}
          sx={{
            color: '#344054',
            backgroundColor: '#fff',
            padding: '.45rem .45rem !important',
            border: `1px solid #4C89BD`,
            borderRadius: `${theme.shape.borderRadius}px`,
            fontWeight: 700,
            minWidth: '1.5rem !important',
            fontSize: '1rem',
            '&:hover': {
              borderColor: '#00498f !important',
            },
          }}
          disabled={isDisabled}
          onClick={handleClick}
        >
          {btnIcon}
        </Button>
      </Tooltip>
    </Box>
  )
}

export const AddEOBButton = ({
  label,
  type,
  icon = '',
  isDisabled = false,
  handleClick,
}: IButton) => {
  const theme = useTheme()
  return (
    <>
      <Button
        variant="text"
        type={type}
        sx={{
          color: theme.palette.text.light,
          backgroundColor: theme.palette.primary.light,
          padding: '.3rem 1.5rem',
          width: '150px',
          fontWeight: 500,
          fontSize: '.75rem',
          border: 'none',
          borderRadius: '30px',
          '&:hover': {
            color: theme.palette.text.light,
            backgroundColor: theme.palette.primary.light,
          },
        }}
        disabled={isDisabled}
        onClick={handleClick}
      >
        {'+ '}
        {label}
      </Button>
    </>
  )
}
