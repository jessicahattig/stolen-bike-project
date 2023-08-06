import Bike from "../src/bike.js";

describe("Bike",()=>{
  test ("Should create a Bike class", ()=> {
    const bike = new Bike();
    expect(bike).toEqual({})
  });

  test('Should search for bike when location is inputted', async () => {
    const response = await Bike.getStolen("Portland");
    expect(response.bikes.length).toEqual(25);
  })
})