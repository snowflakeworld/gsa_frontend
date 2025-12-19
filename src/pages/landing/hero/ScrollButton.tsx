import { Button, Typography } from '@mui/material'

import { CustomIcon } from '@/components'

export const ScrollButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: window.scrollY + 3000,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Button variant='text' sx={{ gap: 1, position: 'absolute', left: -8, bottom: -30 }} onClick={handleClick}>
      <CustomIcon
        name='chevronDownOutline'
        className='fill-none'
        width={16}
        height={16}
        viewBoxWidth={16}
        viewBoxHeight={16}
      />
      <Typography component='span'>Scroll down</Typography>
    </Button>
  )
}
