import { FC } from "react";

import { Link } from "@mui/material";

import { StyledImage } from "../common/StyledImage";
import { useDeviceType } from "@/hooks/useDeviceType";
import { LogoProps } from "@/types";

const Logo: FC<LogoProps> = ({ place }) => {
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet;

  return (
    <Link href="/" aria-label="Home-page" textAlign={(place === 'footer' && isScreenSmall) ? 'center' : 'initial'}>
      <StyledImage src="/assets/images/logo.svg" alt="Logo Image" height={place === 'header' ? 20 : (isScreenSmall ? 40 : 50)} />
    </Link>
  )
}

export default Logo;