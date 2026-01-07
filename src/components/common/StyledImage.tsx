import styled from '@emotion/styled'

interface StyledImageProps {
  width?: number | string
  height?: number | string
  borderRadius?: number | string | 0
  border?: string | 'none',
  margin?: string
}

export const StyledImage = styled('img')<StyledImageProps>(({ width, height, borderRadius = 0, border = 'none', margin = 'auto' }) => ({
  ...{
    width: width ? width : 'auto',
    height: height ? height : 'auto',
    margin: margin,
    border: border,
    borderRadius: borderRadius,
    objectFit: 'cover'
  }
}))
