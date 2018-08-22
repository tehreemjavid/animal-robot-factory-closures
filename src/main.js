var factoryButtons = document.querySelector('#robot-factory')
factoryButtons.querySelector('#buttons').innerHTML = window.kinds.data.map(window.kinds.template).join('')

var buttons = document.querySelectorAll('#robot-factory button')
// EXPLAIN: What type of thing is animalFactory() returning?

//animalFactory() returns the animal robot name.

var factory = window.animalFactory()

Array.from(buttons).forEach(function (button) {
  var kind = button.getAttribute('id')
  /*
    EXPLAIN: What type of thing is create(factory, kind) returning?
    Why do we want both of these variables?
   
    //Factory and kind are important because the kind is telling you about the robot it is going to be
    factory is "making the robot type"
  */
  button.addEventListener('click', create(factory, kind))
})

// EXPLAIN:
function create (factory, kind) {
  return function () {
    var robot = factory(kind)
    // EXPLAIN: What does it mean if `robot` has an `error` property?
    
    // When the robot has an error property, it means that the name isn't
    //meeting the arguments that it needs.  There is a problem with the input.
    !robot.error ? render(robot) : showError(robot.error)
  }
}

function clearError () {
  var error = document.querySelector('#error')
  if (error) error.parentElement.remove()
}

function showError (message) {
  clearError()
  var div = document.createElement('div')
  div.innerHTML = `
    <p id="error" class="alert alert-danger">${message}</p>
  `
  factoryButtons.append(div)
}

function clearPlaceholder () {
  var error = document.querySelector('#robots-list .text-secondary')
  if (error) error.remove()
}

function robotTemplate (friend) {
  return `<strong>${friend.name}</strong> (${friend.kind})`
}

function render (robot) {
  clearError()
  clearPlaceholder()

  var friends = robot.friends.map(robotTemplate)

  var list = document.querySelector('#robots-list')
  list.innerHTML = friends.join(', ')

  var count = document.querySelector('#robot-count')
  count.textContent = friends.length
}
