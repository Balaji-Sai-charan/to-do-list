document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    
    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.classList.add('task-box', 'red');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                li.classList.remove('red');
                li.classList.add('green');
            } else {
                li.classList.remove('green');
                li.classList.add('red');
            }
        });

        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        
        document.getElementById('taskList').appendChild(li);

        taskInput.value = ''; // Clear the input
        taskInput.focus(); // Focus back on the input
    } else {
        alert('Please enter a task!');
    }
});