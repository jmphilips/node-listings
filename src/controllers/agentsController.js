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

  async create(req, res, next) {
    const agentParams = req.body
    try {
      const agent = await Agent.create({
        firstName: agentParams.firstName,
        lastName: agentParams.lastName,
        email: agentParams.email,
        phoneNumber: agentParams.phoneNumber
      })
      res.status(201).send(agent)
    } catch(error) {
      res.status(400).send(error)
      next(error)
    }
  },

  async delete(req, res, next) {
    const agentId = req.params.id
    try {
      await Agent.deleteOne({_id: agentId})
      res.status(204).send()
    } catch(error) {
      res.status(404).send(error)
      next()
    }
  },

}

export default AgentsController