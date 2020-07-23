const ws = new WebSocket(`ws://${location.host}/ws/todo`);

ws.onopen = () => {
    console.log("open");
}

ws.onclose = (event) => {
    console.log(event);
}

ws.onmessage = (event) => {
    console.log(event);
}

ws.onerror = (error) => {
    console.log(error);
}
