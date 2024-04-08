import { mixed, addMethod } from 'yup'
import * as yup from 'yup'
import { PhoneNumberUtil } from 'google-libphonenumber'

addMethod(mixed, 'isDateValid', isDateValid)
const phoneNumberUtil = PhoneNumberUtil.getInstance()
// Custom Yup validation method for phone number validation

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

const emailRegex = RegExp(
  /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/
)

const passwordPattern =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,16})$/

const ClaimRegex = /^[0-9-]+$/

export function AddMasterDataValidation(values: any) {
  return handleErrorMeg(values, CreateAddMasterDataSchema)
}

const CreateAddMasterDataSchema = yup.object().shape({
  name: yup
    .string()
    .max(50, 'Max 50 Characters')
    .required('Name is Required')
    .nullable(),
  // type: yup.object().required('Type is Required').nullable(),
  type: yup.object().required('Type is Required').typeError('Type is Required'),
})

export function LoginValidation(values: any) {
  return handleErrorMeg(values, LoginSchema)
}

export function RegistrationValidation(values: any) {
  return handleErrorMeg(values, RegistrationSchema)
}

export const RegistrationSchema = yup.object().shape({
  full_name: yup
    .string()
    .trim()
    .max(50, 'Max 50 Characters')
    .required('Full Name is Required'),
  email: yup
    .string()
    .max(50, 'Max 50 Characters')
    .matches(emailRegex, 'Invalid Email ID')
    .required('Email ID is Required'),
  mobile_number: yup
    .string()
    .test('mobile_number', 'Invalid Mobile Number', function (value) {
      if (!value) return true // Allow empty values
      try {
        const phoneNumber = phoneNumberUtil.parse(value)
        return phoneNumberUtil.isValidNumber(phoneNumber)
      } catch (error) {
        return false
      }
    })
    .required('Mobile Number is Required'),
})

export function forgetPasswordValidation(value: any) {
  return handleErrorMeg(value, forgetPasswordSchema)
}

export const forgetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, 'Invalid Email ID')
    .required('Email ID is Required'),
})

export const LoginSchema = yup.object().shape({
  username: yup
    .string()
    //.matches(emailRegex, 'Invalid Email ID')
    .required('Username is required'),
  password: yup
    .string()
    .min(8, 'Password must be atleast 8 characters')
    .required('Password is required'),
  client: yup.string().required('Entity is required'),
})

export function GeneralInfoValidation(values: any) {
  return handleErrorMeg(values, GeneralInfoSchema)
}

export const GeneralInfoSchema = yup.object().shape({})

export function ServiceProviderValidation(values: any) {
  return handleErrorMeg(values, ServiceProviderSchema)
}

export const ServiceProviderSchema = yup.object().shape({})

export function AddressInfoValidation(values: any) {
  return handleErrorMeg(values, AddressInfoSchema)
}

export const AddressInfoSchema = yup.object().shape({})

export function AddEOBValidation(values: any) {
  return handleErrorMeg(values, AddEOBSchema)
}

export const AddEOBSchema = yup.object().shape({
  startDate: yup.date(),
  endDate: yup.date(),
  explanation: yup.number(),
  description: yup.string().required('Explanation is required'),
})
export function UserManagementValidation(values: any) {
  return handleErrorMeg(values, UserManagementSchema)
}

export const UserManagementSchema = yup.object().shape({
  accountName: yup
    .string()
    .trim()
    .max(50, 'Max 50 Characters')
    .required('Account Name is required'),
})

export function EditEOBValidation(values: any) {
  return handleErrorMeg(values, EditEOBSchema)
}

export const EditEOBSchema = yup.object().shape({})

export function ImportBillValidation(values: any) {
  return handleErrorMeg(values, ImportBillSchema)
}

export const ImportBillSchema = yup.object().shape({
  ClaimNumber: yup
    .string()
    .trim()
    .matches(ClaimRegex, 'Invalid Claim Number')
    .max(50, 'Max 50 Characters')
    .required('Claim Number is required'),
})
