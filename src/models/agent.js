import { Schema, model } from 'mongoose'

const AgentSchema = Schema({
  firstName: { type: String, required: true, max: 100 },
  lastName: { type: String, required: true, max: 100 },
  phoneNumber: { type: String, required: true, max: 100 },
  email: { type: String, required: true, max: 100 },
})

const Agent = model('Agent', AgentSchema)

export default Agent