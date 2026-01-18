import { Stack, Typography } from '@mui/material'
import { FC, memo } from 'react'

interface ItemProps {
  content: string
  status: string
  highlight?: boolean
}

const PriceItemHorizComponent: FC<ItemProps> = ({ content, status, highlight = false }) => {
  return (
    <Stack
      bgcolor='background.paper'
      gap={1}
      px={2}
      py={0.5}
      borderRadius={125}
      direction={'row'}
      alignItems='center'
    >
      <Typography
        variant='caption'
        fontSize='1.25rem'
        lineHeight='1.75rem'
        fontWeight={500}
        flex={1}
        color={highlight ? '#26BE07' : 'text.primary'}
      >
        {content}
      </Typography>
      <Typography fontSize='0.875rem' lineHeight='1.25rem' fontWeight={500} color='text.normal'>
        {status}
      </Typography>
    </Stack>
  )
}

export const PriceItemHoriz = memo(PriceItemHorizComponent)
