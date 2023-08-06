import Bike from "../src/bike.js";

describe("Bike",()=>{
  test ("Should create a Bike class", ()=> {
    const bike = new Bike();
    expect(bike).toEqual({})
  });

  test('Should search for bike when location is inputted', () => {
    const bike = new Bike(Portland);
    const mySearch = bike.getStolen();
    expect(mySearch).toEqual(Portland);
  })
})