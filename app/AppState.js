import { Car } from "./Models/Car.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({
      make: 'Ford',
      model: 'Crown Vic',
      price: 8000,
      imgUrl: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fscontent-sea1-1.xx.fbcdn.net%2Fv%2Ft39.30808-6%2F326067901_1480184472508361_3669997107767868026_n.jpg%3Fstp%3Ddst-jpg_p720x720%26_nc_cat%3D109%26ccb%3D1-7%26_nc_sid%3D3b2858%26_nc_ohc%3DlS3EiC0cgKYAX-_XvYV%26_nc_ht%3Dscontent-sea1-1.xx%26oh%3D00_AfBLcrrUJ8TtQreJSMZaHmUv-BMwvgl4W-2bl13yQ8Ssuw%26oe%3D63E02B58',
      description: 'Nice roof rack, no low-balls I know what I got',
      year: 2009
    }),
    new Car({
      make: 'Pontiac',
      model: 'Fiero',
      price: 12000,
      imgUrl: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fscontent-sea1-1.xx.fbcdn.net%2Fv%2Ft39.30808-6%2F328256060_885219272815856_4740065843504160055_n.jpg%3Fstp%3Ddst-jpg_p720x720%26_nc_cat%3D103%26ccb%3D1-7%26_nc_sid%3D3b2858%26_nc_ohc%3DcKFHszCT8woAX-NlIuu%26_nc_ht%3Dscontent-sea1-1.xx%26oh%3D00_AfBLdYiv5NOn3c75Lr7jys4P8tydCtBekvbvh7Dk4RTIWQ%26oe%3D63E01298',
      description: 'It\'s red...?',
      year: 1987
    })
  ]
  /** @type {import('./Models/Car').Car} */
  car = null
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
