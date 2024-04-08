import {
  Box,
  Pagination,
  PaginationItem,
  TablePagination,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import './pagination.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Failed } from 'atic-common-helpers/helpers/toast.helper'

interface IPagination {
  page?: number
  onChange?: any
  rowsPerPage?: number
  onRowsPerPageChange?: any
  total?: number
  rowsPerPageOptions?: any[]
}

const PaginationComponent = (props: IPagination) => {
  const theme = useTheme()
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    onChange,
    onRowsPerPageChange,
    page = 1,
    rowsPerPage = 10,
    total = 0,
    rowsPerPageOptions = [10, 20, 35, 50],
  } = props

  const handleChange = (event: any, newPage: number) => {
    onChange(event, newPage - 1)
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={{ md: 'space-between' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      sx={{ px: 2 }}
    >
      <TablePagination
        component="div"
        nextIconButtonProps={{
          children: <ArrowForwardIcon />,
        }}
        backIconButtonProps={{
          children: <ArrowBackIcon />,
        }}
        count={total}
        page={page}
        labelRowsPerPage=""
        sx={{
          '.MuiTablePagination-toolbar': {
            flexDirection: 'row !important',
            pt: 1,
            pb: 1,
            pl: 2,
            pr: 2,
            '& .MuiInputBase-colorPrimary': {
              order: '1 !important',
              marginRight: '1rem !important',
            },
            '.MuiTablePagination-displayedRows': {
              fontSize: '14px !important',
            },
            '.MuiPaginationItem-root': {
              fontSize: '14px !important',
              color: 'rgba(102, 112, 133, 1)',
            },
            '.MuiSelect-select': {
              fontSize: '14px !important',
            },

            // '.MuiTablePagination-actions': {
            //   display: 'none',
            // },
          },
        }}
        // getItemAriaLabel={(page) => `Go to page ${page}`}
        onPageChange={onChange}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
        onRowsPerPageChange={onRowsPerPageChange}
        labelDisplayedRows={(paginationInfo) => {
          if (paginationInfo.count === 1) {
            return `Showing ${paginationInfo.from} - ${paginationInfo.to} of ${paginationInfo.count} `
          }
          return `Showing ${paginationInfo.from} - ${paginationInfo.to} of ${paginationInfo.count} `
        }}
        ActionsComponent={(subProps: any) => {
          const {
            page,
            count,
            rowsPerPage,
            showLastButton,
            getItemAriaLabel,
            showFirstButton,
            onPageChange,
          } = subProps
          const [gotoPage, setGotoPage] = useState(page + 1)

          const handleGotoPage = () => {
            if (
              !!gotoPage &&
              gotoPage >= 1 &&
              gotoPage <= Math.ceil(count / rowsPerPage)
            ) {
              onPageChange(null, gotoPage - 1)
            } else {
              return Failed('Invalid Page Number')
            }
          }
          const handleGotoChange = (e: any) => {
            if (e.target.value.length > 5) {
              return
            } else setGotoPage(parseInt(e.target.value))
          }
          return (
            <div className="gotopage-container">
              <Typography sx={{ mr: 1 }}>{'Go to page'}</Typography>
              <TextField
                type="number"
                value={gotoPage}
                inputProps={{ maxLength: 5, fontSize: '14px' }}
                className={'goToPageInputField'}
                onChange={handleGotoChange}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleGotoPage()
                    setGotoPage(page + 1)
                  }
                }}
              />
            </div>
          )
        }}
      />
      <Pagination
        count={Math.ceil(total / rowsPerPage)}
        page={page === 0 ? 1 : page + 1}
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
        sx={{
          '& .MuiPaginationItem-root.Mui-selected': {
            color: 'rgba(0, 73, 143, 1)',
            backgroundColor: 'rgba(234, 236, 240, 1)',
            borderRadius: '6px',
          },
        }}
        boundaryCount={3}
      />
    </Box>
  )
}

export default PaginationComponent
