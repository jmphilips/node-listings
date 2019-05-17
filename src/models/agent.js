import { model } from 'mongoose'
import AgentSchema from '../schemas/agentSchema'

const Agent = model('Agent', AgentSchema)

export default Agent