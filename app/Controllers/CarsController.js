import { setText } from "../Utils/Writer.js"

export class CarsController {

  constructor() {
    this.show()
  }

  show(){
    setText('add-listing-button', '🚙 A new Car?')
    setText('listingFormLabel', '🚓 Impounded title... Get it cheap')
  }

}
