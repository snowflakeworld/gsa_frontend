import { Button, Typography } from '@mui/material'

import { CustomIcon } from '@/components'

export const ScrollButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: window.scrollY + 10000,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Button
      variant='text'
      sx={{ gap: 1, position: 'absolute', left: -16, bottom: -30, px: 1 }}
      onClick={handleClick}
      startIcon={
        <CustomIcon
          name='chevronDownOutline'
          width={16}
          height={16}
          viewBoxWidth={16}
          viewBoxHeight={16}
          className='fill-none'
        />
      }
    >
      <Typography component='span'>Scroll down</Typography>
    </Button>
  )
}
