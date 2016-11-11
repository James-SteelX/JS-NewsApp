(function(exports) {

  function StoryController(storyList) {
    this.storyListView = new StoryListView(storyList);
  }

  StoryController.prototype.displayStories = function () {
    var stories = this.storyListView.renderHTML();
    document.getElementById("app").innerHTML = stories;
  };

  exports.StoryController = StoryController;

})(this);
