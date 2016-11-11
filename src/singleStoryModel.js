(function(exports) {

  function SingleStory(story){
    this.singleStory = story;
  }

SingleStory.prototype.returnFormattedStory = function () {
  var storyText = this.singleStory.getStoryText();
  var storyUrl = this.singleStory.getStoryUrl();
  return '<div>' + storyText + '</div><div>' + '<a href='+ storyUrl + '>Link to Article</a></div>';
};

exports.SingleStory = SingleStory;

})(this);
