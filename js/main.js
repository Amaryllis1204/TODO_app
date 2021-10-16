//追加ボタンを押したときの処理
document.getElementById('add').addEventListener('click', ()=>{
    let todo = document.getElementById('todo').value;
    let add_todo = document.createElement('li');
    
    //削除ボタンの付与
    let remove_button = document.createElement('button');
    remove_button.classList.add('btn' ,'btn-secondary');
    remove_button.textContent = '削除';
    add_todo.textContent = todo;
    add_todo.append(remove_button);
    document.getElementsByClassName('todo_list')[0].appendChild(add_todo);

    //削除ボタンを押した時の処理
    remove_button.addEventListener('click', ()=>{
        removeTasks(remove_button);
    })
});

//削除処理
const removeTasks = (remove_button) =>{
    const chosenTask = remove_button.closest('li');
    document.getElementsByClassName('todo_list')[0].removeChild(chosenTask);
}