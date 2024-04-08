import { ChangeEvent, useEffect, useState } from 'react'
// import DraftsIcon from "@mui/icons-material/Drafts";

// material-ui
import { useTheme } from '@mui/material/styles'
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Stack,
  Typography,
} from '@mui/material'

// assets
import Assets from 'helpers/assets.helper'
import useForm from 'atic-common-helpers/hooks/useForm'
import { LoginValidation } from 'hooks/validateRules'
import {
  InputField,
  AutoCompleteField,
  SelectField,
} from 'atic-common-helpers/hoc/formfield'
import Cookies from 'js-cookie'
import { ContainedButton } from 'component/buttons'

type AuthLoginType = {
  handleSubmitLogin: (_: any) => void
  setGlobalError: (_: string) => void
  globalError: string
  clients: { value: string | number; name: string }[]
}
const AuthLogin = ({
  handleSubmitLogin,
  setGlobalError,
  globalError,
  clients,
}: AuthLoginType) => {
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  // initial value for the login form
  const initialValues = {
    username: Cookies.get('username') || '',
    password: Cookies.get('password') || '',
    client: Cookies.get('client') || 'client',
  }

  // useForm control
  const { values, errors, handleChange, handleSubmit, setUpdateValue } =
    useForm(initialValues, handleSubmitCB, LoginValidation)

  useEffect(() => {
    setGlobalError('')
  }, [values])
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSnackbar(false)
    }, 6000)
    return () => clearTimeout(timer)
  }, [showSnackbar])

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  // handle submit in login form
  async function handleSubmitCB() {
    handleSubmitLogin(values)
  }

  return (
    <>
      <form noValidate onSubmit={handleSubmit}>
        <InputField
          values={values.username || ''}
          fieldName="Username"
          handleChange={handleChange}
          name="username"
          errors={errors.username}
          size="small"
          id="username"
          info="Enter your VM username"
        />

        <InputField
          values={values.password || ''}
          fieldName="Password"
          handleChange={handleChange}
          name="password"
          errors={errors.password}
          adorament="endAdornment"
          Icon={showPassword ? Assets.visibility : Assets.visibilityOff}
          position="end"
          type={showPassword ? 'text' : 'password'}
          handleIconClick={handleClickShowPassword}
          length={16}
          size="small"
          id="password"
          info="Enter your VM password"
        />

        <SelectField
          fieldName="Entity"
          options={clients}
          values={values.client || null}
          name="client"
          handleChange={(e: any) => {
            setUpdateValue('client', e.target.value)
          }}
          errors={errors?.client}
          isRequired={false}
        />

        {globalError && (
          <Box sx={{ mt: 1 }}>
            <FormHelperText error>{globalError}</FormHelperText>
          </Box>
        )}

        <Box sx={{ mt: 1 }}>
          <ContainedButton label="Sign in" type="submit" />
        </Box>
      </form>
    </>
  )
}

export default AuthLogin
