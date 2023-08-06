
export default class Bike{
  static getStolen(location) {
    return fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=10&stolenness=stolen&access_token=${process.env.API_KEY}`)
    .then(function(response) {
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      } else {
        return response.json();
      }
    })      
    .catch(function(error) {
      throw error;
    });
  }
}
