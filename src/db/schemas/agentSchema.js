import { Schema } from 'mongoose'

const AgentSchema = Schema({
  firstName: { type: String, required: true, max: 100 },
  lastName: { type: String, required: true, max: 100 },
  phoneNumber: { type: String, required: true, max: 100 },
  email: { type: String, required: true, max: 100 },
})

export default AgentSchema