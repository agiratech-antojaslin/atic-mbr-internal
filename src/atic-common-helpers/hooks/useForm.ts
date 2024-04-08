import { useState, useEffect, useCallback } from 'react'
const thisError: any = {}
interface setSTateType {
  [name: string]: any
}
const useForm = (
  initialValues: setSTateType = {},
  callback: Function,
  validate: any
) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(thisError)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)
  const [isFocus, setIsFocus] = useState(false)

  useEffect(() => {
    if (isSubmit) {
      if (Object.keys(errors).length === 0 && isSubmitting) callback()
    }
    setIsSubmit(false)
  }, [errors])

  useEffect(() => {
    setIsSubmit(false)
    onChangeValidation()
  }, [values])

  const onChangeValidation = () => {
    if (isSubmitting) {
      setErrors(false)
      if (validate === undefined) setErrors({})
      if (validate === null) setErrors({})
      if (validate !== undefined && validate) setErrors(validate(values))
    }
  }

  const handleSubmit = useCallback(
    (e: any) => {
      if (e) e.preventDefault()

      setValues((values) => ({
        ...values,
      }))
      setIsSubmit(true)
      setIsSubmitting(true)
      setErrors(false)
      setIsFocus(true)
      if (validate === undefined) setErrors({})
      if (validate === null) setErrors({})
      if (validate !== undefined && validate) setErrors(validate(values))
    },
    [values]
  )

  const setUpdateValue = useCallback((field: string, value: any) => {
    const text = value
    setValues((values) => ({
      ...values,
      [field]: text,
    }))
  }, [])

  const setPatchValue = useCallback((value: any) => {
    setValues((values) => ({
      ...values,
      ...value,
    }))
  }, [])

  const handleChange = useCallback((e: any) => {
    // e.persist();
    const text = e.target.value
    setValues((values) => ({
      ...values,
      [e.target.name]: text,
    }))
  }, [])

  const handlePercentageNumberChange = useCallback((e: any) => {
    e.persist()
    if (isNaN(e.target.value)) return

    if (e.target.value === '')
      setValues((values) => ({
        ...values,
        [e.target.name]: null,
      }))
    else
      setValues((values) => ({
        ...values,
        [e.target.name]:
          e.target.value?.length <= 5
            ? e.target.value
            : e.target.value.toString().slice(0, 5),
      }))
  }, [])

  const handleReset = useCallback(() => {
    setValues({})
    setIsSubmit(false)
    setIsSubmitting(false)
    setErrors(false)
    setIsFocus(false)
  }, [])

  return {
    setUpdateValue,
    handleChange,
    setPatchValue,
    handlePercentageNumberChange,
    handleSubmit,
    handleReset,
    setIsFocus,
    isFocus,
    values,
    isSubmitting,
    errors,
  }
}

export default useForm
