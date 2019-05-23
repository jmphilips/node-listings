import { model } from 'mongoose'
import AgentSchema from '../schemas/agentSchema'

const AgentModel = model('Agent', AgentSchema)

export default AgentModel