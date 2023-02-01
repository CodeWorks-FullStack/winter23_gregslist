import { appState } from "../AppState.js"
import { Car } from "../Models/Car.js"

class CarsService {
  createCar(formData) {
    // FYI its gonna get more complex later.... 
    // so just get use to the pattern this week 
    let car = new Car(formData)

    appState.cars.push(car)
    appState.emit('cars')

  }
}

export const carsService = new CarsService()