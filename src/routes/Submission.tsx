import { lazy } from 'react'

import { ROUTERS } from '@/configs'

const MySubmissionPage = lazy(() => import('@/pages/Submission/MySubmission'))
const CreateSubmissionPage = lazy(() => import('@/pages/Submission/CreateSubmission'))

export const SubmissionRoutes = [
  { path: ROUTERS.Submission, element: <MySubmissionPage /> },
  { path: ROUTERS.CreateSubmission, element: <CreateSubmissionPage /> }
]
