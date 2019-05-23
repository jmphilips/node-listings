import Property from '../models/property';
import AppController from './applicationController';
import BaseController from './baseController'


const PropertiesController = {
  index(req, res, next) {
    BaseController.index(Property, res, next)
  },

  async show(req, res, next) {
    const propertyId = AppController.idParams(req)
    try {
      const property = await Property.find(propertyId)
      AppController.statusOk(property, res)
    } catch(error) {
      res.status(404).send(error)
      next()
    }
  },

  async create(req, res, next) {
    const propertyParams = AppController.bodyParms(req)
    try {
      property = await Property.create(propertyParams)
      AppController.statusCreated(property, res)
    } catch(error) {
      res.status(500).send(error)
      next()
    }
  },

  async delete(req, res, next) {
    const propertyId = AppController.idParams(req)
    try {
      Property.delete(propertyId)
      AppController.statusNoContent(res)
    } catch(error) {
      res.status(404).send(error)
      next()
    }
  },
}

export default PropertiesController