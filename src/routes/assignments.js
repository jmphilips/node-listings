import { Router } from 'express'
import AssignmentsController from '../controllers/assignmentsController'

const router = Router()

router.post('/', AssignmentsController.create)

export default router