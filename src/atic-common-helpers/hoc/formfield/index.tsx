import {
  Autocomplete,
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Checkbox,
  debounce,
  Chip,
  Select,
  withStyles,
  makeStyles,
} from '@mui/material'

import { useTheme } from '@mui/material/styles'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import MuiPhoneNumber from 'material-ui-phone-number'
import {
  handleKeyNumberPress,
  handleKeyDecimalPress,
  handleAlphanumeric,
  handleKeyAlphabetsPress
} from 'atic-common-helpers/hooks/customHook'
import './form.scss'
import HoverImagePopover from './helperText'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import DatePickerIcon from 'asset/images/form/datepicker.svg'
import ArrowDownIcon from 'asset/images/form/arrow-down.svg'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import Assets from 'helpers/assets.helper'
import { InfoTooltip } from 'component/tooltip'
import clsx from 'clsx'
import { fontSize } from '@mui/system'
// import { MuiChipsInput } from 'mui-chips-input'
import { SweetAlertUpdatableParameters } from 'sweetalert2'
import { Value } from 'sass'

export const InputField = ({
  fieldName,
  values,
  errors,
  handleChange,
  handleKeyDown,
  handleBlur,
  name,
  isRequired = true,
  type = 'text',
  disabled = false,
  placeholder,
  Icon,
  adorament,
  position,
  handleIconClick,
  length,
  minRow = 0,
  multiline = false,
  id = name,
  onlyNumber = false,
  onlyDecimalNumber = false,
  onlyAlphanumeric = false,
  onlyAlphabets = false,
  size,
  info = '',
  fontSize,
  autoFocus,
}: InputFieldtypes) => {
  const theme = useTheme()
  const Info = Assets.info

  return (
    <>
      <Box>
        {fieldName && (
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontWeight: '500',
              color: 'rgba(16, 24, 40, 1)',
            }}
            variant="label"
          >
            <Box sx={{ marginRight: '10px' }}>{fieldName}</Box>
            {/* {isRequired && <span style={{ color: 'red' }}>*</span>} */}
            {info && (
              <InfoTooltip title={info} placement="right">
                <IconButton sx={{ padding: '0px !important' }}>
                  <Info />
                </IconButton>
              </InfoTooltip>
            )}
          </Typography>
        )}
        <TextField
          variant="filled"
          value={values || ''}
          name={name}
          onChange={handleChange}
          size={size}
          sx={{
            width: '100%',
            '& input': {
              fontSize: fontSize === 'small' ? '.875rem' : '1rem',
            },
          }}
          placeholder={placeholder ? placeholder : ''}
          inputProps={{
            maxLength: length,
          }}
          multiline={multiline}
          minRows={minRow}
          InputProps={{
            disableUnderline: true,
            [adorament === 'startAdornment'
              ? 'startAdornment'
              : 'endAdornment']: adorament ? (
              <InputAdornment
                position={position ? position : 'start'}
                disablePointerEvents={handleIconClick ? false : true}
              >
                <IconButton onClick={handleIconClick}>
                  <Icon />
                </IconButton>
              </InputAdornment>
            ) : undefined,
          }}
          disabled={disabled}
          error={Boolean(errors)}
          type={type}
          onKeyDown={handleKeyDown}
          onKeyPress={(e) => {
            onlyAlphanumeric && handleAlphanumeric(e)
            onlyDecimalNumber && handleKeyDecimalPress(e)
            onlyNumber && handleKeyNumberPress(e)
            onlyAlphabets && handleKeyAlphabetsPress(e)
          }}
          onBlur={handleBlur}
          id={id}
          autoFocus={autoFocus}
        />
      </Box>
      {errors && (
        <FormHelperText
          error
          id="standard-weight-helper-text-email-login"
          sx={{ mt: 0.3, p: 0 }}
        >
          {errors}
        </FormHelperText>
      )}
    </>
  )
}
type InputFieldtypes = {
  fieldName?: string
  values: string | number | null | undefined
  handleChange?: (_: any) => void
  handleKeyDown?: (_: any) => void
  handleBlur?: (_: any) => void
  errors?: any
  name?: string
  type?: string
  isRequired?: boolean
  disabled?: boolean
  placeholder?: string
  adorament?: 'endAdornment' | 'startAdornment'
  position?: 'start' | 'end'
  Icon?: any
  handleIconClick?: any
  length?: number
  multiline?: boolean
  minRow?: number
  id?: string
  onlyNumber?: boolean
  onlyDecimalNumber?: boolean
  onlyAlphanumeric?: boolean
  onlyAlphabets?: boolean
  size?: 'small' | 'medium' | undefined
  fontSize?: 'small' | 'medium' | undefined
  info?: string
  autoFocus?: boolean
}

