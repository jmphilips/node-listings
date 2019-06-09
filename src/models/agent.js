import AgentModel from '../db/models/agentModel'
import ModelLogger from '../log/modelLogger'

const Agent = {
    createFromRequest(request) {
        return AgentModel.create({
            firstName: request.firstName,
            lastName: request.lastName,
            email: request.email,
            phoneNumber: request.phoneNumber,
        })
    },

    all() {
        return AgentModel.find({})
    },

    find(id) {
        const agent = AgentModel.findById(id)
        ModelLogger.find(agent)
        return agent
    },

    delete(id) {
        return AgentModel.deleteOne({ _id: id })
    },
}

export default Agent
