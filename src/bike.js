export default class Bike {
  static async getStolen(location) {
    try {
      // const response = await fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=10&stolenness=proximity&access_token=${process.env.API_KEY}`);
      const response = await fetch(`https://bikeindex.org:443/api/v3/`);
      console.log(location)
      console.log(response)
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.url}
        ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch (error) {
      return error;
    }
  }
}
