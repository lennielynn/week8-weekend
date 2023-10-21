import { Inventory, InventoryItem } from "../generator/Inventory"
import Character from "../generator/RPGcharacter"

export default class GenApp {
    private container: HTMLElement
    // private generator: generateCharacter
    private raceForm: HTMLFormElement
    private nameForm: HTMLFormElement


    constructor(){
        this.container = document.getElementsByTagName('main')[0]!
        // this.generator = generateCharacter
        this.raceForm = document.querySelector('#input-race') as HTMLFormElement
        this.raceForm.addEventListener('submit', this.getFormData.bind(this))
        this.nameForm = document.querySelector('#input-name') as HTMLFormElement
        this.nameForm.addEventListener('submit', this.getFormData.bind(this))
    }

getFormData(e:SubmitEvent){
    e.preventDefault()

}

displayItems(){
    this.container.innerHTML = ''
    const InvDiv = this.createInventoryDiv()
}

createShopDiv(){

}

createInventoryDiv(inventory: Inventory){
    const invDiv = document.createElement('div')
    const invList = document.createElement('ul')
    for (const item of inventory){
        inventory.map()
    }
    const newInvItem = document.createElement('li')
    newInvItem.innerText = item
    invList.append(newInvItem)    
    invDiv.append(invList)
}
}

// displayCharacter(){
//     const charDiv = document.querySelector('#character-display')
//     charDiv?.appendChild()
// }
// }