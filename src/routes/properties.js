import PropertiesController from "../controllers/propertiesController";
import { Router } from 'express'
const router = Router()

router.get('/', PropertiesController.index)
router.post('/', PropertiesController.create)
router.get('/:id', PropertiesController.show)
router.delete('/:id', PropertiesController.delete)

export default router