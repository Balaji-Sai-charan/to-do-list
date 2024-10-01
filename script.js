document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-btn');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  // Add new todo item
  addButton.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if (task !== "") {
      addTodoItem(task);
      todoInput.value = "";
    }
  });

  // Function to add new item to the list
  function addTodoItem(task) {
    const li = document.createElement('li');
    li.innerHTML = `
      ${task}
      <button class="delete-btn">Delete</button>
    `;
    
    // Add delete functionality
    li.querySelector('.delete-btn').addEventListener('click', () => {
      li.remove();
    });

    todoList.appendChild(li);
  }
});
