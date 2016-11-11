(function(exports) {

 function StoryList(arr) {
   this.unprocessed = arr;
   this.storyArray = [];
 }

  StoryList.prototype.processArray = function () {
    console.log(storyList.unprocessed);
    for (var i = 0; i < this.unprocessed.length; i++ ) {
       var story = new Story(this.unprocessed[i]);
       console.log(this.unprocessed);
       this.storyArray.push(story);
     }
    };

  StoryList.prototype.returnStoryArray = function () {
    return this.storyArray;
  };


  StoryList.prototype.locateStory = function (id) {
    return this.storyArray[id];
  };

  exports.StoryList = StoryList;


})(this);