// export default SelectField;

export const SelectField = ({
  fieldName,
  values,
  errors,
  handleChange,
  name,
  options,
  disabled = false,
  isRequired = true,
  placeholder = '',
  helphover = false,
  id = name,
  helperImg,
  fontSize = 'small',
  size,
  hasOptionTitle,
}: SelectFieldtypes) => {
  const theme = useTheme()
  return (
    <>
      <Box>
        {fieldName && (
          <Typography
            variant="label"
            color={theme.palette.text.primary}
            sx={{ paddingBottom: '10px' }}
          >
            {fieldName}
            {isRequired && <span style={{ color: 'red' }}>*</span>}
            {helphover && (
              <span>
                <HoverImagePopover img={helperImg} />
              </span>
            )}
          </Typography>
        )}
        <TextField
          id={id}
          name={name}
          select
          SelectProps={{
            IconComponent: (props: any) => {
              const rotate = props.className.toString().includes('iconOpen')
              return (
                <div
                  style={{
                    position: 'absolute',
                    cursor: 'pointer',
                    pointerEvents: 'none',
                    right: rotate
                      ? size === 'small'
                        ? 7
                        : 9
                      : 'small'
                      ? 18
                      : 18,
                    bottom: rotate
                      ? size == 'small'
                        ? 4
                        : 10
                      : size == 'small'
                      ? 15
                      : 18,
                    height: '15px',
                    width: '15px',
                    transform: rotate ? 'rotate(180deg)' : 'none',
                    color: theme.palette.text.secondary,
                  }}
                >
                  <ExpandMoreRoundedIcon />
                </div>
              )
            },
            MenuProps: {
              PaperProps: {
                sx: {
                  '&::-webkit-scrollbar': {
                    width: '0.4em',
                  },
                  '&::-webkit-scrollbar-track': {
                    '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgb(203, 200, 200)',
                    borderRadius: '16px',
                  },
                  '.MuiMenu-list': {
                    height: hasOptionTitle ? '245px !important' : 'auto',
                    width: hasOptionTitle ? '360px !important' : 'auto',

                    li: {
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      width: hasOptionTitle ? '360px !important' : 'auto',
                      display: 'block',
                    },
                  },
                },
              },
            },

            //native: true,
          }}
          required={isRequired}
          onChange={handleChange}
          error={Boolean(errors)}
          sx={{
            width: '100%',
            '& .MuiFilledInput-input': {
              fontSize: fontSize === 'small' ? '.875rem' : '1rem',
            },
            '& .MuiSelect-select': {
              borderRadius: '8px !important',
              fontWeight: 'regular',
              fontSize: fontSize == 'small' ? '.875rem' : '1rem',
              //   minHeight:
              //     size === 'small' ? '0.75rem !important' : 'auto !important',
              //   height:
              //     size === 'small' ? '0.75rem !important' : 'auto !important',
              // },
              paddingLeft:
                size === 'small' ? '10px !important' : '14px !important',
              paddingY: size === 'small' ? '7px !important' : '10px !important',
            },
            '& .MuiSelect-select:focus': {
              backgroundColor: '#fff',
            },
          }}
          value={values || ''}
          disabled={disabled}
          InputProps={{ disableUnderline: true }}
          InputLabelProps={{
            shrink: false, // Display placeholder
          }}
          label={!values ? placeholder : ''}
        >
          {options.length ? (
            options.map((item: any) => (
              <MenuItem
                value={item.value}
                key={item.value}
                sx={{ py: 2, fontSize: fontSize == 'small' ? '0.875' : '1rem' }}
                title={hasOptionTitle ? item.name : ''}
                className={size == 'small' ? 'menu-small' : ''}
              >
                {item.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem value={''} key={''} sx={{ py: 2 }}>
              No data found
            </MenuItem>
          )}
        </TextField>
        {/* <Select
          labelId="demo-simple-select-label"
          value={values || ''}
          label={!values ? placeholder : ''}
          onChange={handleChange}
          sx={{ width: '100%' }}
          required={isRequired}
          error={Boolean(errors)}
          id={id}
          name={name}
          variant="filled"
        >
          {options.length ? (
            options.map((item: any) => (
              <MenuItem value={item.value} key={item.value} sx={{ py: 2 }}>
                {item.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem value={''} key={''} sx={{ py: 2 }}>
              No data found
            </MenuItem>
          )}
        </Select> */}
        {/* <Select
          value={values || ''}
          label={!values ? placeholder : ''}
          onChange={handleChange}
          sx={{ width: '100%' }}
          required={isRequired}
          error={Boolean(errors)}
          id={id}
          name={name}
          // variant="filled"
        >
          {options.length ? (
            options.map((item: any) => (
              <MenuItem value={item.value} key={item.value} sx={{ py: 2 }}>
                {item.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem value={''} key={''} sx={{ py: 2 }}>
              No data found
            </MenuItem>
          )}
        </Select> */}
      </Box>
      {errors && (
        <FormHelperText error id="standard-weight-helper-text-email-login">
          {errors}
        </FormHelperText>
      )}
    </>
  )
}

type SelectFieldtypes = {
  fieldName: string
  values: string | number | null | undefined
  handleChange: (_: any) => void
  errors?: any
  name?: string
  options: { value: string | number; name: string }[]
  disabled?: boolean
  isRequired?: boolean
  placeholder?: string
  id?: string
  helphover?: boolean
  size?: 'small' | 'medium' | undefined
  helperImg?: any
  fontSize?: 'small' | 'medium' | undefined
  hasOptionTitle?: boolean
}

export const GroupRadioButton = ({
  fieldName,
  values,
  errors,
  handleChange,
  name,
  isRow,
  options,
  isRequired = true,
  id = name,
  disabled = false,
}: GroupRadioFieldtypes) => {
  const theme = useTheme()

  return (
    <FormControl>
      {fieldName && (
        <Typography
          py="10px"
          fontWeight={600}
          fontSize={'1rem'}
          color={theme.palette.text.dark}
        >
          {fieldName}
          {isRequired && <span style={{ color: 'red' }}>*</span>}
        </Typography>
      )}

      <RadioGroup
        row={isRow}
        aria-labelledby="demo-controlled-radio-buttons-group"
        name={name}
        value={values || ''}
        sx={{ pt: fieldName ? 0 : 3 }}
        onChange={handleChange}
      >
        {!!options.length &&
          options.map((item: any) => (
            <FormControlLabel
              key={item.name}
              value={item.value}
              control={<Radio />}
              label={item.name}
              disabled={disabled}
            />
          ))}
      </RadioGroup>
      {errors && <FormHelperText error>{errors}</FormHelperText>}
    </FormControl>
  )
}

type GroupRadioFieldtypes = {
  fieldName?: string
  values: string | number | null | undefined | boolean
  isRow: boolean
  handleChange: (_: any) => void
  errors?: any
  name: string
  options: { value: string | number | boolean; name: string }[]
  isRequired?: boolean
  id?: string
  disabled?: boolean
}

export const AutoCompleteField = ({
  fieldName,
  values,
  errors,
  handleChange,
  name,
  placeholder,
  options,
  isRequired = true,
  disabled = false,
  id = name,
  size,
}: AutoCompleteFieldtypes) => {
  const theme = useTheme()
  return (
    <>
      <Box>
        <Typography variant={'label'} color={theme.palette.text.primary}>
          {fieldName && fieldName}
          {isRequired && <span style={{ color: 'red' }}>*</span>}
        </Typography>
        <Autocomplete
          value={values}
          defaultValue={values}
          sx={{
            width: '100%',
          }}
          popupIcon={<img width={13} src={ArrowDownIcon} />}
          PaperComponent={(props) => (
            <Paper
              sx={{
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              }}
              {...props}
            />
          )}
          onChange={(event: any, newValue: any) => {
            handleChange(newValue)
          }}
          id={id}
          className="auto_complete_default_height"
          getOptionLabel={(option) => option?.name}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              {option.name}
            </Box>
          )}
          size={size}
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              error={Boolean(errors)}
              placeholder={placeholder ? placeholder : ''}
              variant="filled"
              InputProps={{ ...params.InputProps, disableUnderline: true }}
            />
          )}
          disabled={disabled}
        />
      </Box>
      {errors && <FormHelperText error>{errors}</FormHelperText>}
    </>
  )
}

