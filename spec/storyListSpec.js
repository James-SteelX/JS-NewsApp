
function testProcessArray () {
  var storyList = new StoryList();
  var arr = ['a']
  storyList.processArray(arr)
  assert.isTrue(storyList.storyArray[0] instanceof Story)
}

testProcessArray ()
