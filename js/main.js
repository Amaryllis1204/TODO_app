document.getElementById('add').addEventListener('click', ()=>{
    let todo = document.getElementById('todo').value;
    let add_todo = document.createElement('li');
    add_todo.textContent = todo;
    document.getElementsByClassName('todo_list')[0].appendChild(add_todo);
});