(function(exports) {
 var id = 0
 
  function Story(story){
    this.singleStory = story
    this.id = id++
  }

Story.prototype.getStoryHeadline = function () {
  return this.singleStory.webTitle
};

exports.Story = Story;


})(this);
