const element = {
    tasks: document.getElementById('tasks'),
    preview: document.getElementById('preview'),
    input: document.getElementById('input'),
    addBtn: document.getElementById('btn')
}

element.input.addEventListener('input', () => {
    if (element.input.value.length >= 2 && element.input.value.length <= 15) {
        element.preview.style.color = 'black';
    } else {
        element.preview.style.color = 'lightcoral';
    }
    element.preview.innerHTML = element.input.value;
})

const removeTask = id => document.getElementById(id).remove();

let COUNT = 0;

element.addBtn.addEventListener('click', () => {
    if (element.input.value.length >= 2 && element.input.value.length <= 15) {
        element.tasks.innerHTML += `<div class="task-wrap" id="taskId${COUNT}">
                                        <div class="task">
                                            <p>${element.input.value}</p>
                                        </div>
                                        <button class="btn" onclick="removeTask('taskId${COUNT}')">Mark</button>
                                    </div>`;
        element.input.value = "";
        element.preview.innerHTML = "";
        COUNT++;
    }
});

element.input.addEventListener('keypress', event => {
    if (event.key === 'Enter') element.addBtn.click();
})
