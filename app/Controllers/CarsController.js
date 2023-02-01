import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setText } from "../Utils/Writer.js"

export class CarsController {

  constructor() {
    this.show()
  }

  show() {
    setText('add-listing-button', '🚙 A new Car?')
    setText('listingFormLabel', '🚓 Impounded title... Get it cheap')
  }

  handleFormSubmit() {
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      console.log(formData)
    } catch (error) {
      Pop.error(error)
    }
  }

}
