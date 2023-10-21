import {v4 as uuidv4} from 'uuid'
import Character from './RPGcharacter';


 export abstract class InventoryItem {
    private id: string;
    private name: string;
    private price:number;
    private description: string

    constructor(id:string, name:string, price:number, description:string){
        this.id = id 
        this.name = name
        this.price = price
        this.description = description
    }
 }


class Weapon extends InventoryItem {
    private damage:number

    constructor(id: string, name: string, price: number, description:string, damage:number){
        super(id, name, price, description);
        this.damage = damage
    }

    getDamage(): number {
        return this.damage
    }

    setDamage(damage:number): void {
        this.damage = damage
    } 
}



class Armor extends InventoryItem {
    private defense: number

    constructor(id: string, name: string, price: number, description:string, defense:number){
        super(id, name, price, description);
        this.defense = defense
    }

    getDefense(): number {
        return this.defense
    }

    setDefense(defense:number): void {
        this.defense = defense
    }

}



export class Inventory {
    items: InventoryItem[]

    constructor() {
        this.items = []
    }


addToInventory(item: InventoryItem, character: Character){
    character.inventory.push(item)
}


removeAllInstanceOfItem(item: InventoryItem, character: Character){
    character.inventory = character.inventory.filter(i => i != item)
}


removeSpecifiedQuantity (quantity: number,item: InventoryItem, character:Character  ){
    let count = 0
    character.inventory = character.inventory.filter(i => {
        if (i === item && count < quantity){
            count++
            return false
        }
        return true
    })

}}
