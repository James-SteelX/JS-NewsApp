(function(exports) {

  function StoryListView (storyList){
    this.listToRender = storyList
  }

  StoryListView.prototype.renderHTML = function () {
    var stories = this.listToRender.returnStoryArray();
    var formattedStories = stories.map(function(story) {
      return "<li><div><a href=\"#news/"+ story.id +"\">" + story.getStoryHeadline() + "</a></div></li>";
    }).join("");
     return '<ul>' + formattedStories + '</ul>';
   };




 exports.StoryListView = StoryListView;

})(this);
