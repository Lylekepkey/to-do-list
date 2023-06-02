const todoInput = document.getElementById('to-do-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('list');


addButton.addEventListener('click', function() {
    const todo = todoInput.value.trim();

    if (todo !== '') {
        
        const newListItem = document.createElement('li');
        newListItem.textContent = todo;

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');

        const tickButton = document.createElement('button');
        tickButton.textContent = 'Tick Off';
        tickButton.classList.add('tick-button');

        
        newListItem.appendChild(deleteButton);
        newListItem.appendChild(tickButton);

        
        todoList.appendChild(newListItem);

        
        todoInput.value = '';
    }
});


todoList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button')) {
        const listItem = event.target.parentElement;
        todoList.removeChild(listItem);
    }
});


todoList.addEventListener('click', function(event) {
    if (event.target.classList.contains('tick-button')) {
        const listItem = event.target.parentElement;
        listItem.classList.toggle('completed');
    }
});
