import { FC } from "react";
import { Box } from "@mui/material"

import { gsaIconColors } from "@/theme";

interface PaginationBulletsProps {
  total: number
  currentIndex: number
  onSelect: (index: number) => void
  theme: 'dark' | 'light'
}

export const PaginationBullets: FC<PaginationBulletsProps> = ({ total, currentIndex, onSelect, theme }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: {xs: 'center', md: 'initial'}, mt: 2, gap: '5px' }}>
      {Array.from({ length: total }).map((_, i) => (
        <Box
          key={i}
          onClick={() => onSelect(i)}
          sx={{
            width: i === currentIndex ? 48 : 8,
            height: 8,
            borderRadius: 2,
            cursor: 'pointer',
            transition: 'width 0.3s, background-color 0.3s ease',
            backgroundColor: i === currentIndex ? gsaIconColors.customRed : (theme === 'dark' ? gsaIconColors.starModeDark : gsaIconColors.starModeLight),
          }}
        />
      ))}
    </Box>
  );

}
