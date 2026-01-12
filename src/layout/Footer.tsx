import { Box, Container, Divider, Link, Stack, Typography } from '@mui/material'

import { FOOTER_LINK_SUB, FOOTER_LINK_TYPES } from '@/constants'
import { useDeviceType } from '@/hooks'
import { Logo } from '@/layout/Logo'
import { FC } from 'react'
import { LinkContent, LinkListMain, LinkType } from './footer/LinkListMain'

interface FooterProps {
  isLandingPage?: boolean
}

export const Footer: FC<FooterProps> = ({ isLandingPage = true }) => {
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Box sx={{ backgroundColor: isLandingPage ? 'background.footer' : 'background.header', zIndex: 2 }}>
      {isLandingPage ? <></> : <Divider />}
      <Container className='py-none' sx={{ px: { xs: 2.5, lg: 18.75 } }}>
        {isLandingPage && (
          <Stack
            direction={!isScreenSmall ? 'row' : 'column'}
            sx={{ py: { xs: 2.5, lg: 6.25 } }}
            justifyContent='space-between'
            gap={2}
          >
            <Stack direction='column' gap={3} width={!isScreenSmall ? 352 : '100%'}>
              <Logo place='footer' />
              <Typography
                color='textSecondary'
                width='100%'
                sx={{ fontSize: '0.875rem' }}
                textAlign={!isScreenSmall ? 'inherit' : 'center'}
              >
                Grading Specialists Authority (GSA) & GSA/DNA are divisions of Collectors Holdings, Inc.
              </Typography>
            </Stack>
            {FOOTER_LINK_TYPES.map((type, idx) => (
              <LinkListMain key={idx} type={type as LinkType} />
            ))}
          </Stack>
        )}
        <Stack
          direction={!isScreenSmall ? 'row' : 'column-reverse'}
          sx={{ py: 2 }}
          justifyContent='space-between'
          gap={2}
        >
          <Typography color='textNormal' sx={{ fontSize: '0.875rem' }} textAlign={!isScreenSmall ? 'left' : 'center'}>
            © 2024 GSA, Inc. All rights reserved
          </Typography>
          <Stack
            direction='row'
            useFlexGap
            gap={!isScreenSmall ? 3 : 2}
            justifyContent='center'
            alignItems='center'
            sx={!isScreenSmall ? {} : { flexWrap: 'wrap' }}
          >
            {FOOTER_LINK_SUB.map((link: LinkContent, idx: number) => (
              <Link className='footer-link__sub' key={idx} href={link.path} noWrap>
                {link.title}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
