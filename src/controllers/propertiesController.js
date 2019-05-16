import Agent from '../models/property'
import Property from '../models/property';
import { create } from 'domain';

const PropertiesController = {
  index(req, res) {
    Property.find({}, (err, properties) => {
      res.status(200).send(properties)
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
  }
}

export default PropertiesController