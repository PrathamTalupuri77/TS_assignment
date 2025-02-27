
interface Product {
    id: number;
    name: string;
    price: number;
    discount?: number; 
}

class Electronics implements Product {
    id!: number;
    name!: string;
    price!: number;
    discount?: number;

    getFinalPrice(): number {
        if (this.discount) {
            return this.price - (this.price * this.discount) / 100;
        }
        return this.price;
    }
}

class Store<T extends Product> {
    items: T[] = [];

   
    addItem(item: T): void {
        this.items.push(item);
        console.log(`${item.name} added to the store.`);
    }

 
    removeItem(id: number): void {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            console.log(`${this.items[index].name} removed from the store.`);
            this.items.splice(index, 1);
        } else {
            console.log(`Item with ID ${id} not found.`);
        }
    }

   
    getItems():string[] {
        return this.items.map(item => item.name);
    }
}

const electronicsStore = new Store<Electronics>();


const laptop = new Electronics();
laptop.id = 1;
laptop.name = "Laptop";
laptop.price = 100000;
laptop.discount = 10;


electronicsStore.addItem(laptop);

console.log("All Products in Store:", electronicsStore.getItems());

console.log(`Final price of Laptop: Rs${laptop.getFinalPrice()}`);

electronicsStore.removeItem(1);
console.log("Updated Products in Store:", electronicsStore.getItems());
