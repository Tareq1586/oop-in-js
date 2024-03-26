class BetterArray{
    #items;
    constructor(){
        this.#items = [];
    }
    getItems(){
        return [...this.#items];
    }
    addItem(item){
        this.#items.push(item);
    }
    removeItem(itemToDelete){
        this.#items = this.#items.filter((item) => item !== itemToDelete);
    }
    modifyItem(itemToChange, newValue){
        const index = this.#items.indexOf(itemToChange);
        if(index !== -1){
            this.#items[index] = newValue; 
        }
    }
}
const array = new BetterArray();
array.addItem("I love Bangladesh");
array.addItem("I love JavaScript");
array.removeItem("I love JavaScript");
array.modifyItem("I love Bangladesh", "I love my mother");
console.log(array.getItems());
