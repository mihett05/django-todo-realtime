let current_todo_list = [];

const render_tasks = (todo_list) => {
    const tasks = document.querySelector("#tasks");
    current_todo_list = [...todo_list];
    tasks.innerHTML = "";

    todo_list.forEach((v) => {
        const el = document.createElement("task-card");
        el.setAttribute("task-id", v.id);
        el.setAttribute("text", v.text);
        tasks.append(el);
    });
}

const parse_change = (data) => {
    let todo_list = [...current_todo_list];
    if (data.type === "create") {
        let find = todo_list.filter((v) => v.id === data.task.id);
        if (find.length === 0) {
            todo_list.push(data.task);
        }
    } else if (data.type === "edit") {
        todo_list.forEach((v, i) => {
            if (v.id === data.task.id) {
                todo_list[i] = data.task;
            }
        });
    } else if (data.type === "delete") {
        let index = null;
        todo_list.forEach((v, i) => {
            if (v.id === data.task.id) {
                index = i;
            }
        });
        if (index != null) {
            todo_list.splice(index, 1);
        }
    }
    render_tasks(todo_list);
}

const create_task_action = (text) => {
    create_task(text)
        .then(render_tasks);
}

const delete_task_action = (id) => {
    delete_task(id)
        .then(render_tasks);
};

const edit_task_action = (id, text) => {
    update_task(id, text)
        .then(render_tasks);
};

get_tasks()
    .then(render_tasks);