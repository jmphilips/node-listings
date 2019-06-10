import { Router } from 'express'
import HealthController from '../controllers/healthController'

const router = Router()

router.get('/', HealthController.index)

export default router
