const modal_add_todo = () => {
    const add_input = document.querySelector("#add_input");
    const value = add_input.value;
    add_input.value = "";
    create_task_action(value);
};

const modal_prepare_edit = (id) => {
    const edit_id = document.querySelector("#edit_input_id");
    edit_id.value = id.toString();
    const edit_text = document.querySelector("#edit_input_text");
    const task_text = document.querySelector(`#task-text-${id}`);
    edit_text.value = task_text.innerText;
};

const modal_edit_todo = () => {
    const id = document.querySelector("#edit_input_id").value;
    const text = document.querySelector("#edit_input_text").value;
    edit_task_action(id, text);
};