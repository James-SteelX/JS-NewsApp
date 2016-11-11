(function(exports) {

  function SingleStory(story){
    this.singleStory = story;
  }

SingleStory.prototype.returnFormattedStory = function () {
  var storyText = this.singleStory.getStoryText();
  var storyUrl = this.singleStory.getStoryUrl();
  var article = new XMLHttpRequest();

  article.open('GET', "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + storyUrl, true);
  article.send();
  article.onreadystatechange = summarizeHeadline;

  function summarizeHeadline() {
    if (article.readyState == 4 && article.status == 200) {
      var response = JSON.parse(article.responseText);
      document.getElementById('singleStory').innerHTML = response.text.substr(0, 500);
      document.getElementById('url').innerHTML = '<a href='+ storyUrl + '>Link to Article</a></div>';
  }
  }
};

exports.SingleStory = SingleStory;

})(this);
