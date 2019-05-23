const AppController = {
  idParams(request) {
    return request.params.id
  },

  bodyParms(request) {
    return request.body
  },

  statusOk(body, cb) {
    cb.status(200).send(body)
  },

  statusCreated(body, cb) {
    cb.status(201).send(body)
  },

  statusNoContent(cb) {
    cb.status(204).send()
  },

  statusNotFound(cb, error) {
    cb.status(404).send(error)
  },
}

export default AppController