import { forwardRef } from 'react'

// material-ui
import { useTheme } from '@mui/material/styles'
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material'

// constant
const headerSX = {
  '& .MuiCardHeader-action': { mr: 0 },
}

// ==============================|| CUSTOM MAIN CARD ||============================== //
type NewType = {
  border?: boolean
  boxShadow?: boolean
  children?: any
  content?: boolean
  contentClass?: string
  contentSX?: object
  darkTitle?: boolean
  secondary?: any
  shadow?: string
  sx?: object
  title?: any
  elevation?: number
}

const MainCard = forwardRef(
  (
    {
      border = true,
      boxShadow,
      children,
      content = true,
      contentClass = '',
      contentSX = {},
      darkTitle,
      secondary,
      shadow,
      sx = {},
      title,
      ...others
    }: NewType,
    ref: any
  ) => {
    const theme = useTheme()

    return (
      <Card
        ref={ref}
        {...others}
        className="------------------------------------------------"
        sx={{
          border: border ? '2px solid' : 'none',
          borderColor: theme.palette.primary.primary200,
          ':hover': {
            boxShadow: boxShadow
              ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)'
              : 'inherit',
          },
          ...sx,
          borderRadius: '8px',
        }}
      >
        {/* card header and action */}
        {title && (
          <CardHeader
            sx={headerSX}
            title={
              darkTitle ? <Typography variant="h3">{title}</Typography> : title
            }
            action={secondary}
          />
        )}

        {/* content & header divider */}
        {title && <Divider />}

        {/* card content */}
        {content && (
          <CardContent sx={contentSX} className={contentClass}>
            {children}
          </CardContent>
        )}
        {!content && children}
      </Card>
    )
  }
)

export default MainCard
