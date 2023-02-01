import { CarsController } from './Controllers/CarsController.js'
import { HousesController } from './Controllers/HousesController.js'
import { JobsController } from './Controllers/JobsController.js'


class App {
  carsController = new CarsController() // (AKA) constructor
  jobsController = new JobsController()
  housesController = new HousesController()
}

window["app"] = new App();
