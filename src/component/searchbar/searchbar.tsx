import { Box, Button, useTheme } from '@mui/material'
import Assets from 'helpers/assets.helper'
import './searchbar.scss'
import { InputField } from 'atic-common-helpers/hoc/formfield'
import { useEffect, useState } from 'react'
import useDebounce from 'hooks/useDebounce'

interface IButton {
  label?: string
  icon?: string
  type: 'submit' | 'button' | 'reset'
  isDisabled?: boolean
  handleClick?: (searchText: string) => void
  size?: 'sm' | 'md'
  isButtonDisabled?: boolean
  placeholder?: string
}

export const Searchbar = ({
  type,
  icon = '',
  isDisabled = false,
  handleClick,
  placeholder = 'Search by Bill Number or Claim No',
  isButtonDisabled = false,
}: IButton) => {
  const theme = useTheme()
  const ButtonIcon = Assets[icon]
  const btnIcon = <ButtonIcon sx={{ fontSize: '20px' }} />
  const [isActive, setActive] = useState(false)

  const toggleClass = () => {
    setActive(!isActive)
  }

  const [inputValue, setInputValue] = useState('')

  const debouncedSearchTerm = useDebounce(inputValue, 500)

  useEffect(() => {
    if (handleClick) {
      handleClick(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])

  return (
    <Box>
      {/* <form noValidate onSubmit={handleSubmit}> */}
      <div
        className={
          isButtonDisabled || isActive
            ? 'search-wrapper active'
            : 'search-wrapper'
        }
      >
        <Button
          variant="outlined"
          type={type}
          sx={{
            color: '#344054',
            backgroundColor: '#fff',
            padding: '.775rem .875rem 0.725rem',
            border: `1px solid #D0D5DD`,
            borderRadius: `${theme.shape.borderRadius}px`,
            minWidth: '2.5rem !important',
            fontWeight: 700,
            fontSize: '1rem',
            zIndex: 1,
            '&:hover': {
              borderColor: '#D0D5DD !important',
            },
          }}
          disabled={isButtonDisabled || isDisabled}
          onClick={toggleClass}
        >
          {btnIcon}
        </Button>
        <InputField
          values={inputValue}
          fieldName={''}
          handleChange={(e: any) => {
            setInputValue(e.target.value)
          }}
          name={'search'}
          errors={''}
          size="small"
          id={'search'}
          placeholder={placeholder}
        />
      </div>
      {/* </form> */}
    </Box>
  )
}
