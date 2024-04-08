import * as React from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { visuallyHidden } from '@mui/utils'
import {
  Button,
  FormControlLabel,
  Popover,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import './selectedTable.scss'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import Switch, { SwitchProps } from '@mui/material/Switch'
import sortAscending from 'asset/images/table/arrow-down.svg'
import columnIcon from 'asset/images/table/column.svg'
import columnArrowIcon from 'asset/images/table/column-arrow.svg'
import { styled, useTheme } from '@mui/material/styles'
import Tooltip from '@mui/material/Tooltip'
import {
  dateFormat,
  parsePhoneNumberformat,
  ReceivedDateConverter,
  updatedDateConverter,
} from 'atic-common-helpers/hooks/customHook'
import reportIcon from 'asset/images/icons/reporticon.svg'
import calendarIcon from 'asset/images/icons/calendar.svg'
import acceptedIcon from 'asset/images/table/verified.svg'
import examineIcon from 'asset/images/icons/examine.svg'
import viewIcon from 'asset/images/icons/view.svg'
import viewDocumentIcon from 'asset/images/table/view-document.svg'
import draftIcon from 'asset/images/table/draft.svg'
import previewIcon from 'asset/images/table/preview.svg'
import reExamineIcon from 'asset/images/table/re-examine.svg'
import documentViewIcon from 'asset/images/table/Preview.svg'
import NoRecordFound from 'atic-common-helpers/component/tables/NoRecordFound'
import { formatLicense } from 'atic-common-helpers/hooks/customHook'
import PaginationComponent from '../pagination'
import IosShareIcon from '@mui/icons-material/IosShare'
// import ResendMail from '../../asset/images/mail-resend-icon.svg'
// import MailVerified from '../../asset/images/mail-verified.svg'
import { useAppSelector } from 'store/store'
import { Navigate, useLocation } from 'react-router-dom'
import Examine from 'asset/images/table/view.svg'
import { SelectField, InputField } from 'atic-common-helpers/hoc/formfield'
import MoreIcon from './MoreIcon'
import Loader from 'component/ui-component/Loader'
import {
  ContainedButton,
  ContainedSecondaryButton,
  OutlinedButton,
} from 'component/buttons'
import { InfoTooltip } from 'component/tooltip'
import Assets from 'helpers/assets.helper'
import { fontSize } from '@mui/system'
import { getRegion } from 'atic-common-helpers/helpers/function.helper'
import TableCheckbox from './tableCheckbox'

function EnhancedTableHead(props: EnhancedTableHeadTypes) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
    isSelectable,
    isCustomColumn,
    isSingleCheck,
    headCellsCustomized,
    setHeadCellsCustomized,
    isTableSticky = true,
  } = props
  const [headCellsData, setHeadCellsData] = React.useState(headCells)
  const [setAllchecked, setSetAllChecked] = React.useState(true)
  const [headCellsState, setHeadCellsState] = React.useState(headCells)
  const [isShowAllSelected, setisShowAllSelected] = React.useState(true)
  const [isNotChangeable, setIsNotChangeable] = React.useState(false)

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const newHeadCells = headCellsState.map((item) => ({
  //     ...item,
  //     isChecked: event.target.checked ? true : false,
  //   }))
  //   setSetAllChecked(event.target.checked)
  //   setIsNotChangeable(!event.target.checked)
  //   setHeadCellsState(newHeadCells)
  //   setisShowAllSelected(true)
  // }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newHeadCells = headCellsState.map((item) => ({
      ...item,
      isChecked: item.checkBox ? event.target.checked : item.isChecked,
    }))
    setSetAllChecked(event.target.checked)
    setIsNotChangeable(!event.target.checked)
    setHeadCellsState(newHeadCells)
    setisShowAllSelected(true)
  }

  const createSortHandler = (property: any) => (event: any) => {
    onRequestSort(event, property)
  }
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleCustomColumn = (event: any) => {
    if (isShowAllSelected) {
      setAnchorEl(event.currentTarget)
      const newHeadCells = headCellsState.map((item) => ({
        ...item,
        isChecked: true,
      }))
      setHeadCellsData(newHeadCells)
    } else {
      setAnchorEl(event.currentTarget)
      setHeadCellsData(headCellsData)
    }
  }

  const handleClose = () => {
    // if (isNotChangeable) {
    //   const newHeadCells = headCellsState.map((item) => ({
    //     ...item,
    //     isChecked: true,
    //   }))
    //   setSetAllChecked(true)
    //   setHeadCellsData(newHeadCells)
    // }
    setAnchorEl(null)
  }

  const handleResetButton = () => {
    setSetAllChecked(true)
    const newHeadCells = headCellsState.map((item) => ({
      ...item,
      isChecked: true,
    }))
    setHeadCellsState(newHeadCells)
    setHeadCellsCustomized(newHeadCells)
    setIsNotChangeable(false)
    setAnchorEl(null)
  }

  const handleAppplyButton = () => {
    const updatedHeadCellsState = headCellsState.filter(
      (item) => item.isChecked
    )
    setHeadCellsCustomized(updatedHeadCellsState)
    setAnchorEl(null)
  }
  const handleCheckBoxChange = (index: any) => (event: any) => {
    const newHeadCellsState = [...headCellsState]
    newHeadCellsState[index].isChecked = event.target.checked
    setHeadCellsState(newHeadCellsState)
    setHeadCellsData(newHeadCellsState)
    const anyUnchecked = newHeadCellsState.some((item) => !item.isChecked)
    setSetAllChecked(!anyUnchecked)
    const checkedCount = newHeadCellsState.filter(
      (item) => item.isChecked
    ).length
    setisShowAllSelected(!anyUnchecked)
    const isCheckedCount = checkedCount > 5

    if (isCheckedCount) {
      setIsNotChangeable(false)
    }
    if (!isCheckedCount) {
      setIsNotChangeable(true)
    }
  }

  const open = Boolean(anchorEl)
  const customColumn = open ? 'simple-popover' : undefined

  return (
    <TableHead>
      <TableRow
        className={isTableSticky ? 'table-custom-column' : 'table-non-sticky'}
      >
        {/* {isSelectable && (
          <TableCell padding="checkbox" sx={{ backgroundColor: '#f6f7fa' }}>
            {!isSingleCheck && (
              <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{
                  'aria-label': 'select all desserts',
                }}
              />
            )}
          </TableCell>
        )} */}
        {!!headCellsCustomized?.length &&
          headCellsCustomized.map((headCell: any, index: number) => (
            <TableCell
              key={headCell.id}
              align={'center'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
              className={
                headCell.id == 'claimNumber'
                  ? 'table-heading-claim-no'
                  : 'tableheading'
              }
            >
              {headCell.isSort ? (
                headCell.id == 'billNumber' && isSelectable ? (
                  <Box sx={{ display: 'flex' }}>
                    {/* <Checkbox
                      color="primary"
                      checked={rowCount > 0 && numSelected === rowCount}
                      onChange={onSelectAllClick}
                      inputProps={{
                        'aria-label': 'select all desserts',
                      }}
                    /> */}
                    <Box>
                      <label className="checkbox-container">
                        <input
                          type="checkbox"
                          checked={rowCount > 0 && numSelected === rowCount}
                          onChange={onSelectAllClick}
                        />
                        <span
                          className="checkmark"
                          style={{ marginTop: '3px' }}
                        ></span>
                      </label>
                    </Box>
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={createSortHandler(headCell.id)}
                    >
                      <div>{headCell.label}</div>
                      {orderBy === headCell.id ? (
                        <img
                          src={sortAscending}
                          alt="sortAscending"
                          className={
                            order === 'asc'
                              ? 'rotatefilterimage'
                              : 'filterimage'
                          }
                        />
                      ) : (
                        <img
                          src={sortAscending}
                          alt="sortAscending"
                          className={'filterimage'}
                        />
                      )}
                      {orderBy === headCell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === 'desc'
                            ? 'sorted descending'
                            : 'sorted ascending'}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </Box>
                ) : (
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={createSortHandler(headCell.id)}
                  >
                    {headCell.id === 'processedDate' ? (
                      <Box sx={{ minWidth: '9.3rem !important' }}>
                        {headCell.label}
                      </Box>
                    ) : (
                      <div>{headCell.label}</div>
                    )}
                    {orderBy === headCell.id ? (
                      <img
                        src={sortAscending}
                        alt="sortAscending"
                        className={
                          order === 'asc' ? 'rotatefilterimage' : 'filterimage'
                        }
                      />
                    ) : (
                      <img
                        src={sortAscending}
                        alt="sortAscending"
                        className={'filterimage'}
                      />
                    )}
                    {orderBy === headCell.id ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === 'desc'
                          ? 'sorted descending'
                          : 'sorted ascending'}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                )
              ) : headCell.id == 'action' && isCustomColumn ? (
                <Stack
                  direction={'row'}
                  justifyContent={'space-evenly'}
                  alignItems={'center'}
                >
                  <div>{headCell.label}</div>

                  <Box
                    sx={{ cursor: 'pointer' }}
                    aria-describedby={customColumn}
                    onClick={handleCustomColumn}
                  >
                    <Stack
                      sx={{
                        width: '3rem',
                        backgroundColor: 'rgb(233, 238, 244)',
                        px: 0.2,
                        py: 1,
                        borderRadius: '4px',
                      }}
                      direction={'row'}
                      justifyContent={'space-around'}
                    >
                      <img src={columnIcon} alt="Column Icon" />
                      <img
                        src={columnArrowIcon}
                        alt="Column Arrow Icon"
                        className={open ? 'column-arrow-image-rotate' : ''}
                      />
                    </Stack>
                  </Box>
                  <Popover
                    id={customColumn}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    sx={{
                      transform: 'translate(-40px, 10px) !important',
                    }}
                  >
                    <Box>
                      <Typography sx={{ p: 2, fontSize: '12px' }}>
                        {'Customize Columns'}
                      </Typography>
                      <Box>
                        {!!isNotChangeable && (
                          <Typography
                            variant="h4"
                            sx={{
                              px: 2,
                              pb: 2,
                              fontSize: '12px',
                              color: 'rgba(102, 112, 133, 1)',
                              fontWeight: 400,
                            }}
                          >
                            {'Select minimum 4 columns'}
                          </Typography>
                        )}
                        <Box
                          sx={{
                            fontSize: '12px',
                            color: 'rgba(0, 73, 143, 1)',
                            width: '100%',
                          }}
                          className={'popover-box'}
                        >
                          <FormControlLabel
                            sx={{ fontSize: '12px !important', width: '100%' }}
                            className={'popover-form-control'}
                            control={
                              <Checkbox
                                sx={{ fontSize: '12px !important' }}
                                checked={setAllchecked}
                                onChange={handleChange}
                                size="small"
                              />
                            }
                            label={'Show All Columns'}
                          />
                        </Box>
                        <Stack direction={'column'} sx={{ width: '100%' }}>
                          {headCellsState.map((item: any, index: any) => {
                            if (item?.checkBox) {
                              return (
                                <Box
                                  key={item?.id}
                                  className="popover-box"
                                  sx={{ width: '100%' }}
                                >
                                  <FormControlLabel
                                    sx={{
                                      fontSize: '12px !important',
                                      width: '100%',
                                    }}
                                    key={index}
                                    className={'popover-form-control'}
                                    control={
                                      <Checkbox
                                        sx={{ fontSize: '12px !important' }}
                                        checked={item?.isChecked}
                                        onChange={handleCheckBoxChange(index)}
                                        size="small"
                                      />
                                    }
                                    label={item?.label}
                                  />
                                </Box>
                              )
                            } else {
                              return null
                            }
                          })}
                        </Stack>
                      </Box>
                      {/* {!!isNotChangeable && (
                        <Typography
                          variant="h4"
                          sx={{
                            px: 2,
                            pb: 2,
                            fontSize: '12px',
                            color: 'rgba(102, 112, 133, 1)',
                            fontWeight: 400,
                          }}
                        >
                          {'Select minimum 4 columns'}
                        </Typography>
                      )}
                      <Box
                        sx={{
                          fontSize: '12px',
                          color: 'rgba(0, 73, 143, 1)',
                          width: '100%',
                        }}
                        className={'popover-box'}
                      >
                        <FormControlLabel
                          sx={{ fontSize: '12px !important', width: '100%' }}
                          className={'popover-form-control'}
                          control={
                            <Checkbox
                              sx={{ fontSize: '12px !important' }}
                              checked={setAllchecked}
                              onChange={handleChange}
                              size="small"
                            />
                          }
                          label={'Show All Columns'}
                        />
                      </Box>
                      <Stack direction={'column'} sx={{ width: '100%' }}>
                        {headCellsState.map((item: any, index: any) => {
                          if (item?.checkBox) {
                            return (
                              <Box
                                key={item?.id}
                                className="popover-box"
                                sx={{ width: '100%' }}
                              >
                                <FormControlLabel
                                  sx={{
                                    fontSize: '12px !important',
                                    width: '100%',
                                  }}
                                  key={index}
                                  className={'popover-form-control'}
                                  control={
                                    <Checkbox
                                      sx={{ fontSize: '12px !important' }}
                                      checked={item?.isChecked}
                                      onChange={handleCheckBoxChange(index)}
                                      size="small"
                                    />
                                  }
                                  label={item?.label}
                                />
                              </Box>
                            )
                          } else {
                            return null
                          }
                        })}
                      </Stack> */}
                    </Box>
                    <Stack
                      direction={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      px={2}
                      py={1}
                    >
                      <Box sx={{ mr: 1 }}>
                        <OutlinedButton
                          size="sm"
                          type={'button'}
                          handleClick={handleResetButton}
                          mode={'reset'}
                          label={'Reset'}
                        />
                      </Box>
                      <Box>
                        <ContainedButton
                          size="sm"
                          type={'button'}
                          isDisabled={isNotChangeable}
                          handleClick={handleAppplyButton}
                          label={'Apply'}
                        />
                      </Box>
                    </Stack>
                  </Popover>
                </Stack>
              ) : (
                <span>{headCell.label}</span>
              )}
            </TableCell>
          ))}
      </TableRow>
    </TableHead>
  )
}

type EnhancedTableHeadTypes = {
  numSelected: number
  onRequestSort: (_: any, __: any) => void
  onSelectAllClick: (_: any) => void
  order: 'asc' | 'desc'
  orderBy: string
  rowCount: number
  headCells: any[]
  isSelectable: boolean
  isCustomColumn: boolean
  isSingleCheck?: boolean
  headCellsCustomized?: any[]
  setHeadCellsCustomized: (_: any) => void
  isTableSticky?: boolean
}

type EnhancedTableTypes = {
  page?: number
  rowsPerPage?: number
  handleChangePage?: (_: any, __: any) => void
  handleChangeRowsPerPage?: (_: any) => void
  headCells: any[]
  handleRequestSort?: (_: any, __: any) => void
  rows: any[]
  order: 'asc' | 'desc'
  orderBy: string
  isSelectable: boolean
  selected?: any
  setSelected?: (_: any) => void
  total?: number
  actionFunction?: (
    _: string,
    __: string,
    ___: string,
    ____: string,
    _____?: string
  ) => void
  resendMail?: (_: any) => void
  isEdit?: boolean
  isView?: boolean
  isViewDocument?: boolean
  isGenerateDraft?: boolean
  isReExamine?: boolean
  isViewOrPreview?: boolean
  isMore?: boolean
  isExamine: boolean
  isDelete?: boolean
  isMail?: boolean
  isActionButton?: boolean
  setActive?: (_: string, __: boolean) => void
  isLoading?: boolean
  Openmodal?: (_: string, __: string) => void
  isPagination?: boolean
  isNoRecordFound?: boolean
  isSingleCheck?: boolean
  maxHeightValue?: number
  isLogo?: boolean
  actionWidth?: string
  isNotified?: boolean
  isCustomColumn?: boolean
  isTableSticky?: boolean
  moreButtons?: any
  EobGeneratedmoreButtons?: any
}
type TableCellType = {
  row: any
  head: any
  i: number
  isMail: boolean
  resendMail?: (_: any) => void
  isView: boolean
  isViewDocument?: boolean
  isGenerateDraft?: boolean
  isReExamine?: boolean
  isViewOrPreview?: boolean
  isExamine: boolean
  actionFunction?: (
    _: string,
    __: string,
    ___: string,
    ____: string,
    _____?: string
  ) => void
  isEdit?: boolean
  isDelete?: boolean
  isMore?: boolean
  isActionButton?: boolean
  Openmodal?: (_: string, __: string) => void
  setActive?: (_: string, __: boolean) => void
  isLogo?: boolean
  actionWidth?: string
  isNotified?: boolean
  moreButtons?: any
  EobGeneratedmoreButtons?: any
  isSelectable?: boolean
  isItemSelected?: boolean
  handleSelectRow?: (_: any, __: string) => void
}
const EnhancedTableCell = ({
  row,
  head,
  i,
  isMail,
  resendMail,
  isView,
  isViewDocument,
  isGenerateDraft,
  isReExamine,
  isViewOrPreview,
  isExamine,
  actionFunction,
  isEdit,
  isMore,
  isDelete,
  isActionButton,
  Openmodal,
  setActive,
  isLogo = false,
  actionWidth,
  isNotified = false,
  moreButtons,
  isSelectable,
  EobGeneratedmoreButtons,
  isItemSelected,
  handleSelectRow,
}: TableCellType) => {
  const [flg_mailVerified, setFlg_mailVerified] = React.useState(false)
  const [isHover_mailVerified, setIsHover_mailVerified] = React.useState(false)

  const [flg_isView, setFlg_isView] = React.useState(false)
  const [isHover_isView, setIsHover_isView] = React.useState(false)

  const [flg_isViewDocument, setFlg_isViewDocument] = React.useState(false)
  const [isHover_isViewDocument, setIsHover_isViewDocument] =
    React.useState(false)

  const [flg_isGenerateDraft, setFlg_isGenerateDraft] = React.useState(false)
  const [isHover_isGenerateDraft, setIsHover_isGenerateDraft] =
    React.useState(false)

  const [flg_isExamine, setFlg_isExamine] = React.useState(false)
  const [isHover_isExamine, setIsHover_isExamine] = React.useState(false)

  const [flg_isEdit, setFlg_isEdit] = React.useState(false)
  const [isHover_isEdit, setIsHover_isEdit] = React.useState(false)

  const [flg_isDelete, setFlg_isDelete] = React.useState(false)
  const [isHover_isDelete, setIsHover_isDelete] = React.useState(false)

  const theme = useTheme()
  const hexToRgb = (hex: any) => {
    if (!hex) return
    const bigint = parseInt(hex.slice(1), 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `rgba(${r}, ${g}, ${b}, 0.1)`
  }
  const user = useAppSelector((state) => state?.user?.user)
  const backgroundColor: any = ''

  const shapeStyles = {
    width: 8,
    height: 8,
    display: 'inline-block',
    marginRight: '10px',
    textAlign: 'center',
  }
  const shapeCircleStyles = { borderRadius: '50%' }
  const cpt_options = [
    {
      value: 'F',
      name: 'Female',
    },
    {
      value: 'M',
      name: 'Male',
    },
    {
      value: 'T',
      name: 'Transgender',
    },
  ]
  const handleCptCodeChange = () => {}
  const handleModifierChange = () => {}
  const Info = Assets.info
  // if(head.id === "status")
  //  backgroundColor = row?.color_code ? user?.role ===IRoles.DRIVER ? Driver_TICKET_STATUS[row[head.id]]?.color_code ? hexToRgb(Driver_TICKET_STATUS[row[head.id]]?.color_code) : "" : hexToRgb(row?.color_code) : "";
  const IOSSwitch = styled((props: SwitchProps, checked: any) => (
    // <Switch
    //   focusVisibleClassName=".Mui-focusVisible"
    //   disableRipple
    //   {...props}
    // />
    <Switch
      checked={checked}
      {...props}
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      // onChange={onchange}
      // inputProps={{ "aria-label": "controlled" }}
      sx={{ color: '#283891' }}
    />
  ))(({ theme }) => ({
    width: 37,
    height: 22,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor:
            theme.palette.mode === 'dark'
              ? '#2ECA45'
              : theme.palette.primary.buttonColor,
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      marginTop: 1,
      width: 15,
      height: 15,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }))
  if (row[head]) {
    return (
      <Typography variant="subtitle1" fontWeight="bold">
        {row[head.id]}
      </Typography>
    )
  }

  switch (head.id) {
    case 'name':
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            fontWeight: '500',
          }}
        >
          {row[head.id]}
        </div>
      )
    case 'code':
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            fontWeight: row?.isRead && isNotified ? 600 : 500,
            // color: (row?.isRead && isNotified)? theme.palette.primary.iconColor : "inherit"
            minWidth: '100px',
          }}
        >
          {head.info ? (
            <div>
              <Box sx={{ display: 'inline-block', width: '45px' }}>
                {row[head.id]}
              </Box>
              <Box sx={{ display: 'inline-block', marginLeft: '.875rem' }}>
                <InfoTooltip
                  title={row['description']}
                  placement={head.info.position}
                >
                  <IconButton sx={{ padding: '0px !important' }}>
                    <Info />
                  </IconButton>
                </InfoTooltip>
              </Box>
            </div>
          ) : (
            row[head.id]
          )}
        </div>
      )
    case 'ticket_type':
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            fontWeight: row?.isRead && isNotified ? 600 : 500,
            // color: (row?.isRead && isNotified)? theme.palette.primary.iconColor : "inherit"
          }}
        >
          {row[head.id]}
        </div>
      )
    case 'city':
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            fontWeight: row?.isRead && isNotified ? 600 : 500,
            // color: (row?.isRead && isNotified)? theme.palette.primary.iconColor : "inherit"
          }}
        >
          {row[head.id]}
        </div>
      )

    case 'claimNumber':
      return (
        <Box
          sx={{
            paddingLeft: '8px !important',
          }}
        >
          {row[head.id]}
        </Box>
      )

    case 'location_city':
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            fontWeight: row?.isRead && isNotified ? 600 : 500,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '30rem',
            color:
              row?.isRead && isNotified
                ? theme.palette.primary.iconColor
                : 'inherit',
          }}
        >
          {row[head.id].map((item: any, i: number) => {
            const city =
              row[head.id].length - 1 === i
                ? item.city?.name
                : `${item.city?.name}, `
            return city
          })}
        </div>
      )

    case 'firstname':
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            fontWeight: '500',
          }}
        >
          {row[head.id]}
        </div>
      )

    case 'cost':
      return (
        <>
          <span style={{ fontSize: '1.1rem', marginRight: '5px' }}>$</span>
          {row[head.id]}
        </>
      )
    case 'action':
      return (
        <Box display={'flex'} justifyContent="center">
          <Stack
            flexDirection="row"
            sx={{ width: actionWidth ? actionWidth : '100%' }}
            justifyContent="space-evenly"
          >
            {isMail && (
              <>
                {!row?.is_email_verified ? (
                  <Tooltip
                    title="Resend Verification Email"
                    open={!flg_mailVerified && isHover_mailVerified}
                  >
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      // aria-controls={open ? "long-menu" : undefined}
                      // aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={() => {
                        setFlg_mailVerified(!flg_mailVerified)
                        resendMail && resendMail(row.id)
                      }}
                      onMouseOver={() => setIsHover_mailVerified(true)}
                      onMouseLeave={() => setIsHover_mailVerified(false)}
                    >
                      {/* <MailOutlineIcon sx={{ color: "#283891" }} /> */}
                      {/* <img src={ResendMail} width="24" /> */}
                    </IconButton>
                  </Tooltip>
                ) : (
                  <>
                    <Tooltip
                      title="Mail Verified"
                      open={!flg_mailVerified && isHover_mailVerified}
                    >
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        // aria-controls={open ? "long-menu" : undefined}
                        // aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onMouseOver={() => setIsHover_mailVerified(true)}
                        onMouseLeave={() => setIsHover_mailVerified(false)}
                      >
                        {/* <MailOutlineIcon
                        sx={{ color: "#283891", opacity: "0.4" }}
                      /> */}
                        {/* <img
                          src={MailVerified}
                          style={{ opacity: '0.4' }}
                          width="24"
                        /> */}
                      </IconButton>
                    </Tooltip>
                  </>
                )}
              </>
            )}
            {isView && (
              <Tooltip title="View" open={!flg_isView && isHover_isView}>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  // aria-controls={open ? "long-menu" : undefined}
                  // aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={(event) => {
                    event.stopPropagation()
                    setFlg_isView(!flg_isView)
                    setTimeout(() => {
                      actionFunction &&
                        actionFunction(
                          row?.id,
                          row?.cptId,
                          row.billNumber,
                          'view'
                        )
                    }, 0)
                  }}
                  onMouseOver={() => setIsHover_isView(true)}
                  onMouseLeave={() => setIsHover_isView(false)}
                >
                  <img src={viewIcon} width="24" />
                </IconButton>
              </Tooltip>
            )}

            {isViewDocument && (
              <Tooltip
                title="View Document"
                open={!flg_isViewDocument && isHover_isViewDocument}
              >
                <IconButton
                  aria-label="more"
                  id="long-button"
                  // aria-controls={open ? "long-menu" : undefined}
                  // aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={(event) => {
                    event.stopPropagation()
                    setFlg_isViewDocument(!flg_isView)
                    setTimeout(() => {
                      actionFunction &&
                        actionFunction(
                          row?.id,
                          row?.cptId,
                          row.billNumber,
                          'document view'
                        )
                    }, 0)
                  }}
                  onMouseOver={() => setIsHover_isViewDocument(true)}
                  onMouseLeave={() => setIsHover_isViewDocument(false)}
                >
                  <img src={documentViewIcon} width="24" />
                </IconButton>
              </Tooltip>
            )}
            {isGenerateDraft && (
              <Tooltip
                title="Generate Draft"
                open={!flg_isGenerateDraft && isHover_isGenerateDraft}
              >
                <IconButton
                  aria-label="more"
                  id="long-button"
                  // aria-controls={open ? "long-menu" : undefined}
                  // aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={(event) => {
                    event.stopPropagation()
                    setFlg_isGenerateDraft(!flg_isGenerateDraft)
                    setTimeout(() => {
                      actionFunction &&
                        actionFunction(
                          row?.id,
                          row?.cptId,
                          row.billNumber,
                          'generate draft'
                        )
                    }, 0)
                  }}
                  onMouseOver={() => setIsHover_isGenerateDraft(true)}
                  onMouseLeave={() => setIsHover_isGenerateDraft(false)}
                >
                  <img src={draftIcon} width="24" />
                </IconButton>
              </Tooltip>
            )}
            {isViewOrPreview && (
              <Tooltip
                title={
                  row['status'] === 'DENIED'
                    ? 'Preview Document'
                    : 'View Document'
                }
              >
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-haspopup="true"
                  onClick={(event) => {
                    event.stopPropagation()

                    setTimeout(() => {
                      actionFunction &&
                        actionFunction(
                          row?.id,
                          row?.cptId,
                          row.billNumber,
                          'view-preview-document',
                          row?.status
                        )
                    }, 0)
                  }}
                >
                  <img
                    src={
                      row['status'] === 'DENIED'
                        ? previewIcon
                        : viewDocumentIcon
                    }
                    width="24"
                  />
                </IconButton>
              </Tooltip>
            )}
            {isReExamine && (
              <Tooltip title="Re-Examine">
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-haspopup="true"
                  disabled={row['status'] === 'DOC_GENERATED' ? true : false}
                  onClick={(event) => {
                    event.stopPropagation()
                    setTimeout(() => {
                      actionFunction &&
                        actionFunction(
                          row?.id,
                          row?.cptId,
                          row.billNumber,
                          're-examine'
                        )
                    }, 0)
                  }}
                >
                  <img src={reExamineIcon} width="24" />
                </IconButton>
              </Tooltip>
            )}
            {isEdit && (
              <Tooltip title="Edit" open={!flg_isEdit && isHover_isEdit}>
                <IconButton
                  aria-label="more"
                  // disabled={
                  //   row?.status === TICKET_STATUS.CLOSED ||
                  //   row?.status === TICKET_STATUS.DECISION_AWARDED
                  // }
                  id="long-button"
                  // aria-controls={open ? "long-menu" : undefined}
                  // aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={() => {
                    setFlg_isEdit(!flg_isEdit)
                    setTimeout(() => {
                      actionFunction &&
                        actionFunction(row?.id, row?.id, row.id, 'edit')
                    }, 0)
                  }}
                  onMouseOver={() => setIsHover_isEdit(true)}
                  onMouseLeave={() => setIsHover_isEdit(false)}
                >
                  <EditOutlinedIcon
                    sx={{
                      color: theme.palette.primary.buttonColor,
                    }}
                  />
                </IconButton>
              </Tooltip>
            )}

            {isDelete && (
              <Tooltip title="Delete" open={!flg_isDelete && isHover_isDelete}>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  // aria-controls={open ? "long-menu" : undefined}
                  // aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={() => {
                    setFlg_isDelete(!flg_isDelete)
                    setTimeout(() => {
                      actionFunction &&
                        actionFunction(row?.id, row?.id, row.id, 'delete')
                    }, 0)
                  }}
                  onMouseOver={() => setIsHover_isDelete(true)}
                  onMouseLeave={() => setIsHover_isDelete(false)}
                >
                  <DeleteOutlineIcon
                    sx={{ color: theme.palette.primary.buttonColor }}
                  />
                  {/* <img src={deleteIcon} width="24" /> */}
                </IconButton>
              </Tooltip>
            )}
            {isMore && row.status == 'DOC_GENERATED' && (
              <MoreIcon
                moreItems={EobGeneratedmoreButtons}
                selectedID={row?.id}
                data={row}
              />
            )}
            {isMore && row.status != 'DOC_GENERATED' && (
              <MoreIcon
                moreItems={moreButtons}
                selectedID={row?.id}
                data={row}
              />
            )}
            {isActionButton && (
              <Box>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ minWidth: '4rem', padding: '0.5rem 1rem' }}
                  onClick={() => {
                    actionFunction &&
                      actionFunction(row?.id, row?.id, row.id, 'Accept')
                  }}
                >
                  {' '}
                  Accept{' '}
                </Button>
                <Button
                  sx={{ minWidth: '4rem', padding: '0.5rem 1rem', ml: 1 }}
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    actionFunction &&
                      actionFunction(row?.id, row?.id, row.id, 'Reject')
                  }}
                >
                  {' '}
                  Reject{' '}
                </Button>
              </Box>
            )}

            {isExamine && (
              <Tooltip
                title="Examine"
                open={!flg_isExamine && isHover_isExamine}
              >
                <IconButton
                  aria-label="more"
                  id="long-button"
                  // aria-controls={open ? "long-menu" : undefined}
                  // aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={() => {
                    setFlg_isExamine(!flg_isExamine)
                    setTimeout(() => {
                      actionFunction &&
                        actionFunction(
                          row?.id,
                          row?.cptId,
                          row.billNumber,
                          'examine'
                        )
                    }, 0)
                  }}
                  onMouseOver={() => setIsHover_isExamine(true)}
                  onMouseLeave={() => setIsHover_isExamine(false)}
                >
                  {/* <RemoveRedEyeOutlinedIcon
                    sx={{ color: theme.palette.primary.buttonColor }}
                  /> */}
                  <img src={examineIcon} width="20" />
                </IconButton>
              </Tooltip>
            )}
          </Stack>
        </Box>
      )
    case 'dob':
      return dateFormat(row[head.id])

    case 'driver_license_number':
      return formatLicense(row[head.id])
    case 'type':
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <AccountCircleIcon sx={{ color: '#a5a5a5' }} fontSize="large" />
          &nbsp; &nbsp;
          {row[head.id]}
        </div>
      )
    case 'filesize':
      return row[head.id]
    case 'mobile_number':
      return parsePhoneNumberformat(row.country_code, row?.mobile_number)
    case 'icons':
      return (
        <Stack
          direction={'row'}
          justifyContent={'space-evenly'}
          className="showIcon"
        >
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <FileDownloadIcon />
          </IconButton>
          <IconButton>
            <BorderColorIcon />
          </IconButton>
        </Stack>
      )
    case 'button':
      return (
        <>
          {' '}
          <IconButton
            aria-label="more"
            id="long-button"
            // aria-controls={open ? "long-menu" : undefined}
            // aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={() => {
              Openmodal && Openmodal(row.id, 'open')
            }}
          >
            <IosShareIcon sx={{ color: theme.palette.primary.buttonColor }} />
          </IconButton>
        </>
      )
    // case "email_verified":
    //   return (
    //     <div
    //       style={{
    //         display: "flex",
    //         justifyContent: "flex-start",
    //         alignItems: "center",
    //       }}
    //     >
    //       {!row?.email_verified ? (
    //         <MailOutlineIcon
    //           sx={{ color: "#2196f3" }}
    //           onClick={() => resendMail && resendMail(row.id)}
    //         />
    //       ) : (
    //         <></>
    //       )}
    //     </div>
    //   );
    case 'is_active':
      return (
        <>
          <IOSSwitch
            checked={row.is_active}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setActive && setActive(row.id, event.target.checked)
            }
            // handleCheckChange={(event:) =>
            //   setActive && setActive(event.target.checked)
            // }
            // onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            //   setActive && setActive(event.target.checked)
            // }
            // inputProps={{ "aria-label": "controlled" }}
            // sx={{ color: "#283891" }}
          />
        </>
      )
    case 'created_at':
      return (
        <div
          style={{
            fontWeight: row?.isRead && isNotified ? 600 : 500,
            // color: (row?.isRead && isNotified)? theme.palette.primary.iconColor : "inherit"
          }}
        >
          {dateFormat(row[head.id])}
        </div>
      )
    case 'billNumber':
      return (
        <div
          style={{
            fontWeight: row?.isRead && isNotified ? 600 : 500,
            // color: (row?.isRead && isNotified)? theme.palette.primary.iconColor : "inherit"
          }}
        >
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
          >
            {isSelectable && row['status'] === 'DENIED' ? (
              // <Checkbox
              //   color="primary"
              //   checked={isItemSelected}
              //   inputProps={{
              //     'aria-labelledby': `${head.id}-${row[head.id]}`,
              //   }}
              //   sx={{
              //     '& .MuiSvgIcon-root': {
              //       display: 'none',
              //     },
              //   }}
              // />
              <Box>
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={isItemSelected}
                    onChange={() => {
                      if (handleSelectRow) {
                        handleSelectRow(event, row.id)
                      }
                    }}
                  />
                  <span className="checkmark"></span>
                </label>
              </Box>
            ) : (
              // <TableCheckbox
              //   isChecked={isItemSelected ? isItemSelected : false}
              // />
              <Box
                sx={{
                  borderRadius: `50%`,
                  backgroundColor: 'rgba(0,74,144,10%) !important',
                  paddingX: 1.5,
                  paddingY: 1,
                  ml: 1.5,
                  mr: 1.5,
                  my: 1.5,
                }}
              >
                <img
                  src={reportIcon}
                  width="16"
                  style={{ paddingTop: '4px' }}
                />
              </Box>
            )}
            <Box
              sx={{
                color: '#101828',
                marginTop:
                  isSelectable && row['status'] === 'DENIED' ? '8px' : '0px',
              }}
            >
              {row[head.id]}
            </Box>
          </Stack>
        </div>
      )
    case 'receivedDate':
      console.log('Received date: ', row[head.id])
      return (
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'flex-start'}
        >
          {row[head.id] !== '-' ? (
            <>
              <Box
                sx={{
                  ml: 0.5,
                  mr: 0.5,
                  mt: 0.5,
                }}
              >
                <img src={calendarIcon} width="16" />
              </Box>
              <Box sx={{ lineHeight: '.5' }}>
                {ReceivedDateConverter(row[head.id])}
              </Box>
            </>
          ) : (
            <>{row[head.id]}</>
          )}
        </Stack>
      )

    case 'processedDate':
      return row[head.id] != '-' ? (
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'flex-start'}
          sx={{ width: '11rem' }}
        >
          <Box
            sx={{
              ml: 0.5,
              mr: 0.5,
              mt: 0.5,
            }}
          >
            <img src={calendarIcon} width="16" />
          </Box>
          <Box sx={{ lineHeight: '.5' }}>
            {ReceivedDateConverter(row[head.id])}
          </Box>
        </Stack>
      ) : (
        row[head.id]
      )
    // <Stack
    //   direction={'row'}
    //   alignItems={'center'}
    //   justifyContent={'flex-start'}
    // >
    //   <Box
    //     sx={{
    //       ml: 0.5,
    //       mr: 0.5,
    //       mt: 0.5,
    //     }}
    //   >
    //     <img src={calendarIcon} width="16" />
    //   </Box>
    //   <Box sx={{ lineHeight: '.5' }}>
    //     {ReceivedDateConverter(row[head.id])}
    //   </Box>
    // </Stack>

    case 'status':
      return (
        <Box
          sx={{
            minWidth: '12rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component={'div'}
            sx={{
              px: '10px',
              py: '5px',
              backgroundColor:
                row[head.id] == 'PROCESSED' || row[head.id] === 'DENIED'
                  ? '#EFF8FF'
                  : '#ECFDF3',
              color:
                row[head.id] == 'PROCESSED' || row[head.id] === 'DENIED'
                  ? '#175CD3'
                  : '#027A48',
              borderRadius: '30px',
              marginRight: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              fontSize: '12px',
              fontWeight: 500,
            }}
          >
            <Box
              component="span"
              sx={{
                ...shapeStyles,
                ...shapeCircleStyles,
                backgroundColor:
                  row[head.id] == 'PROCESSED' || row[head.id] === 'DENIED'
                    ? '#175CD3'
                    : '#027A48',
              }}
            ></Box>
            {row[head.id] == 'PROCESSED' || row[head.id] === 'DENIED'
              ? 'Bill Processed'
              : row[head.id] === 'DOC_GENERATED'
              ? 'Bill DOC Generated'
              : 'Draft Generated'}
          </Box>
        </Box>
      )
    case 'allowedBillAmount':
      return (
        <Stack
          direction={'row'}
          justifyContent={'flex-start'}
          alignItems={'center'}
        >
          <Box
            component="span"
            sx={{
              ...shapeStyles,
              ...shapeCircleStyles,
              backgroundColor: '#12B76A',
            }}
          ></Box>
          <Box>{`$${row[head.id]}`}</Box>
        </Stack>
      )

    case 'totalBillAmount':
      return (
        <Stack
          direction={'row'}
          justifyContent={'flex-start'}
          alignItems={'center'}
        >
          <Box
            component="span"
            sx={{
              ...shapeStyles,
              ...shapeCircleStyles,
              backgroundColor: '#00498F',
            }}
          ></Box>
          <Box>{`$${row[head.id]}`}</Box>
        </Stack>
      )
    case 'updatedDate':
      return (
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'flex-start'}
        >
          <Box
            sx={{
              ml: 0.5,
              mr: 0.5,
              mt: 0.5,
            }}
          >
            <img src={calendarIcon} width="16" />
          </Box>
          <Box sx={{ lineHeight: '.5' }}>
            {updatedDateConverter(row[head.id])}
          </Box>
        </Stack>
      )

    case 'isDocumentGenerated':
      return (
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'flex-start'}
        >
          <Box
            sx={{
              ml: 0.5,
              mr: 0.5,
              mt: 0.5,
            }}
          >
            {row[head.id] ? (
              <img src={acceptedIcon} width="16" />
            ) : (
              <HighlightOffIcon
                sx={{ width: 20, color: '#E44136', fontWeight: 300 }}
              />
            )}
          </Box>
          <Box sx={{ lineHeight: '.5' }}>{row[head.id] ? 'Yes' : 'No'}</Box>
        </Stack>
      )
    case 'cpt_type':
      return (
        <div>
          <SelectField
            fieldName=""
            options={cpt_options}
            values={''}
            name="cpt_type"
            handleChange={handleCptCodeChange}
            errors={undefined}
            isRequired={false}
          />
        </div>
      )
    case 'description':
      return (
        <Box
          component={'div'}
          title={row[head.id]}
          sx={{
            maxWidth: '550px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {row[head.id]}
        </Box>
      )
    case 'provider':
      return (
        <Box
          component={'div'}
          title={row[head.id]}
          sx={{
            maxWidth: '250px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {row[head.id]}
        </Box>
      )
    case 'modifier':
      return (
        <div>
          <InputField
            fieldName=""
            values={''}
            name="modifier"
            errors={undefined}
            handleChange={handleModifierChange}
            length={45}
            isRequired={false}
          />
        </div>
      )
    case 'region':
      return getRegion(row[head.id])
    default:
      return head.isDate ? (
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'flex-start'}
        >
          <Box
            sx={{
              ml: 0.5,
              mr: 0.5,
              mt: 0.5,
            }}
          >
            <img src={calendarIcon} width="16" />
          </Box>
          <Box sx={{ lineHeight: '.5' }}>
            {ReceivedDateConverter(row[head.id])}
          </Box>
        </Stack>
      ) : (
        row[head.id]
      )
  }
}

const isEqual = (prev: TableCellType, next: TableCellType) => {
  // if(prev.i)
  return true
}

const TableCellMemo = React.memo(EnhancedTableCell, isEqual)
export default function EnhancedTable(props: EnhancedTableTypes) {
  const {
    page = 0,
    rowsPerPage = 10,
    handleChangePage,
    handleChangeRowsPerPage = () => {},
    headCells = [],
    handleRequestSort = () => {},
    rows = [],
    order,
    orderBy,
    isSelectable,
    setSelected,
    selected = [],
    total = 0,
    actionFunction,
    resendMail,
    isEdit = false,
    isView = false,
    isViewDocument = false,
    isGenerateDraft = false,
    isReExamine = false,
    isViewOrPreview = false,
    isExamine = false,
    isDelete = false,
    isActionButton = false,
    isMail = false,
    isMore = false,
    isLoading = false,
    isPagination = true,
    isNoRecordFound = true,
    isCustomColumn = false,
    Openmodal,
    setActive,
    isSingleCheck,
    maxHeightValue = 260,
    isLogo = false,
    actionWidth,
    isNotified = false,
    isTableSticky = true,
    moreButtons,
    EobGeneratedmoreButtons,
  } = props
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [headCellsCustomized, setHeadCellSCustomized] =
    React.useState(headCells)
  const open = Boolean(anchorEl)
  const handleOpen = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const location = useLocation()
  const { pathname } = location
  const theme = useTheme()
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'))
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // backgroundColor: theme.palette.background.paper,
    td: {
      borderBottom: '1px solid #e9e8e8',
    },
    '.MuiTableCell-root': {
      paddingTop: '5px',
      paddingBottom: '5px',
    },
    '&.Mui-selected': {
      backgroundColor: 'transparent !important',
    },
  }))
  const handleSelectAllClick = (event: any) => {
    if (event.target.checked) {
      const newSelected = rows.map((n: any) => n.id)
      setSelected && setSelected(newSelected)
      return
    }
    setSelected && setSelected([])
  }

  const handleClick = (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    name: string
  ) => {
    if (!isSingleCheck) {
      const selectedIndex = selected.indexOf(name)
      let newSelected: any = []

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name)
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1))
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1))
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        )
      }

      setSelected && setSelected(newSelected)
    } else {
      const value = name !== selected ? name : ''
      setSelected && setSelected(value)
    }
  }

  const isSelected = (name: string) => selected.indexOf(name) !== -1

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - total) : 0

  const visibleRows = React.useMemo(() => rows, [rows])

  const height = maxHeightValue

  const tableContainerRef = React.useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const tooltip = document.querySelector("[role='tooltip']") as HTMLElement
    if (tooltip) {
      tooltip.style.display = 'none'
    }
  }

  React.useEffect(() => {
    const tableContainer = tableContainerRef.current
    if (tableContainer) {
      tableContainer.addEventListener('scroll', handleScroll)

      // Clean up
      return () => {
        tableContainer.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <Box sx={{ width: '100%', mt: 1 }}>
      <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: 0 }}>
        <TableContainer
          className="table-container table-container-custom-column"
          sx={{
            maxHeight: matchDownMD
              ? `calc(100vh - ${height + 70}px)`
              : `calc(100vh - ${height}px)`,
            maxWidth: '100vw',
          }}
          ref={tableContainerRef}
        >
          <Table
            stickyHeader
            sx={{ minWidth: 750, paddingBottom: '5px' }}
            aria-labelledby="tableTitle"
            size={'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows?.length ?? 0}
              headCells={headCells}
              isSingleCheck={isSingleCheck}
              headCellsCustomized={headCellsCustomized}
              setHeadCellsCustomized={(data) => setHeadCellSCustomized(data)}
              isCustomColumn={isCustomColumn}
              isSelectable={isSelectable}
              isTableSticky={isTableSticky}
            />
            {isLoading ? (
              <TableRow sx={{ height: '260px !important' }}>
                <TableCell
                  colSpan={
                    isSelectable ? headCells.length + 1 : headCells.length
                  }
                  align="center"
                >
                  <Loader />
                </TableCell>
              </TableRow>
            ) : (
              <TableBody>
                {visibleRows.map((row: any, index: number) => {
                  const isItemSelected = isSelected(row.id)
                  const labelId = `enhanced-table-checkbox-${index}`

                  return (
                    <StyledTableRow
                      // onClick={(event) =>
                      //   isSelectable ? handleClick(event, row.id) : ''
                      // }
                      className={
                        isTableSticky
                          ? 'table-custom-column'
                          : 'table-non-sticky'
                      }
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      sx={{
                        //cursor: isSelectable ? 'pointer' : 'default',
                        backgroundColor:
                          row?.isRead && isNotified
                            ? '#ebf8f896'
                            : theme.palette.background.paper,
                      }}
                      // onMouseEnter={() => setMouseover(true)}
                      // onMouseLeave={() => setMouseover(false)}
                    >
                      {/* {isSelectable && (
                        <TableCell padding="checkbox" sx={{ border: '0' }}>
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                      )} */}
                      {headCellsCustomized.map((head: any, i: number) => (
                        <TableCell
                          key={`table-cell-td-${i}${row.id}`}
                          align="center"
                          sx={{
                            border: '0',
                            minWidth:
                              pathname === '/admin/Reports'
                                ? '13rem'
                                : head.id === 'mobile_number'
                                ? '10rem'
                                : 'auto',
                            borderLeft:
                              row?.isRead && isNotified && i === 0
                                ? '3px solid #0090D6'
                                : 'unset',
                          }}
                        >
                          <TableCellMemo
                            row={row}
                            head={head}
                            i={i}
                            isMail={isMail}
                            resendMail={resendMail}
                            actionFunction={actionFunction}
                            isEdit={isEdit}
                            isView={isView}
                            isViewDocument={isViewDocument}
                            isGenerateDraft={isGenerateDraft}
                            isReExamine={isReExamine}
                            isViewOrPreview={isViewOrPreview}
                            isExamine={isExamine}
                            isMore={isMore}
                            isDelete={isDelete}
                            isActionButton={isActionButton}
                            Openmodal={Openmodal}
                            setActive={setActive}
                            actionWidth={actionWidth}
                            isNotified={isNotified}
                            moreButtons={moreButtons}
                            EobGeneratedmoreButtons={EobGeneratedmoreButtons}
                            isSelectable={isSelectable}
                            isItemSelected={isItemSelected}
                            handleSelectRow={handleClick}
                          />
                        </TableCell>
                      ))}
                    </StyledTableRow>
                  )
                })}
              </TableBody>
            )}
          </Table>
        </TableContainer>
        {!visibleRows?.length && !isLoading && isNoRecordFound && (
          // <TableRow>
          //   <TableCell
          //     colSpan={
          //       isSelectable ? headCells.length + 1 : headCells.length
          //     }
          //     align="center"
          //   >
          <NoRecordFound />
          //   </TableCell>
          // </TableRow>
        )}
        {isPagination && (
          <PaginationComponent
            onChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            total={total}
            rowsPerPageOptions={[5, 10, 25]}
          />
        )}
      </Paper>
    </Box>
  )
}
