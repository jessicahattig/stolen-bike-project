export default class Bike{
  constructor(){

  }
}
  static getStolen(location) {
    return new Promise(function (resolve, rejct) {
      let request = new XXLHttpRequest();
      const url ='https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=stolen&access_token=lKFRYom4Dut4bxZ_LxDRRWKxO9j51Kzt9mP02xRXhMg';
      request.addEventListener("loanded", function(){
        const response = JSON.parse(this.responseText);
        if (this.status === 200){
          resolve ([response, city])
        }else {
          PromiseRejectionEvent([this,response, city]);
        }
        });
        request.open("GET", url, true);
        request.send();
      })
      
    })
  }
    return fetch('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=stolen&access_token=lKFRYom4Dut4bxZ_LxDRRWKxO9j51Kzt9mP02xRXhMg');
    .then(function(response) {
      console.log(responses);
    });