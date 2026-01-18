import { ROUTERS } from '@/configs'
import { CreateSubmissionPage, MySubmissionPage } from '@/pages'

export const SubmissionRoutes = [
  { path: ROUTERS.Submission, element: <MySubmissionPage /> },
  { path: ROUTERS.CreateSubmission, element: <CreateSubmissionPage /> }
]
