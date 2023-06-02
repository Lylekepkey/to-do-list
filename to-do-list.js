const todoInput = document.getElementById('to-do-list')
const addInput = document.getElementById('add')
const listAdd = document.getElementById('to-do-list-1')


addInput.addEventListener('click', function() {
    const todo = todoInput.value;

    // Create new row
    const newRow = document.createElement('li')

    // create new list
    const newDo = document.createElement('li')
    todoInfo.textContent = todoInput
    newRow.appendChild(newDo)

    listAdd.appendChild(newRow)

})