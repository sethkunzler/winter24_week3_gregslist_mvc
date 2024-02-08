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

get HouseCardHTMLtemplate() {
  return /*html*/ `
        <div class="col-12 col-md-8">
          <div class="card">
          <img 
          class="house-img rounded-start"
          src="${this.imgUrl}" 
          alt="Picture of a ${this.bedrooms} bed / ${this.bathrooms} bath house in ${this.city} for $${this.price}">
          <div>
            <h2>${this.bedrooms} bed / ${this.bathrooms} bath house in ${this.city}</h2>
            <h2>$${this.price}</h2>
            <h3>Built in: ${this.year}</h3>
            <h4>Total Square Footage: ${this.sqft}ft<sup>2</sup></h4>
            <h4>Description: </h4>
            <h5>${this.description}</h5>
          </div>
          </div>
        </div>
  `
}

// get CarCardHTMLTemplate() {
//   return `
//   <div class="col-12 mb-3">
//     <div class="bg-light rounded shadow-lg d-block d-md-flex">
//       <img class="car-img rounded-start"
//         src="${this.imgUrl}"
//         alt="Picture of ${this.make} ${this.model}">

//       <div class="py-2 px-5">
//         <h2>${this.year} ${this.make} ${this.model}</h2>
//         <h2>$${this.price}</h2>
//         <h3>${this.mileage} Miles</h3>
//         <h4>Listed on ${this.ListedAtDate}</h4>
//         <h4>At ${this.ListedAtTime}</h4>
//         <p>${this.description}</p>
//         <div class="d-flex">
//           <p>Car Color:</p>
//           <div class="ms-4 car-color-circle" style="background-color: ${this.color};"></div>
//         </div>
//         <div class="fs-1">
//           ${this.SalvagedTitleIcon}
//         </div>
//         <div>
//           <button onclick="app.CarsController.removeCar('${this.id}')" class="btn btn-danger">Delete Car</button>
//         </div>
//       </div>
//     </div>
//   </div>
//   `
// }