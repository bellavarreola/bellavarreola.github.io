// Variable and Function Definitions //
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// Raw Text Strings //
var storyText = "It was 94 fahrenheit outside, so :bob: went for a swim. When they got to the :inserty:, they stared in horror for a few moments, then :insertz:. :bob: saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a scorching day.";
const insertX = ["Benny Beaver", "Sally Sloth", "Willy Walrus"]
const insertY = ["LegoLand", "Puerta Vallarta", "Illegal Pete's"]
const insertZ = ["started breakdancing on the sidewalk", "did a backflip into a fountain", "began juggling pineapples"]
// Event listener and partial function definition // 
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(":bob:", name);
    newStory = newStory.replace(":bob:", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + ' stone'; // 300 lbs to stone
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade'; // 94°F to °C
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:', xItem)
  newStory = newStory.replace(':inserty:', yItem)
  newStory = newStory.replace(':insertz:', zItem)
  newStory = newStory.replace(':insertx:', xItem);
                    
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
