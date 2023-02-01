import { appState } from "../AppState.js"
import { Car } from "../Models/Car.js"
import { saveState } from "../Utils/Store.js"

class CarsService {
  deleteCar(carId) {
    let carIndex = appState.cars.findIndex(c => c.id == carId)

    if (carIndex == -1) {
      throw new Error('Yo, thats a bad car id....')
    }

    appState.cars.splice(carIndex, 1)
    saveState('cars', appState.cars)
    appState.emit('cars') // shine the light 🕯️🔦💡

  }

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
    saveState('cars', appState.cars)

  }
}

export const carsService = new CarsService()