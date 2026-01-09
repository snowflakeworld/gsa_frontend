import { routers } from '@/configs/navigation'
import { Button, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const SubmissionPage = () => {
  const navigate = useNavigate()

  const handleCreate = () => {
    navigate(routers.CreateSubmission)
  }

  return (
    <Container>
      <Button variant='contained' sx={{ gap: 2, px: 3 }} className='button--red' onClick={handleCreate}>
        Create Submission
      </Button>
    </Container>
  )
}
