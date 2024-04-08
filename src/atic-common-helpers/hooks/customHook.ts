import { useState } from 'react'

import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber'

export const useSetState = (initialState: any) => {
  const [state, setData] = useState(initialState)

  const setState = (newState: any) => {
    setData((prevState: any) => ({ ...prevState, ...newState }))
  }

  return [state, setState]
}

export function parsePhoneNumber(phoneNumber: any) {
  try {
    const phoneNumberUtil = PhoneNumberUtil.getInstance()
    const parsedNumber = phoneNumberUtil.parse(phoneNumber, 'ZZ')

    if (!phoneNumberUtil.isValidNumber(parsedNumber)) {
      return null // Invalid phone number
    }

    const countryCode = parsedNumber.getCountryCode()
    const nationalNumber: any = parsedNumber.getNationalNumber()

    return {
      countryCode: `+${countryCode}`,
      mobileNumber: nationalNumber.toString(),
    }
  } catch (err) {
    return {
      countryCode: null,
      mobileNumber: null,
    }
  }
}

export function parsePhoneNumberformat(countryCode: any, mobileNumber: any) {
  try {
    const phoneNumberUtil = PhoneNumberUtil.getInstance()
    const phoneNumber = `+${countryCode}${mobileNumber}`
    const parsedNumber = phoneNumberUtil.parse(phoneNumber, 'ZZ')

    if (!phoneNumberUtil.isValidNumber(parsedNumber)) {
      return null // Invalid phone number
    }

    const formattedNumber = phoneNumberUtil.format(
      parsedNumber,
      PhoneNumberFormat.INTERNATIONAL
    )

    return formattedNumber
  } catch (error) {
    return null // Invalid phone number
  }
}

export function parsePhoneFormatNumber(phoneNumber: string) {
  try {
    const phoneNumberUtil = PhoneNumberUtil.getInstance()
    const parsedNumber = phoneNumberUtil.parse(phoneNumber, 'ZZ')

    if (!phoneNumberUtil.isValidNumber(parsedNumber)) {
      return null // Invalid phone number
    }

    const formattedNumber = phoneNumberUtil.format(
      parsedNumber,
      PhoneNumberFormat.INTERNATIONAL
    )

    return formattedNumber
  } catch (error) {
    return phoneNumber
  }
}

export const formatSsn = (value: any, isCheckNumber = true) => {
  try {
    let finalValue = ''

    let val = isCheckNumber ? value.replace(/\D/g, '') : value
    let newVal = ''
    if (val.length > 4) {
      finalValue = val
    }
    if (val.length > 3 && val.length < 6) {
      newVal += val.substr(0, 3) + '-'
      val = val.substr(3)
    }
    if (val.length > 5) {
      newVal += val.substr(0, 3) + '-'
      newVal += val.substr(3, 2) + '-'
      val = val.substr(5)
    }
    newVal += val
    finalValue = newVal.substring(0, 11)

    return finalValue
  } catch {
    return value
  }
}
export const formatLicense = (value: any) => {
  try {
    let finalValue = ''

    let val = value.replace(/\D/g, '')
    let newVal = ''
    if (val.length > 4) {
      finalValue = val
    }
    if (val.length > 3 && val.length < 7) {
      newVal += val.substr(0, 3) + ' '
      val = val.substr(3)
    }
    if (val.length > 5) {
      newVal += val.substr(0, 3) + ' '
      newVal += val.substr(3, 3) + ' '
      val = val.substr(6)
    }
    newVal += val
    finalValue = newVal.substring(0, 11)

    return finalValue
  } catch {
    return value
  }
}

export const handleKeyNumberPress = (
  event: React.KeyboardEvent<HTMLDivElement>
) => {
  const enteredKey = event.key
  if (!/^[0-9]$/.test(enteredKey)) {
    event.preventDefault()
  }
}

export const handleKeyAlphabetsPress = (
  event: React.KeyboardEvent<HTMLDivElement>
) => {
  const enteredKey = event.key
  if (!/^[a-zA-Z. ,]*$/.test(enteredKey)) {
    event.preventDefault()
  }
}

