import Agent from '../models/agent'
import AppController from './applicationController'
import BaseController from './baseController'

const AgentsController = {
    async index(req, res, next) {
        BaseController.index(Agent, res, next)
    },

    async show(req, res, next) {
        const agentId = AppController.idParams(req)
        BaseController.show(Agent, agentId, res, next)
    },

    async create(req, res, next) {
        const agentParams = AppController.bodyParams(req)
        BaseController.create(Agent, agentParams, res, next)
    },

    async delete(req, res, next) {
        const agentId = AppController.idParams(req)
        BaseController.delete(Agent, agentId, res, next)
    },
}

export default AgentsController
