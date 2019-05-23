import PropertyModel from '../db/models/propertyModel'

const Property = {
  createFromrequest(request) {
    return PropertyModel.create({
      propertyType: request.propertyType,
      address: request.address,
      unitNumber: request.unitNumber,
      price: request.price,
      status: request.status,
      description: request.description,
      bedroomCount: request.bedroomCount,
      squareFeet: request.squareFeet,
      totalRooms: request.totalRooms,
      bathroomCount: request.bathroomCount
    })
  },

  all() {
    return PropertyModel.find({})
  },

  find(id) {
    return PropertyModel.findById(id)
  },

  delete(id) {
    return  Property.deleteOne({_id: propertyId})
  }
}

export default Property