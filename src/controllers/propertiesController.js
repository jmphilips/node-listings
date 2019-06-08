import Property from '../models/property'
import AppController from './applicationController'
import BaseController from './baseController'

const PropertiesController = {
    index(req, res, next) {
        BaseController.index(Property, res, next)
    },

    async show(req, res, next) {
        const propertyId = AppController.idParams(req)
        BaseController.show(Property, propertyId, res, next)
    },

    async create(req, res, next) {
        const propertyParams = AppController.bodyParms(req)
        BaseController.create(Property, propertyParams, res, next)
    },

    async delete(req, res, next) {
        const propertyId = AppController.idParams(req)
        BaseController.delete(Property, propertyId, res, next)
    },
}

export default PropertiesController
