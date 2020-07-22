function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


const get_tasks = () => {
    return fetch("/todo/", {
        method: "GET",
        headers: { "X-CSRFToken": getCookie("csrftoken") },
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
        headers: { "X-CSRFToken": getCookie("csrftoken") },
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
        headers: { "X-CSRFToken": getCookie("csrftoken") },
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
        headers: { "X-CSRFToken": getCookie("csrftoken") },
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