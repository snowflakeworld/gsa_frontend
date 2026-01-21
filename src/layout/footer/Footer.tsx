import { type FC } from 'react'

import { Box, Container, Divider, Link, Stack, Typography } from '@mui/material'

import { Logo } from '@/components/Common'
import { FOOTER_LINK_SUB, FOOTER_LINK_TYPES } from '@/constants'
import { useDeviceType } from '@/hooks'
import { LinkContent, LinkListMain, LinkType } from './LinkListMain'

interface FooterProps {
  isLandingPage?: boolean
}

export const Footer: FC<FooterProps> = ({ isLandingPage = true }) => {
  const { isLargeScreen } = useDeviceType()

  return (
    <Box sx={{ backgroundColor: isLandingPage ? 'background.footer' : 'background.header', zIndex: 2 }}>
      {isLandingPage ? <></> : <Divider />}
      <Container className='py-none' sx={{ px: { xs: 2.5, lg: 18.75 } }}>
        {isLandingPage && (
          <Stack
            direction={isLargeScreen ? 'row' : 'column'}
            sx={{ py: { xs: 2.5, lg: 6.25 } }}
            justifyContent='space-between'
            gap={2}
          >
            <Stack direction='column' gap={3} width={isLargeScreen ? 352 : '100%'}>
              <Logo place='footer' />
              <Typography
                color='textSecondary'
                width='100%'
                sx={{ fontSize: '0.875rem' }}
                textAlign={isLargeScreen ? 'inherit' : 'center'}
              >
                Grading Specialists Authority (GSA) & GSA/DNA are divisions of Collectors Holdings, Inc.
              </Typography>
            </Stack>
            {FOOTER_LINK_TYPES.map((type, idx) => (
              <LinkListMain key={'footer-link-' + idx} type={type as LinkType} />
            ))}
          </Stack>
        )}
        <Stack
          direction={isLargeScreen ? 'row' : 'column-reverse'}
          sx={{ py: 2 }}
          justifyContent='space-between'
          gap={2}
        >
          <Typography color='textNormal' sx={{ fontSize: '0.875rem' }} textAlign={isLargeScreen ? 'left' : 'center'}>
            © 2024 GSA, Inc. All rights reserved
          </Typography>
          <Stack
            direction='row'
            useFlexGap
            gap={isLargeScreen ? 3 : 2}
            justifyContent='center'
            alignItems='center'
            sx={isLargeScreen ? {} : { flexWrap: 'wrap' }}
          >
            {FOOTER_LINK_SUB.map((link: LinkContent, idx: number) => (
              <Link className='footer-link__sub' key={'footer-link-sub-' + idx} href={link.path} noWrap>
                {link.title}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
