
var xhr = new XMLHttpRequest();
xhr.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&q=politics?show-fields=body", true);
xhr.send();

xhr.onreadystatechange = processRequest;

function processRequest() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var response = JSON.parse(xhr.responseText);
    var array = response.response.results;
    storyList = new StoryList(array);
    storyList.processArray();
    var controller = new StoryController(storyList);
    controller.displayStories();
  }
}

// var hello = new ApiController();
// var arr = [[{webTitle: "Trump wins :(", responseText: "Trump is now the leader of the free world", webUrl: "www.trump.com"}]];
// var arr = api.returnNewsArray()
// console.log(processRequest())

// controller.insertNews();
// var controller = new StoryController(storyList);
// controller.displayStories();
makeUrlChangeStoryForCurrentPage();
