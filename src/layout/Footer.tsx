import { Box, Link, Stack, Typography } from "@mui/material";

import Logo from "@/components/logo";
import { useDeviceType } from "@/hooks/useDeviceType";
import { FOOTER_LINK_SUB, FOOTER_LINK_TYPES } from "@/constants";
import { LinkContent, LinkType } from "@/types";
import { LinkListMain } from "./footer/LinkListMain";

export const Footer = () => {
  const { isMobile, isTablet } = useDeviceType();

  const isScreenSmall = isMobile || isTablet;

  return (
    <Box color='footer'>
      <Stack direction={!isScreenSmall ? 'row' : 'column'} sx={!isScreenSmall ? { px: 18.75, py: 6.25, } : { px: 2.5, py: 3 }} justifyContent="space-between" gap={2}>
        <Stack direction='column' gap={3} width={!isScreenSmall ? '352px' : '100%'}>
          <Logo place="footer" />
          <Typography color='textSecondary' width='100%' sx={{ fontSize: '14px' }} textAlign={!isScreenSmall ? 'inherit' : 'center'}>
            Grading Specialists Authority (GSA) & GSA/DNA are divisions of Collectors Holdings, Inc.
          </Typography>
        </Stack>
        {
          FOOTER_LINK_TYPES.map((type: LinkType, idx: number) => <LinkListMain key={idx} type={type} />)
        }
      </Stack>
      <Stack direction={!isScreenSmall ? 'row' : 'column-reverse'} sx={!isScreenSmall ? { px: 18.75, py: 2, } : { px: 2.5, py: 2 }} justifyContent='space-between' gap={2}>
        <Typography color='textNormal' sx={{ fontSize: '14px' }} textAlign={!isScreenSmall ? 'inherit' : 'center'}>
          © 2024 GSA, Inc. All rights reserved
        </Typography>
        <Stack direction='row' useFlexGap gap={!isScreenSmall ? 3 : 2} justifyContent='center' alignItems='center' sx={!isScreenSmall ? {} : { flexWrap: 'wrap' }} >
          {
            FOOTER_LINK_SUB.map((link: LinkContent, idx: number) =>
            (
              <Link className="footer-link__sub" key={idx} href={link.path} noWrap>
                {link.title}
              </Link>
            )
            )
          }
        </Stack>
      </Stack>
    </Box >
  );
}