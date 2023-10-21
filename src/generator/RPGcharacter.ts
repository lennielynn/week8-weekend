import {v4 as uuidv4} from 'uuid'
import {InventoryItem} from './Inventory';

export default class Character {
    id: string;
    name: string;
    archtype: string;
    fightingStyle: 'ranged' | 'melee';
    inventory: InventoryItem[];
    race: string

    constructor(name: string, archtype:string, fightingStyle :'ranged'|'melee', race: string){
        this.id = uuidv4()
        this.name = name
        this.archtype = archtype
        this.fightingStyle = fightingStyle
        this.inventory = []
        this.race = race
    }



createRPGCharacter(name: string, race: string, archtype: string): Character{
    if (archtype.toLowerCase() == 'archer'){
        const char1 = new Character (name, archtype, 'ranged', race)
        return char1
    } else if (archtype.toLowerCase() == 'knight'){
        const char2 = new Character (name, archtype, 'melee', race)
        return char2
    } else {
        const char3 = new Character (name, archtype, 'melee', race)
        return char3
    }
}

};

