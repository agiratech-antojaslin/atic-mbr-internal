import React, { useEffect, useState } from 'react'
import {
  Box,
  FormHelperText,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import OtpInput from 'react-otp-input'
import './form.scss'
import { useTheme } from '@mui/material'
import { commonService } from 'atic-common-helpers/helpers/common.service'
import SweetAlertComponent from 'component/HOC/Alert'
import Loader from 'component/ui-component/Loader'
import { Failed, Success } from 'atic-common-helpers/helpers/toast.helper'
import { ContainedButton, OutlinedButton } from 'component/buttons'
import { errorMessage } from 'atic-common-helpers/helpers/function.helper'

type AuthVerifyEmailType = {
  handleSubmitVerify: (_: any) => void
  setError: (_: string) => void
  error: string
  url: string
  handleCancel?: (_: any) => void
}
function AuthOTP({
  handleSubmitVerify,
  setError,
  error,
  url,
  handleCancel,
}: AuthVerifyEmailType) {
  const theme = useTheme()
  const [otp, setOtp] = useState<string>('')
  const [isResendDisabled, setIsResendDisabled] = useState(true)
  const [isDisabled, setIsDisabled] = useState(true)
  const [countdown, setCountdown] = useState(60)
  const [isLoading, setLoading] = useState(false)
  let timer: any

  useEffect(() => {
    startCountdown()
    return () => clearInterval(timer)
  }, [])

  const startCountdown = () => {
    timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1)
    }, 1000)
    setTimeout(() => {
      clearInterval(timer)
      setIsResendDisabled(false)
      setCountdown(0)
    }, 60000)
  }

  useEffect(() => {
    setError('')
    if (otp.length === 6) {
      setIsDisabled(false)
      handleSubmit()
    } else {
      setIsDisabled(true)
    }
  }, [otp])

  async function handleSubmit(e?: any) {
    e?.preventDefault()
    const user = JSON.parse(localStorage.getItem('at-docmatic-user')!)
    const formData = {
      userName: user.sAMAccountName,
      otp: otp,
    }
    handleSubmitVerify(formData)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const enteredKey = event.key
    if (!/^[0-9]$/.test(enteredKey)) {
      event.preventDefault()
    }
  }

  const handleResendOTP = () => {
    setLoading(true)
    const user = JSON.parse(localStorage.getItem('at-docmatic-user')!)
    commonService
      .postService(url, { username: user.sAMAccountName })
      .then((result: any) => {
        if (result.status === 200) {
          setLoading(false)
          Success(result?.data?.message)
          setIsResendDisabled(true)
          clearInterval(timer)
          setCountdown(60)
          startCountdown()
        }
      })
      .catch((error) => {
        setLoading(false)
        Failed(errorMessage(error, 'Something Went Wrong!'))
      })
  }

  return (
    <>
      {isLoading && <Loader />}
      <form noValidate onSubmit={handleSubmit}>
        <Stack
          direction="column"
          alignItems="center"
          sx={{ marginTop: '45px', marginBottom: '45px' }}
        >
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            shouldAutoFocus={true}
            renderSeparator={<span> </span>}
            renderInput={(props: any) => (
              <input onKeyPress={handleKeyPress} type={'number'} {...props} />
            )}
            inputStyle="otp_input_box"
          />
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: 'center',
              width: '100%',
              mt: 1,
              color: '#324254',
            }}
          >
            Time Remaining:{' '}
            <Box component={'span'} sx={{ color: '#283891' }}>
              {countdown === 60 ? '01' : '00'}:
              {countdown === 60
                ? '00'
                : countdown < 10
                ? `0${countdown}`
                : countdown}
            </Box>
          </Typography>
        </Stack>

        {error && (
          <Box sx={{ mt: 1 }}>
            <FormHelperText
              sx={{
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '.875rem',
              }}
              error
            >
              {error}
            </FormHelperText>
          </Box>
        )}

        <Stack mt={3} rowGap={2}>
          <OutlinedButton
            label="Resend OTP"
            type="button"
            mode={'none'}
            isDisabled={isResendDisabled}
            handleClick={handleResendOTP}
          />
          <ContainedButton
            label="Verify"
            type="submit"
            isDisabled={isDisabled}
          />
        </Stack>
      </form>
    </>
  )
}

export default AuthOTP
