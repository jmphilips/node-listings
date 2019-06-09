import AppController from './applicationController'
import ModelLogger from '../log/modelLogger'

const BaseController = {
    async index(model, res, next) {
        try {
            const models = await model.all()
            ModelLogger.all(models)
            AppController.statusOk(models, res)
        } catch (error) {
            res.status(500).send(error)
            next()
        }
    },

    async show(model, modelId, res, next) {
        try {
            const viewModel = await model.find(modelId)
            ModelLogger.find(viewModel)
            AppController.statusOk(viewModel, res)
        } catch (error) {
            res.status(404).send(error)
            next(error)
        }
    },

    async create(model, createParams, res, next) {
        try {
            const newModel = await model.createFromRequest(createParams)
            ModelLogger.create(newModel)
            AppController.statusCreated(newModel, res)
        } catch (error) {
            res.status(400).send(error)
            next(error)
        }
    },

    async delete(model, modelId, res, next) {
        try {
            const deleteModel = await model.delete(modelId)
            ModelLogger.delete(deleteModel)
            AppController.statusNoContent(res)
        } catch (error) {
            ModelLogger.error(error)
            res.status(400).send(error)
            next(error)
        }
    },
}

export default BaseController
