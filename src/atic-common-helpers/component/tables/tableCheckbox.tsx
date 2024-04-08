import { Checkbox, FormControlLabel } from '@mui/material'

interface ITableCheckbox {
  isChecked: boolean
}

const TableCheckbox = ({ isChecked }: ITableCheckbox) => {
  return (
    <>
      {/* <Checkbox
        color="primary"
        checked={isChecked}
        sx={{
          '& .MuiSvgIcon-root': {
            display: 'none',
          },
        }}
        label={}
      /> */}
      <FormControlLabel
        control={<Checkbox checked={isChecked} />}
        label="Label"
      />
    </>
  )
}

export default TableCheckbox
