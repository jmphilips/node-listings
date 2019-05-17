import Property from '../models/property'
import Agent from '../models/agent'

const AssignmentsController = {
  create(req, res) {
    const { propertyId, agentId } = req.body
    Agent.findById(agentId, (err, agent) => {
      Property.findByIdAndUpdate(propertyId, {$push: { listingAgents: agent}}, { new: true}, (err, property) => {
        res.status(200).send(property)
      })
    })
  }
}

export default AssignmentsController