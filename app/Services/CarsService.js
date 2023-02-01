import { appState } from "../AppState.js"
import { Car } from "../Models/Car.js"

class CarsService {
  setActiveCar(carId) {
    const car = appState.cars.find(c => c.id == carId)
    if (!car) {
      throw new Error('there is no car with that id')
    }
    appState.car = car
  }

  createCar(formData) {
    // FYI its gonna get more complex later.... 
    // so just get use to the pattern this week 
    let car = new Car(formData)

    appState.cars.push(car)
    appState.emit('cars')

  }
}

export const carsService = new CarsService()