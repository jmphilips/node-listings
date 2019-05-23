import AppController from './applicationController'

const BaseController = {
  async index(model, res, next) {
    try {
      const models = await model.all()
      AppController.statusOk(models, res)
    } catch(error) {
      res.status(500).send(error)
    }
  }
}

export default BaseController