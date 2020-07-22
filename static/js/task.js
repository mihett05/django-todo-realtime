class Task extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="card task" id="task-${this.getAttribute("task-id")}">
                <div class="card-body">
                    <p class="card-text">
                        ${this.getAttribute("text")}
                    </p>
                    <a href="#" class="card-link">Edit</a>
                    <a
                        href="#"
                        onclick="delete_task(${this.getAttribute("task-id")})"
                        class="card-link"
                    >
                        Delete
                    </a>
                </div>
            </div>
        `;
    }

    static get observedAttributes() {
        return ["task-id", "text"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
}

customElements.define("task-card", Task);