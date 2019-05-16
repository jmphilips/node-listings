import Property from '../models/property';
import { create } from 'domain';

const PropertiesController = {
  index(req, res) {
    Property.find({}, (err, properties) => {
      res.status(200).send(properties)
    })
  },

  show(req, res) {
    const propertyId = req.params.id
    Property.findById(propertyId, (err, property) => {
      res.status(200).send(property)
    })
  },

  create(req, res) {
    const propertyParams = req.body
    Property.create({
      propertyType: propertyParams.propertyType,
      address: propertyParams.address,
      unitNumber: propertyParams.unitNumber,
      price: propertyParams.price,
      status: propertyParams.status,
      description: propertyParams.description,
      bedroomCount: propertyParams.bedroomCount,
      squareFeet: propertyParams.squareFeet,
      totalRooms: propertyParams.totalRooms,
      bathroomCount: propertyParams.bathroomCount
    }, (err, property) => {
      res.status(201).send(property)
    })
  },

  delete(req, res) {
    const propertyId = req.params.id
    Property.deleteOne({_id: propertyId}, (err) => {
      res.status(204).send()
    })
  }
}

export default PropertiesController