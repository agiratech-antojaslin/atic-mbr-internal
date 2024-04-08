import { mixed, addMethod } from 'yup'
import * as yup from 'yup'
import { PhoneNumberUtil } from 'google-libphonenumber'
addMethod(mixed, 'isDateValid', isDateValid)
const emailRegex = RegExp(
  /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/
)
const phoneNumberUtil = PhoneNumberUtil.getInstance()
// Custom Yup validation method for phone number validation
const phoneSchema = (isRequired: boolean) =>
  yup.string().test('phone', 'Invalid phone number', function (value) {
    if (!value) return true // Allow empty values
    if (value.length <= 3 && !isRequired) {
      return true
    }
    try {
      const phoneNumber = phoneNumberUtil.parse(value)
      return phoneNumberUtil.isValidNumber(phoneNumber)
    } catch (error) {
      return false
    }
  })

function getErrorsFromValidationError(validationError: any) {
  const FIRST_ERROR = 0
  return validationError.inner.reduce((errors: any, error: any) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    }
  }, {})
}

function handleErrorMeg(msg: string, schema: any) {
  try {
    schema.validateSync(msg, { abortEarly: false })
    return {}
  } catch (error) {
    return getErrorsFromValidationError(error)
  }
}

function isDateValid(msg: string) {
  return mixed().test('isDateValid', msg, function (value: any) {
    value = parseInt(value, 10)
    if (!value || isNaN(value)) return false
    const isValid = new Date(value).getTime() > 0
    return isValid
  })
}

const otpRegex = RegExp(/^\d{6}$/)
//driver verification
export const driverVerificationSchema = yup.object().shape({
  mobile: phoneSchema(true).required('Phone Number is required'),
})

export function driverVerficationValidation(values: any) {
  return handleErrorMeg(values, driverVerificationSchema)
}

export const driverOtpSchema = yup.object().shape({
  mobile: phoneSchema(true).required('Phone Number is required'),
  otp: yup.string().matches(otpRegex, 'Invalid OTP').required('OTP required'),
})

export function driverOtpValidation(values: any) {
  return handleErrorMeg(values, driverOtpSchema)
}

//driver email verification
export const driverEmailVerificationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, 'Invalid email id')
    .required('Email id is required'),
})

export function driverEmailValidation(values: any) {
  return handleErrorMeg(values, driverEmailVerificationSchema)
}
