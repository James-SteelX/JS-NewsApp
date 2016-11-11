// (function(exports) {
//
//  function ApiController(){
//    this.arr = [];
//  }
//
// var xhr = new XMLHttpRequest();
// xhr.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&q=politics?show-fields=body", true);
// xhr.send();
//
// xhr.onreadystatechange = processRequest;
//
// function processRequest() {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     var response = JSON.parse(xhr.responseText);
//     var array = response.response.results;
//     hello.arr = array
//     console.log(hello.arr)
//   }
// }
//
// ApiController.prototype.returnNewsArray = function () {
//   return hello.arr;
// };
//
//  exports.ApiController = ApiController;
//   exports.processRequest = processRequest;
//
// })(this);
