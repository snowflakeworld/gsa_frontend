import { routers } from '@/configs'
import { CreateSubmissionPage, SubmissionPage } from '@/pages'

export const SubmissionRoutes = [
  { path: routers.Submission, element: <SubmissionPage /> },
  { path: routers.CreateSubmission, element: <CreateSubmissionPage /> }
]
