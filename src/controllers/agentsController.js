import Agent from '../models/agent'

const AgentsController = {
  index(req, res) {
    Agent.find({}, (err, agents) => {
      res.send(agents)
    })
  },

  show(req, res) {
    const agentId = req.params.id
    Agent.findById(agentId, (err, agent) => {
      res.send(agent)
    })
  },

  create(req, res) {
    const agentParams = req.body
    Agent.create({
      firstName: agentParams.firstName,
      lastName: agentParams.lastName,
      email: agentParams.email,
      phoneNumber: agentParams.phoneNumber
    }, (err, agent) => {
      res.send(agent)
    })
  }
}

export default AgentsController