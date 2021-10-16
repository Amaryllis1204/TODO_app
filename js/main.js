document.getElementById('add').addEventListener('click', ()=>{
    let todo = document.getElementById('todo').value;
    let add_todo = document.createElement('li');
    let remove_button = document.createElement('button');
    remove_button.classList.add('btn' ,'btn-secondary');
    remove_button.textContent = '削除';
    add_todo.textContent = todo;
    add_todo.append(remove_button);
    document.getElementsByClassName('todo_list')[0].appendChild(add_todo);

    remove_button.addEventListener('click', ()=>{
        removeTasks(remove_button);
    })
});

const removeTasks = (remove_button) =>{
    const chosenTask = remove_button.closest('li');
    document.getElementsByClassName('todo_list')[0].removeChild(chosenTask);
}