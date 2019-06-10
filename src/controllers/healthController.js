import AppController from './applicationController'

const HealthController = {
    async index(req, res, next) {
        try {
            AppController.statusNoContent(res)
        } catch (error) {
            res.status(400).send(error)
            next()
        }
    },
}

export default HealthController
