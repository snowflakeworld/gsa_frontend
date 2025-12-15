import { FC } from "react";

import { Link } from "@mui/material";

import { StyledImage } from "../common/StyledImage";
import { useDeviceType } from "@/hooks/useDeviceType";

const Logo: FC = () => {
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet;

  return (
    <Link href="/" aria-label="Home-page">
      <StyledImage src="/assets/images/logo.svg" alt="Logo Image" height={isScreenSmall ? 24 : 32} />
    </Link>
  )
}

export default Logo;