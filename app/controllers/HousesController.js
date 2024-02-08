// imports
import { AppState } from "../AppState.js"

// #region this is where my private functions will go. private functions can only be accessed on the HousesController.js
function _drawHouses() {
  const houses = AppState.houses
  let HTMLstring = ``
  // cars.forEach(car => htmlString += car.CarCardHTMLTemplate)
  houses.forEach(house => HTMLstring += house.HouseCardHTMLtemplate)
}

// #endregion 

// This is my Houses Controller. it will be tracking interactive information on the Houses page and it will also drawing updated information to that page
export class HousesController {
  // Constructors run on page load
  constructor () {
    console.log("Houses Controller loaded")


    // My Event listeners 
    AppState.on("houses", _drawHouses)
  }

}