type AutoCompleteFieldtypes = {
  fieldName?: string
  values: { value: string | number | boolean; name: string } | null
  handleChange: (_: any) => void
  errors?: any
  name: string
  options: { value: string | number; name: string }[]
  isRequired?: boolean
  disabled?: boolean
  id?: string
  placeholder?: string
  size?: 'small' | 'medium' | undefined
}

export const MultiAutoCompleteField = ({
  fieldName,
  values,
  errors,
  handleChange,
  name,
  options,
  isRequired = true,
  id = name,
  size,
  multiple = false,
  readOnly = false,
  handleInputChange,
  label,
  onOpen,
  limit = 3,
  loading = false,
}: MultiAutoCompleteFieldtypes) => {
  const theme = useTheme()
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
  const checkedIcon = <CheckBoxIcon fontSize="small" />
  const delay = 500
  const debouncedHandleChange = debounce((value: any) => {
    console.log('working')
    handleInputChange && handleInputChange(value)
  }, delay)

  return (
    <>
      <Box>
        <Typography
          py="12px"
          fontWeight={600}
          fontSize={'1rem'}
          color={theme.palette.text.dark}
        >
          {fieldName && fieldName}
          {isRequired && <span style={{ color: 'red' }}>*</span>}
        </Typography>
        <Autocomplete
          disableListWrap
          value={values}
          defaultValue={values}
          multiple={multiple}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          disableCloseOnSelect={true}
          disabled={readOnly}
          id={id}
          limitTags={limit}
          className="auto_complete_default_height"
          getOptionLabel={(option) => option.name}
          size={size}
          options={options}
          loading={loading}
          onOpen={() => handleInputChange && handleInputChange('')}
          // open={true}
          sx={{
            width: '100%',
          }}
          // PaperComponent={(props) => (
          //   <Paper
          //     sx={{
          //       boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          //     }}
          //     {...props}
          //   />
          // )}
          onChange={(event: any, newValue: any) => {
            handleChange(newValue)
          }}
          renderOption={(props, option, { selected }) => {
            return (
              <Box
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                <span style={{ width: '90%', overflowWrap: 'break-word' }}>
                  {option.name}
                </span>
              </Box>
            )
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              error={Boolean(errors)}
              placeholder={label}
              variant="filled"
              InputProps={{ ...params.InputProps, disableUnderline: true }}
              onChange={(e: any) => debouncedHandleChange(e.target.value)}
            />
          )}
          renderTags={(value, getTagProps) => {
            const numTags = value.length
            const limitTags = 1
            return (
              <>
                {value.slice(0, limitTags).map((option, index) => (
                  <Chip
                    {...getTagProps({ index })}
                    key={index}
                    label={option.name}
                  />
                ))}
                {numTags > limitTags && ` +${numTags - limitTags}`}
              </>
            )
          }}
        />
      </Box>
      {errors && <FormHelperText error>{errors}</FormHelperText>}
    </>
  )
}

