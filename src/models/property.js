import { Schema, model } from 'mongoose'
import PropertySchema from '../schemas/propertySchema'

const Property = model('Property', PropertySchema)

export default Property