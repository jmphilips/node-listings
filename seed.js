const fs = require('fs')
const parse = require('csv-parse')
var async = require('async');
const { Schema, model } = require('mongoose')

var inputFile='sample_agents.csv';

const AgentSchema = Schema({
  firstName: { type: String, required: true, max: 100 },
  lastName: { type: String, required: true, max: 100 },
  phoneNumber: { type: String, required: true, max: 100 },
  email: { type: String, required: true, max: 100 },
})

const Agent = model('Agent', AgentSchema)
