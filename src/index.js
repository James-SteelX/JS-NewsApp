var storyList = new StoryList();
var arr = [{webTitle: "Trump wins :(", responseText: "Trump is now the leader of the free world", webUrl: "www.trump.com"}];
storyList.processArray(arr);
// controller.insertNews();
var controller = new StoryController(storyList);
controller.displayStories();
makeUrlChangeStoryForCurrentPage();
