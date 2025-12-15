import { FC } from "react";
import { Link, Stack, Typography } from "@mui/material";

import { useDeviceType } from "@/hooks/useDeviceType";
import { LinkType, LinkContent, FooterLinkProps } from "@/types";
import { FOOTER_LINK_MAIN } from "@/constants";

export const LinkListMain: FC<FooterLinkProps> = (props: FooterLinkProps) => {
  const { isMobile, isTablet } = useDeviceType();

  const isScreenSmall = isMobile || isTablet;

  const type: LinkType = props.type;

  return (
    <Stack gap={!isScreenSmall ? 3 : 2} direction='column' textAlign={!isScreenSmall ? 'inherit' : 'center'}>
      <Typography color="textNormal" width='100%' sx={{ fontSize: '14px' }}>
        {type.replace(/\b\w/g, char => char.toUpperCase())}
      </Typography>

      <Stack gap={1.5} direction='column'>
        {
          FOOTER_LINK_MAIN[type].map((link: LinkContent, idx: number) => (
            <Link className='footer-link__main' key={idx} href={link.path}>
              {link.title}
            </Link>
          ))
        }
      </Stack>
    </Stack>
  )
}

