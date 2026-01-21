import { Link, Stack, Typography } from '@mui/material'
import { FC, memo } from 'react'

import { FOOTER_LINK_MAIN } from '@/constants'
import { useDeviceType } from '@/hooks'

export type LinkType = 'home' | 'research' | 'support' | 'more'

export interface LinkContent {
  title: string
  path: string
}

interface FooterLinkProps {
  type: LinkType
}

export const LinkListMain: FC<FooterLinkProps> = memo((props: FooterLinkProps) => {
  const { isLargeScreen } = useDeviceType()

  const type: LinkType = props.type

  return (
    <Stack gap={isLargeScreen ? 3 : 2} direction='column' textAlign={isLargeScreen ? 'inherit' : 'center'}>
      <Typography color='textNormal' width='100%' sx={{ fontSize: '0.875rem' }}>
        {type.replace(/\b\w/g, char => char.toUpperCase())}
      </Typography>

      <Stack gap={1.5} direction='column'>
        {FOOTER_LINK_MAIN[type].map((link: LinkContent, idx: number) => (
          <Link className='footer-link__main' key={'footer-link-' + idx} href={link.path}>
            {link.title}
          </Link>
        ))}
      </Stack>
    </Stack>
  )
})