type MultiAutoCompleteFieldtypes = {
  fieldName?: string
  values: any
  // values: { value: string | number | boolean; name: string } | null;
  handleChange: (_: any) => void
  errors?: any
  name: string
  options: { value: string | number; name: string }[]
  isRequired?: boolean
  disabled?: boolean
  id?: string
  size?: 'small' | 'medium' | undefined
  multiple?: boolean
  readOnly?: boolean
  handleInputChange?: (_: any) => void
  label?: string
  onOpen?: () => void
  limit?: number
  loading?: boolean
}

//Date Picker
export const InputDatePicker = ({
  fieldName,
  values,
  errors,
  handleChange,
  name,
  isRequired = true,
  disabled = false,
  placeholder,
  maxDate,
  minDate,
  format,
  id = name,
  size,
}: datePickerFiledType) => {
  const theme = useTheme()
  const onKeyDown = (e: any) => {
    e.preventDefault()
    return false
  }

  function DatePickerI() {
    return (
      <img src={DatePickerIcon} alt="Date picker opening icon" width={23} />
    )
  }

  return (
    <>
      <Box>
        {fieldName && (
          // <Typography
          //   pt="20px"
          //   pb="5px"
          //   fontWeight={600}
          //   fontSize={'.85rem'}
          //   color={theme.palette.text.label}
          // >
          //   {fieldName}
          //   {isRequired && <span style={{ color: 'red' }}>*</span>}
          // </Typography>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
            variant="label"
            color={theme.palette.text.primary}
          >
            <Box sx={{ marginRight: '10px' }}>{fieldName}</Box>
            {/* {isRequired && <span style={{ color: 'red' }}>*</span>} */}
          </Typography>
        )}
        <DatePicker
          value={values || ''}
          onChange={handleChange}
          sx={{
            width: '100%',
            '& .MuiInputAdornment-root': { mr: 1 },
            '& .MuiInputAdornment-root button': {
              paddingTop:
                size === 'small' ? '10px !important' : '11px !important',
              paddingBottom:
                size === 'small' ? '10px !important' : '11px !important',
            },
            '& .MuiFilledInput-input': {
              fontSize: size === 'small' ? '.875rem' : '1rem',
            },
          }}
          disabled={disabled}
          maxDate={maxDate}
          minDate={minDate}
          className={
            disabled ? 'datepicker-input-slot1' : 'datepicker-input-slot'
          }
          slots={{ openPickerIcon: DatePickerI }}
          slotProps={{
            //openPickerIcon: AccessTimeIcon,
            //openPickerButton: <button>Open</button>,
            textField: {
              InputProps: {
                disableUnderline: true,
              },
              name: name,
              id,
              size: 'small',
              variant: 'filled',
              onKeyPress: (e: any) => onKeyDown(e),
              disabled: disabled,
              error: Boolean(errors),
              className: disabled
                ? 'datepicker-input-slot1'
                : 'datepicker-input-slot',
            },

            // actionBar: {
            //   actions: ['clear'],
            // },
          }}
          format={format || 'MM/DD/YYYY'}
        />
      </Box>
      {errors && <FormHelperText error>{errors}</FormHelperText>}
    </>
  )
}

