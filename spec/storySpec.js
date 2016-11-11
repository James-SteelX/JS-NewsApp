function testStory(storyText) {
  var story= new Story(storyText);
  assert.isTrue(story.story === storyText);
}

testStory("Donald Trump in shock move, eats Hillary Clinton");

function testGetStoryText(storyText) {
  var dummyStoryObject = {webTitle: "Trump wins :("};
  var story = new Story(dummyStoryObject);
  assert.isTrue(story.getStoryHeadline() === "Trump wins :(");
}

testGetStoryText();
