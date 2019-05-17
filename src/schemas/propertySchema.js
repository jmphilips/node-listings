import { Schema } from 'mongoose'
import AgentSchema from './agentSchema'

const PropertySchema = Schema({
  propertyType: { type: String, required: true, max: 100 },
  address: { type: String, required: true, max: 100 },
  unitNumber: { type: String, required: true, max: 100 },
  price: { type: String, required: true, max: 100 },
  status: { type: String, required: true, max: 100 },
  description: { type: String, required: true },
  bedroomCount: { type: String, required: true, max: 100 },
  squareFeet: { type: String, required: true, max: 100 },
  totalRooms: { type: String, required: true, max: 100 },
  bathroomCount: { type: String, required: true, max: 100 },
  listingAgents: { type: [AgentSchema] },
})

export default PropertySchema