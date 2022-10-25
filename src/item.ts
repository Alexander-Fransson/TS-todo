class ItemComponent extends HTMLElement{
    constructor(name : string){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot?.appendChild(this.template(name));
        this.setAttribute('name', name);
    }  
    
    private template(name : string) {
        const itemTemplate = document.createElement('template');
        itemTemplate.innerHTML = `
            <li>${name} <button>X</button></li>
        `;
        return itemTemplate.content.cloneNode(true);
    }
}

export {ItemComponent}

window.customElements.define('list-item', ItemComponent);