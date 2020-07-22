const render_tasks = (todo_list) => {
    const tasks = document.querySelector("#tasks");
    tasks.innerHTML = "";

    todo_list.forEach((v) => {
        const el = document.createElement("task-card");
        el.setAttribute("task-id", v.id);
        el.setAttribute("text", v.text);
        tasks.append(el);
    });
}

const delete_task_action = (id) => {
    delete_task(id)
        .then(render_tasks);
}

get_tasks()
    .then(render_tasks);