import Agent from '../models/agent'
import AppController from './applicationController'
import BaseController from './baseController'

const AgentsController = {
  index(req, res, next) {
    BaseController.index(Agent, res, next)
  },

  async show(req, res, next) {
    const agentId = AppController.idParams(req)
    try {
      const agent = await Agent.find(agentId)
      AppController.statusOk(agent, res)
    } catch(error) {
      res.status(404).send(error)
      next(error)
    }
  },

  async create(req, res, next) {
    const agentParams = AppController.bodyParams(req)
    try {
      const agent = await Agent.createFromRequest(agentParams)
      AppController.statusCreated(res, agent)
    } catch(error) {
      res.status(400).send(error)
      next(error)
    }
  },

  async delete(req, res, next) {
    const agentId = AppController.idParams(req)
    try {
      await Agent.delete(agentId)
      AppController.statusNoContent(res)
    } catch(error) {
      res.status(404).send(error)
      next(error)
    }
  },

}

export default AgentsController