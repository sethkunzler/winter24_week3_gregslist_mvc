import { generateId } from "../utils/GenerateId.js"

// This is My House model, in here I will put my House model that I will export as a framework for the app to build a house card.
export class House {
  // a constructor runs on page load - "data" is the assigned parameter0
  constructor(data) {
    // generateId() is a built in bcw class that generates a unique number that we can use to target the card after it is built
    this.id = data.id || generateId()
    // generative Data. the user will submit this information into a form to generate this information
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price 
    this.city = data.city
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

}