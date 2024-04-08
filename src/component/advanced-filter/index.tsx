import { Box, Typography, useTheme } from '@mui/material'
import {
  InputField,
  InputDatePicker,
  SelectField,
} from 'atic-common-helpers/hoc/formfield'
import useForm from 'atic-common-helpers/hooks/useForm'
import { ContainedButton, ContainedSecondaryButton } from 'component/buttons'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import './advanced-filter.scss'

export interface Filter {
  header: string
  field: string
  type: string
  value: string
  options?: any
  validations?: Validation
}

export interface Validation {
  maxLength?: number
  isAlphanumeric?: boolean
  isNumeric?: boolean
}

export interface IFilter {
  filters: Filter[]
}

export interface AdvancedFilterParams {
  filterValues: any
  filters: Filter[]
  handleApplyFilters: (_: any) => void
}

const AdvancedFilter = ({
  filterValues,
  filters,
  handleApplyFilters,
}: AdvancedFilterParams) => {
  const theme = useTheme()
  const [initialValues, setInitialValues] = useState({})

  const handleSubmitFilters = () => {
    console.log('Values', values)
    handleApplyFilters(values)
  }

  // useForm control
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setUpdateValue,
    handleReset,
  } = useForm(filterValues, handleSubmitFilters, validation)

  const clearFilters = () => {
    handleReset()
  }

  return (
    <>
      <Box p={2} className="advanced-filter">
        <form noValidate onSubmit={handleSubmit}>
          <Box>
            <Typography
              color={theme.palette.text.secondary}
              fontSize={'.875rem'}
              fontWeight={'bold'}
              marginBottom={'5px !important'}
            >
              Filter
            </Typography>
            <Box
              sx={{
                borderTop: `1px solid ${theme.palette.grey[300]}`,
              }}
            ></Box>
          </Box>
          <Box maxHeight={'350px'}>
            {filters.map((filter: Filter) => {
              switch (filter.type) {
                case 'text':
                  return (
                    <Box key={filter.field}>
                      <InputField
                        values={values[filter.field] || null}
                        fieldName={filter.header}
                        handleChange={handleChange}
                        name={filter.field}
                        errors={''}
                        id={filter.field}
                        onlyNumber={filter?.validations?.isNumeric}
                        length={filter?.validations?.maxLength}
                        onlyAlphanumeric={filter?.validations?.isAlphanumeric}
                      />
                    </Box>
                  )
                case 'date':
                  return (
                    <Box key={filter.field}>
                      <InputDatePicker
                        values={values[filter.field] || null}
                        fieldName={filter.header}
                        handleChange={(e) => {
                          setUpdateValue(filter.field, dayjs(e))
                        }}
                        name={filter.field}
                        id={filter.field}
                      />
                    </Box>
                  )
                case 'select':
                  return (
                    <Box key={filter.field}>
                      <SelectField
                        fieldName={filter.header}
                        options={filter.options}
                        values={values[filter.field] || null}
                        handleChange={(e: any) => {
                          setUpdateValue(filter.field, e.target.value)
                        }}
                        isRequired={false}
                        // fontSize="small"
                        size={'small'}
                        name={filter.field}
                        id={filter.field}
                      />
                    </Box>
                  )
              }
            })}
          </Box>
          <Box
            className="advanced-filter-btns"
            sx={{ mt: 2, display: 'flex', backgroundColor: '#fff' }}
          >
            <Box width={'47%'}>
              <ContainedSecondaryButton
                label="Clear"
                type="button"
                size="sm"
                handleClick={clearFilters}
              />
            </Box>
            <Box ml={2} width={'47%'}>
              <ContainedButton label="Apply Filter" type="submit" size="sm" />
            </Box>
          </Box>
        </form>
      </Box>
    </>
  )
}

export default AdvancedFilter

export function validation(value: any) {
  return true
}
