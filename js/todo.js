"use strict";
class ItemComponent extends HTMLElement {
    constructor(name) {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot?.appendChild(this.template(name));
    }
    template(name) {
        const itemTemplate = document.createElement('template');
        itemTemplate.innerHTML = `
            <li>${name}</li>
            <button>X</button>
        `;
        return itemTemplate.content.cloneNode(true);
    }
}
window.customElements.define('list-item', ItemComponent);
//# sourceMappingURL=todo.js.map