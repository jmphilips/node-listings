import Agent from '../models/agent'

const AgentsController = {
  async index(req, res) {
    try {
      const agents = await Agent.find({})
      res.status(200).send(agents)
    } catch(error) {
      res.status(500).send(error)
      next(error)
    }
  },

  async show(req, res, next) {
    const agentId = req.params.id
    try {
      const agent = await Agent.findById(agentId)
      res.status(200).send(agent)
    } catch(error) {
      res.status(404).send(error)
      next(error)
    }
  },

  create(req, res) {
    const agentParams = req.body
    Agent.create({
      firstName: agentParams.firstName,
      lastName: agentParams.lastName,
      email: agentParams.email,
      phoneNumber: agentParams.phoneNumber
    }, (err, agent) => {
      res.status(201).send(agent)
    })
  },

  delete(req, res) {
    const agentId = req.params.id
    Agent.deleteOne({_id: agentId}, (err) => {
      res.status(204).send()
    })
  },

  seed(req, res) {
    
  }
}

export default AgentsController