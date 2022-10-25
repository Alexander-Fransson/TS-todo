class ItemComponent extends HTMLElement{
    constructor(name : string){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot?.appendChild(this.template(name));
    }  
    
    private template(name : string) {
        const itemTemplate = document.createElement('template');
        itemTemplate.innerHTML = `
            <li>${name}</li>
            <button>X</button>
        `;
        return itemTemplate.content.cloneNode(true);
    }
}

window.customElements.define('list-item', ItemComponent);