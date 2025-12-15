import styled from "@emotion/styled";

interface StyledImageProps {
  width?: number | string;
  height?: number | string;
}

export const StyledImage = styled('img')<StyledImageProps>(({ width, height }) => ({
  width: width ? width : 'auto',
  height: height ? height : 'auto',
}));