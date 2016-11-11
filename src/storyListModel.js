(function(exports) {

 function StoryList() {
   this.storyArray = []
 }

 StoryList.prototype.processArray = function (apiArray) {
  for (var i = 0; i < apiArray.length; i++ ) {
     var story = new Story(apiArray[i]);
     this.storyArray.push(story)
   }
  };

  StoryList.prototype.returnStoryArray = function () {
    return this.storyArray;
  };

  exports.StoryList = StoryList;


})(this);