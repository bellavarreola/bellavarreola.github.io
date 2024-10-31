// Variable and Function Definitions //
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// Raw Text Strings //
var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]
const insertY = ["the soup kitchen", "Disneyland", "the White House"]
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

// Event listener and partial function definition // 
randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    replace("Bob", customName)
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + ' stone'; // 300 lbs to stone
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade'; // 94°F to °C
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  var newStory = storyText
  var xItem = randomValueFromArray(insertX)
  var yItem = randomValueFromArray(insertY)
  var zItem = randomValueFromArray(insertZ)

  newStory = newStory.replace(':insertx:', xItem)
  .replace(':inserty:', yItem)
  .replace(':insertz:', zItem)
  .replace(':insertx:', xItem);
                    
story.textContent = newStory;
  story.style.visibility = 'visible';
}
