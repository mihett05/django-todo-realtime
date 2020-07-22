const get_tasks = () => {
    return fetch("/todo/", {
        method: "GET",
        credentials: "same-origin"
    })
        .then(r => r.json())
        .then(data => {
            if (data.ok === true) {
                return data.todo_list;
            } else {
                throw new Error(`API: ${data.error}`)
            }
        });
}

const create_task = (text) => {
    return fetch("/todo/", {
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify({
            text
        })
    })
        .then(r => r.json())
        .then(data => {
            if (data.ok === true) {
                return data.todo_list;
            } else {
                throw new Error(`API: ${data.error}`)
            }
        });
}

const update_task = (id, text) => {
    return fetch("/todo/", {
        method: "PUT",
        credentials: "same-origin",
        body: JSON.stringify({
            id,
            text
        })
    })
        .then(r => r.json())
        .then(data => {
            if (data.ok === true) {
                return data.todo_list;
            } else {
                throw new Error(`API: ${data.error}`)
            }
        });
}

const delete_task = (id) => {
    return fetch("/todo/", {
        method: "DELETE",
        credentials: "same-origin",
        body: JSON.stringify({
            id
        })
    })
        .then(r => r.json())
        .then(data => {
            if (data.ok === true) {
                return data.todo_list;
            } else {
                throw new Error(`API: ${data.error}`)
            }
        });
}