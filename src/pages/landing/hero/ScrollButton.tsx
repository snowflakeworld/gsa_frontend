import { Button, Typography } from "@mui/material"

import { AppIcon } from "@/components/common"

export const ScrollButton = () => {

  const handleClick = () => {
    window.scrollTo({
      top: window.scrollY + 1000,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <Button variant='text' sx={{ gap: 1, position: 'absolute', left: -1, bottom: 0 }} onClick={handleClick}>
      <AppIcon name='chevronDownOutline' className="fill-none" width={16} height={16} viewBoxWidth={16} viewBoxHeight={16} />
      <Typography component="span">Scroll down</Typography>
    </Button>
  )
}