define("item", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ItemComponent = void 0;
    class ItemComponent extends HTMLElement {
        constructor(name) {
            super();
            this.attachShadow({ mode: 'open' });
            this.shadowRoot?.appendChild(this.template(name));
            this.setAttribute('name', name);
        }
        template(name) {
            const itemTemplate = document.createElement('template');
            itemTemplate.innerHTML = `
            <li>${name} <button>X</button></li>
        `;
            return itemTemplate.content.cloneNode(true);
        }
    }
    exports.ItemComponent = ItemComponent;
    window.customElements.define('list-item', ItemComponent);
});
define("index", ["require", "exports", "item"], function (require, exports, item_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const addItemForm = document.querySelector('form');
    const addTextValue = document.querySelector('#add-text-field');
    const itemContainer = document.querySelector('ul');
    addItemForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        if (addTextValue.value.length) {
            const newItem = new item_1.ItemComponent(addTextValue.value);
            addTextValue.value = '';
            itemContainer?.appendChild(newItem);
        }
    });
    const search = document.querySelector('#search');
    search?.addEventListener('keyup', () => {
        const itemList = document.querySelectorAll('list-item');
        itemList.forEach((element) => {
            if (element) {
                if (!element.getAttribute('name').includes(search.value)) {
                    element.style.display = 'none';
                }
                else {
                    element.style.display = 'block';
                }
            }
        });
    });
    itemContainer?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const eventCause = e.composedPath()[0];
        if (eventCause.tagName == 'BUTTON') {
            eventCause.parentElement?.remove();
        }
    });
});
//# sourceMappingURL=todo.js.map