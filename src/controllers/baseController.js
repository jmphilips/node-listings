import AppController from './applicationController'

const BaseController = {
    async index(model, res, next) {
        try {
            const models = await model.all()
            AppController.statusOk(models, res)
        } catch (error) {
            res.status(500).send(error)
            next()
        }
    },

    async show(model, modelId, res, next) {
        try {
            const viewModel = await model.find(modelId)
            AppController.statusOk(viewModel, res)
        } catch (error) {
            res.status(404).send(error)
            next(error)
        }
    },

    async create(model, createParams, res, next) {
        try {
            const newModel = await model.createFromRequest(createParams)
            AppController.statusCreated(newModel, res)
        } catch (error) {
            res.status(400).send(error)
            next(error)
        }
    },

    async delete(model, modelId, res, next) {
        try {
            const deleteModel = await model.delete(modelId)
            AppController.statusNoContent(res)
        } catch (error) {
            res.status(400).send(error)
            next(error)
        }
    },
}

export default BaseController
