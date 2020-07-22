const modal_add_todo = () => {
    const add_input = document.querySelector("#add_input");
    const value = add_input.value;
    add_input.value = "";
    create_task(value)
        .then(render_tasks)
};