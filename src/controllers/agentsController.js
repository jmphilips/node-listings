import Agent from '../models/agent'

const AgentsController = {
  index(req, res) {
    Agent.find({}, (err, agents) => {
      res.status(200).send(agents)
    })
  },

  show(req, res) {
    const agentId = req.params.id
    Agent.findById(agentId, (err, agent) => {
      res.status(200).send(agent)
    })
  },

  create(req, res) {
    const agentParams = req.body
    Agent.create({
      firstName: agentParams.firstName,
      lastName: agentParams.lastName,
      email: agentParams.email,
      phoneNumber: agentParams.phoneNumber
    }, (err, agent) => {
      res.status(201).send(agent)
    })
  },

  delete(req, res) {
    const agentId = req.params.id
    Agent.deleteOne({_id: agentId}, (err) => {
      res.status(204).send()
    })
  }, 

  seed(req, res) {

var parser = parse({delimiter: ','}, function (err, data) {
  async.eachSeries(data, (line, callback) => {
    data.forEach(row => {
      Agent.create({
        firstName: row[0],
        lastName: row[1],
        email: row[2],
        phoneNumber: row[3],
      }, (err, agent) => {
      })
    })
  })
});
fs.createReadStream(inputFile).pipe(parser);
  }
}

export default AgentsController