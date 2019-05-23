import { model } from 'mongoose'
import PropertySchema from '../schemas/propertySchema'

const PropertyModel = model('Property', PropertySchema)

export default PropertyModel