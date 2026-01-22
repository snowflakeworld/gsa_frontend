import { type FC, ChangeEvent, useState } from 'react'

import { CloseOutlined, SearchRounded } from '@mui/icons-material'
import { IconButton, InputBase, Paper } from '@mui/material'

import { gsaColors } from '@/theme'

interface SearchBoxProps {
  placeHolder: string
  handleSubmit?: (_: string) => void
}

export const SearchBox: FC<SearchBoxProps> = ({ placeHolder, handleSubmit }) => {
  const [inputText, setInputText] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.currentTarget.value)
  }

  return (
    <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', backgroundColor: 'background.cardItem' }}>
      <IconButton
        type='button'
        sx={{ p: '10px', cursor: 'default', color: gsaColors.text.normal }}
        aria-label='search'
        disableRipple
        disableFocusRipple
        disableTouchRipple
      >
        <SearchRounded />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeHolder}
        inputProps={{ 'aria-label': placeHolder }}
        value={inputText}
        onChange={handleChange}
      />
      <IconButton
        type='button'
        sx={{ p: '10px', visibility: inputText.length ? 'visible' : 'hidden', color: gsaColors.text.normal }}
        aria-label='search'
        onClick={() => {
          setInputText('')
        }}
      >
        <CloseOutlined />
      </IconButton>
    </Paper>
  )
}