type datePickerFiledType = {
  fieldName?: string
  values: string | number | null | undefined
  handleChange?: (_: any) => void
  errors?: any
  name?: string
  isRequired?: boolean
  disabled?: boolean
  placeholder?: string
  format?: string
  id?: string
  maxDate?: any
  minDate?: any
  size?: 'small' | 'medium'
}

export const PhoneField = (props: phoneField) => {
  const theme = useTheme()
  const {
    handleChange,
    name,
    errors,
    fieldName,
    isRequired = true,
    value,
    disabled,
    id,
  } = props
  return (
    <>
      <Box>
        {fieldName && (
          <Typography
            pt="20px"
            pb="5px"
            fontWeight={600}
            letterSpacing={0.4}
            fontSize={'0.85rem'}
            color={theme.palette.text.label}
          >
            {fieldName}
            {isRequired && <span style={{ color: 'red' }}>*</span>}
          </Typography>
        )}
        <MuiPhoneNumber
          variant="filled"
          name={name}
          InputProps={{
            name: name,
            disableUnderline: true,
          }}
          onChange={(e) => handleChange({ target: { value: e, name: name } })}
          error={Boolean(errors)}
          value={value}
          disableAreaCodes={true}
          defaultCountry={'us'}
          preferredCountries={['us']}
          sx={{
            width: '100%',
            backgroundColor: disabled
              ? '#f1f1f1 !important;'
              : '#ffffff !important',
            '& .MuiInputBase-root': {
              alignItems: 'baseline',
              '& .MuiInputAdornment-root': {
                ml: 1,
                '& .MuiButtonBase-root': {
                  pointerEvents: disabled ? 'none' : 'unset',
                  cursor: disabled ? 'default' : 'pointer',
                },
              },
            },
          }}
          disabled={disabled}
          id={id}
        />
      </Box>
      {errors && <FormHelperText error>{errors}</FormHelperText>}
    </>
  )
}

