function randomLetter () {
  // 65 is A, 90 is Z
  var randomCharCode = Math.floor(Math.random() * 25) + 65
  return String.fromCharCode(randomCharCode)
}

function randomDigit () {
  return Math.floor(Math.random() * 9)
}

/*
  EXPLAIN: How does check() work and why might it be better
  than writing an inline anonymous function?

  Check works by looking at the
  input to make sure that the animal that you put in isn't the same as another.
  the reason that it's better than writing an inline annoymous function is because
  it checks the name that you already put in.
*/
function check (val1) {
  return function (val2) {
    return val1 === val2
  }
}

function getName (robot) {
  return robot.name
}

/*
  EXPLAIN: How does animalFactory() work and how do we use the
  fact that it contains a closure to our advantage?
  
  The animalFactory() works by taking an animal then adding a number and a letter. Then it adds it to an array and 
  then it checks it to see if its added to the list or if theres an error. 
  The colsures allow the animalfactory function to be passed through another function in the main.js. The advantage of the closures is that it allows you to use 
  multiple functions. 
  
*/
window.animalFactory = function () {
  var robots = []
  return function (kind) {
    var newName = `${randomLetter()}${randomDigit()}`
    var nameIsTaken = !!robots.map(getName).find(check(newName))
    if (nameIsTaken) return { error: `ERROR: ${newName} is already taken!` }

    var robot = { name: newName, kind: kind, friends: robots }
    robots.push(robot)
    return robot
  }
}
