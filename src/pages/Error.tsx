import { useDeviceType } from '@/hooks'
import { Box, Typography } from '@mui/material'

const ErrorPage = () => {
  const { isSmallScreen } = useDeviceType()

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='75vh'>
      <Typography variant={isSmallScreen ? 'h4' : 'h3'} align='center'>
        404 - Page Not Found
      </Typography>
      <Typography variant='body1' align='center' mt={2}>
        The page you are looking for does not exist.
      </Typography>
    </Box>
  )
}

export default ErrorPage
