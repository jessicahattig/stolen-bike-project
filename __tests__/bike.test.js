import { Bike } from "../src/bike.js";

describe("Bike",()=>{
  test ("Should create a Bike class", ()=> {
    const bike = new Bike();
    expect(bike).toEqual({})
  })
})