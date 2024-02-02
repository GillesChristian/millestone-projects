
const todoLists = document.querySelector(".todoListContainer"); 
const addTodo = document.querySelector("#form");

addTodo.addEventListener('submit', e => {
    e.preventDefault();
    
    const todoList  = `
        <div class="todo">
            <div class="todoList">
                <input type="checkbox" name="check" class="check" onchange="checkTodo(this)">
                <span class="myTodo">${task.value}</span>
            </div>
            <span class="todoStatus">${flag.value}</span>
        </div>
    `;

    todoLists.innerHTML += todoList;
});

function checkTodo(checkbox) {
    const todoElement = checkbox.closest('.todo');
    const myTodoElement = todoElement.querySelector('.myTodo');

    if (checkbox.checked) {
        myTodoElement.classList.add('under');
    } else {
        myTodoElement.classList.remove('under');
    }
}
