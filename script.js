document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.querySelector('.todo-input');
    const todoAddButton = document.querySelector('.todo-add-button');
    const todoList = document.querySelector('.todo-list');    
    todoAddButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(listItem);
            });
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => {
                const newTaskText = prompt('Edit your task:', listItem.textContent);
                if (newTaskText) {
                    listItem.textContent = newTaskText;
                    listItem.appendChild(editButton); 
                    listItem.appendChild(deleteButton); 
                }
            });
            todoList.appendChild(listItem);
            todoInput.value = ''; 
        }
    });
});
