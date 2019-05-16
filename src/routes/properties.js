import PropertiesController from "../controllers/propertiesController";
import { Router } from 'express'
const router = Router()

router.get('/', PropertiesController.index)
router.post('/', PropertiesController.create)

export default router