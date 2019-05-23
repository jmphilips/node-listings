import AgentModel from '../db/models/agentModel'

const Agent = {
  createFromRequest(request) {
    return AgentModel.create({
      firstName: request.firstName,
      lastName: request.lastName,
      email: request.email,
      phoneNumber: request.phoneNumber
    })
  },

  all() {
    return AgentModel.find({})
  },

  find(id) {
    return AgentModel.findById(id)
  },

  delete(id) {
    return AgentModel.deleteOne({_id: agentId})
  }
}

export default Agent