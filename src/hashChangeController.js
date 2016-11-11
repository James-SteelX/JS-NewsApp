(function(exports) {

  function makeUrlChangeStoryForCurrentPage() {
    window.addEventListener("hashchange", showStoryForCurrentPage);
  }

  function showStoryForCurrentPage() {
    showStory(getStoryIdFromUrl(window.location));
  }

  function getStoryIdFromUrl(url) {
    return url.hash.split("#news/")[1];
  }

  function showStory(id) {
    var story = this.storyList.locateStory(parseInt(id));
    var singleStory = new SingleStory(story);
    console.log(singleStory.returnFormattedStory());
    document
      .getElementById("singleStory")
      .innerHTML = singleStory.returnFormattedStory();
  }

  exports.makeUrlChangeStoryForCurrentPage = makeUrlChangeStoryForCurrentPage;




})(this);
