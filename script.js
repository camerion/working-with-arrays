var hobbies = [
  "draw",
  "watch anime",
  "Listen to music",
  "bake",
  "play basketball",
  "read novels"
];
console.log(hobbies.length);
hobbies.push("online shop");

for (var likes of hobbies) {
  console.log(`I like to ${likes}`);
}
console.log(hobbies[2]);
hobbies.pop();
hobbies.splice(2, 0, "nap", "dance");
console.log(hobbies);
hobbies.shift();

var goals = ["get a software job", "own an SUV", "draw a comicbook"];

var allTheThings = hobbies.concat(goals);
console.log(allTheThings);

console.log(allTheThings.indexOf("nap"));

allTheThings.splice(2, 1);
console.log(allTheThings);

var deleteArrayItem = function (array, item) {
  var index = array.indexOf(item);
  if (index === -1) {
    return;
  }
  array.splice(index, 1);
  return array;
};
deleteArrayItem(allTheThings, "bake");
console.log(allTheThings);

allTheThings.forEach(function (item, index) {
  console.log(`${index + 1}.${item.toUpperCase()}!`);
});