export const handleAlphanumeric = (event: any) => {
  const inputValue = event.key
  const isValidKey = /^[a-zA-Z0-9]+$/.test(inputValue)
  if (!isValidKey) {
    event.preventDefault()
  }
}

export const handleKeyDecimalPress = (event: any) => {
  // const inputValue = event.key
  // // Allow digits, a decimal point (if not already present), and specific control keys
  // console.log('Is valid: ', /^\d+(\.\d{3})?$/.test(inputValue))
  // const isValidKey =
  //   /^\d*\.{0,1}\d{0,3}$/.test(inputValue) ||
  //   (inputValue === '.' && event.target.value.indexOf('.') === -1) ||
  //   event.key === 'Backspace' ||
  //   event.key === 'Delete' ||
  //   event.key === 'ArrowLeft' ||
  //   event.key === 'ArrowRight' ||
  //   event.key === 'Home' ||
  //   event.key === 'End'

  // if (!isValidKey) {
  //   event.preventDefault()
  // }

  // Check if key is one of the control keys
  const controlKeys = [
    'Backspace',
    'Delete',
    'ArrowLeft',
    'ArrowRight',
    'Home',
    'End',
  ]
  if (controlKeys.includes(event.key)) {
    return // Allow control keys
  }

  // Simulate what the value of the input would be if we allow the key press
  const { value, selectionStart, selectionEnd } = event.target
  const futureValue =
    value.slice(0, selectionStart) + event.key + value.slice(selectionEnd)

  // Check if the future value is either a valid number with up to three decimal places,
  // a valid partial input (like ".", "0.", or "123."), or an integer
  const isValidValue =
    /^\d*\.{0,1}\d{0,3}$/.test(futureValue) || /^\d+$/.test(futureValue)

  if (!isValidValue) {
    event.preventDefault() // Prevent the key press if the future value would be invalid
  }
}

export function dateFormat(dateString: any) {
  const date = new Date(dateString)
  const formattedDate = date
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/(\d+)\/(\d+)\/(\d+)/, '$1/$2/$3')
  return formattedDate
}

export function filterDateFormat(dateString: any) {
  const date = new Date(dateString)
  const formattedDate = date
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2')
  return formattedDate
}

export function dateTimeFormat(dateString: any) {
  const date = new Date(dateString)
  const formattedDate = date
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
    .replace(/(\d+)\/(\d+)\/(\d+), (\d+):(\d+):(\d+)/, '$1-$2-$3 $4:$5:$6')
  return formattedDate
}

export function getFormatedDisplayTime(time: any) {
  try {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(time))
  } catch (error) {
    return null
  }
}

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function trimStringsInObject(
  obj: Record<string, any>
): Record<string, any> {
  // Base case: if the input is not an object, return it as is
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  // Initialize a new object to store the trimmed values
  const trimmedObj: Record<string, any> = {}

  // Iterate through the keys of the input object
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]

      // Check if the value is a string, and if so, trim it
      if (typeof value === 'string') {
        trimmedObj[key] = value.trim()
      } else {
        // If the value is not a string, leave it unchanged
        trimmedObj[key] = value
      }
    }
  }

  return trimmedObj
}

export function sortArrayByProperty(property: string) {
  return function (a: { [key: string]: string }, b: { [key: string]: string }) {
    if (a[property] < b[property]) {
      return -1
    }
    if (a[property] > b[property]) {
      return 1
    }
    return 0
  }
}

export function ReceivedDateConverter(dateStr: string): string {
  // Split the date string by "-"
  const parts: string[] = dateStr.split('-')

  // Reorder the parts to the "mm/dd/yyyy" format
  const formattedDate: string = `${parts[1]}/${parts[2]}/${parts[0]}`

  return formattedDate
}

export function updatedDateConverter(dateStr: string): string {
  const date = new Date(dateStr)

  // Format the parts to the "mm/dd/yyyy" format
  const formattedDate = `${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${date
    .getDate()
    .toString()
    .padStart(2, '0')}/${date.getFullYear()}`

  return formattedDate
}

export function isValidObject(obj: any): any {
  if (Object.values(obj).length > 0) {
    return obj
  } else {
    return null
  }
}

export function padNumber(number: any) {
  return number < 10 ? '0' + (number - 1) : number.toString() - 1
}