type phoneField = {
  fieldName?: string
  errors?: any
  name: string
  isRequired?: boolean
  handleChange?: any
  value?: string
  disabled?: boolean
  id?: string
}

export const SearchInputFiled = ({
  fieldName,
  isRequired,
  placeholder,
  values = '',
  name,
  handleChange,
  startIcon,
  endIcon,
  handleSearchClear,
  errors,
  size,
}: SearchFiled) => {
  const theme = useTheme()
  return (
    <Box>
      {fieldName && (
        <Typography
          py="10px"
          fontWeight={600}
          fontSize={'1rem'}
          color={theme.palette.text.dark}
        >
          {fieldName}
          {isRequired && <span style={{ color: 'red' }}>*</span>}
        </Typography>
      )}
      <TextField
        variant="filled"
        value={values || ''}
        name={name}
        onChange={handleChange}
        sx={{
          width: '100%',
        }}
        placeholder={placeholder ? placeholder : ''}
        error={Boolean(errors)}
        InputProps={{
          style: { display: 'flex', alignItems: 'center' },
          startAdornment: startIcon && (
            <IconButton edge="start" aria-label="start-icon">
              {startIcon}
            </IconButton>
          ),
          endAdornment: endIcon && (
            <IconButton
              edge="end"
              aria-label="end-icon"
              // disabled={values && values?.length > 0 ? false : true}
              sx={{ mr: 0 }}
              onClick={handleSearchClear}
            >
              {endIcon}
            </IconButton>
          ),
          disableUnderline: true,
        }}
        size={size}
      />
      {errors && (
        <FormHelperText
          error
          id="standard-weight-helper-text-email-login"
          sx={{ mt: 0.3, p: 0 }}
        >
          {errors}
        </FormHelperText>
      )}
    </Box>
  )
}

type SearchFiled = {
  fieldName?: string
  isRequired?: boolean
  placeholder?: string
  values: string | null | undefined
  name?: string
  handleChange?: (_: any) => any
  startIcon?: any
  endIcon?: any
  handleSearchClear?: (_: any) => void
  errors?: any
  size?: any
}

export const AutoCompleteFieldWithSearchAPI = ({
  fieldName,
  values,
  errors,
  handleChange,
  name,
  options,
  isRequired = true,
  disabled = false,
  id = name,
  size,
  handleInputChange,
  readOnly = false,
  multiple = false,
  loading = false,
}: AutoCompleteFieldWithSearchAPItypes) => {
  const theme = useTheme()
  const delay = 500
  const debouncedHandleChange = debounce((value: any) => {
    console.log('working')
    handleInputChange(value)
  }, delay)

  return (
    <>
      <Box>
        <Typography
          py="12px"
          fontWeight={600}
          fontSize={'1rem'}
          color={theme.palette.text.dark}
        >
          {fieldName && fieldName}
          {isRequired && <span style={{ color: 'red' }}>*</span>}
        </Typography>
        <Autocomplete
          value={values}
          readOnly={readOnly}
          defaultValue={values}
          multiple={multiple}
          onOpen={() => handleInputChange('')}
          loading={loading}
          sx={{
            width: '100%',
          }}
          onChange={(event: any, newValue: any) => {
            handleChange(newValue)
          }}
          id={id}
          className="auto_complete_default_height"
          getOptionLabel={(option) => option?.name}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              {option.name}
            </Box>
          )}
          size={size}
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              error={Boolean(errors)}
              variant="filled"
              InputProps={{ ...params.InputProps, disableUnderline: true }}
              onChange={(e: any) => debouncedHandleChange(e.target.value)}
            />
          )}
          disabled={disabled}
        />
      </Box>
      {errors && <FormHelperText error>{errors}</FormHelperText>}
    </>
  )
}

type AutoCompleteFieldWithSearchAPItypes = {
  fieldName?: string
  values: { value: string | number | boolean; name: string } | null
  handleChange: (_: any) => void
  handleInputChange: (_: any) => void
  errors?: any
  name: string
  options: { value: string | number; name: string }[]
  isRequired?: boolean
  disabled?: boolean
  id?: string
  size?: 'small' | 'medium' | undefined
  readOnly?: boolean
  multiple?: boolean
  loading?: boolean
}
