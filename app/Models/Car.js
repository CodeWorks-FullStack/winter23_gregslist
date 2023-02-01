export class Car {

  constructor(data) {
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.description = data.description
  }

  get CarCard() {
    return /*html*/`
    <div class="col-md-4 my-3">
    <div class="card elevation-2 car" data-bs-toggle="modal" data-bs-target="#listingModal">
      <img
        src="${this.imgUrl}"
        alt="${this.make}" class="rounded">
      <p><b>${this.make} ${this.model} - $${this.price}</b></p>
    </div>
  </div>
    `
  }

}
