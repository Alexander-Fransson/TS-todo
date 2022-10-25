import { ItemComponent } from "./item";

//adding item

const addItemForm = document.querySelector('form')
const addTextValue= document.querySelector('#add-text-field')! as HTMLInputElement
const itemContainer = document.querySelector('ul');

addItemForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(addTextValue.value.length){
        const newItem = new ItemComponent(addTextValue.value);
        addTextValue.value = '';
        itemContainer?.appendChild(newItem);
    }
});

//searching

const search = document.querySelector('#search') as HTMLInputElement;

search?.addEventListener('keyup', () => {
    const itemList : NodeListOf<HTMLElement> = document.querySelectorAll('list-item');
    
    itemList.forEach((element) => {
        if(element){
            if(!element.getAttribute('name')!.includes(search.value)){
                element.style.display = 'none';
            }else{
                element.style.display = 'block';
            }
        }

    })
});

itemContainer?.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()
    const eventCause = e.composedPath()[0] as HTMLElement
    if (eventCause.tagName == 'BUTTON' ) {
        eventCause.parentElement?.remove()
    }
})

