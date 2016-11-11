(function(exports) {
  var id = 0;

  function Story(story){
    this.storyObj = story;
    this.id = id++;
  }

  Story.prototype.getStoryHeadline = function () {
    return this.storyObj.webTitle;
  };

  Story.prototype.getStoryText = function () {
    return this.storyObj.responseText;
  };

  Story.prototype.getStoryUrl = function () {
    return this.storyObj.webUrl;
  };

  exports.Story = Story;


})(this);
