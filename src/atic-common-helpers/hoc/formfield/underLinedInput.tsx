import React, { useEffect, useState } from 'react'

const UnderLinedInputField = ({
  value = '',
  handleChange,
  type = 'money',
  name,
}: any) => {
  const [inputValue, setInputValue] = useState(value)
  console.log('input-value', value)

  useEffect(() => {
    setInputValue(value) // Update the input value state when the value prop changes
  }, [value])
  const inputStyle = {
    border: 'none',
    borderBottom: '1px solid #A1A1A1', // Underline style
    outline: 'none', // Remove outline
    boxShadow: 'none', // Remove box shadow
    borderRadius: '0', // Remove border radius
    width: '5rem',
    // Add any other specific styles you need
  }

  let displayValue = inputValue
  if (type === 'money' && !inputValue.startsWith('$')) {
    displayValue = `$${inputValue}`
  } else {
    displayValue = inputValue
  }

  console.log(displayValue)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value
    if (type === 'money') {
      // Limiting the input to eight characters
      newValue = newValue.slice(0, 8)
      // Allowing only numbers and a single decimal point
      newValue = newValue.replace(/[^0-9.]/g, '')

      // Ensure only one decimal point
      const decimalCount = newValue.split('.').length - 1
      if (decimalCount > 1) {
        const parts = newValue.split('.')
        newValue = `${parts[0]}.${parts[1]}`
      }

      // Limiting to two decimal places
      const parts = newValue.split('.')
      if (parts[1] && parts[1].length > 2) {
        parts[1] = parts[1].slice(0, 2)
        newValue = `${parts[0]}.${parts[1]}`
      }
    } else {
      newValue = newValue.slice(0, 10)
      newValue = newValue.replace(/[^0-9/]/g, '')

      // Insert slashes at appropriate positions
      if (newValue.length > 2 && newValue.indexOf('/') === -1) {
        newValue = `${newValue.slice(0, 2)}/${newValue.slice(2)}`
      }
      if (newValue.length > 5 && newValue.indexOf('/', 3) === -1) {
        newValue = `${newValue.slice(0, 5)}/${newValue.slice(5)}`
      }
      if (newValue.length > 10) {
        newValue = newValue.slice(0, 10)
      }
    }
    setInputValue(newValue)
  }

  const handleOnBlurSave = (e: any) => {
    console.log('onBlur', inputValue)
    handleChange(e)
  }

  console.log('displayValue', displayValue)

  return (
    <input
      type="text"
      style={inputStyle}
      value={displayValue}
      name={name}
      onChange={handleInputChange}
      onBlur={(e: any) => handleOnBlurSave(e)}
    />
  )
}

export default UnderLinedInputField
