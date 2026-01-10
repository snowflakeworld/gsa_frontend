import { routers } from '@/configs'
import { CreateSubmissionPage, MySubmissionPage } from '@/pages'

export const SubmissionRoutes = [
  { path: routers.Submission, element: <MySubmissionPage /> },
  { path: routers.CreateSubmission, element: <CreateSubmissionPage /> }
]
