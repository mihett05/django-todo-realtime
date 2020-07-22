const tasks = document.querySelector("#tasks");

get_tasks()
    .then(data => {
        data.forEach((v) => {
            const el = document.createElement("task-card");
            el.setAttribute("task-id", v.id);
            el.setAttribute("text", v.text);
            tasks.append(el);
        });
    });