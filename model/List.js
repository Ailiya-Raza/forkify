import uniqid from 'uniqid';

export default class List {
    constructor() {
        this.items = [];
    }

    addItem(ingredient) {
        const item = {
            id: uniqid(),
            ingredient
        }
        this.items.push(item);
        return item;
    }
}