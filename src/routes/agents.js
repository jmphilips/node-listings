import { Router } from 'express'
import Agent from '../models/agent'
import AgentsController from '../controllers/agentsController'

const router = Router()

router.get('/', AgentsController.index)
router.get('/:id', AgentsController.show)
router.post('/', AgentsController.create)
router.delete('/:id', AgentsController.delete)

export default router
