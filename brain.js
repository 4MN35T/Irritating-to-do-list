const form = document.querySelector('form');
const input = document.querySelector('#input');
const list = document.querySelector('#todo');

function addTask(e){
    e.preventDefault();
    if(input.value !== ''){
        const li = document.createElement('li');
        li.innerText = input.value;
        const delBtn = document.createElement('button');
        delBtn.innerText = 'Done';
        delBtn.addEventListener('click', () => {
            delTask(li);
        })
        li.appendChild(delBtn);
        list.appendChild(li);
        input.value = '';
    }
}

function delTask(li){
    list.removeChild(li);
}
form.addEventListener('submit', addTask);