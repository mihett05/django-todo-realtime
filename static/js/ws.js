const ws = new WebSocket(`ws://${location.host}/ws/todo`);

ws.onclose = (event) => {
    console.log(event);
}

ws.onmessage = (event) => {
    try {
        let data = JSON.parse(event.data);
        parse_change(data);
    } catch (e) {}

}

ws.onerror = (error) => {
    console.log(error);
}
