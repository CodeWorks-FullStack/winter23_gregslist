import { setText } from "../Utils/Writer.js"

export class JobsController {

  constructor() {
    console.log('Hello this is the jobs Controller')
  }


  show() {
    
    setText('add-listing-button', '🪦 Dead end Job?')
    setText('listingFormLabel', '🪦 Dig up a new Job')
    
  }
}
