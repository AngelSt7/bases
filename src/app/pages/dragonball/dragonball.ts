import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list";
import { Character, CreateCharacter } from '../../components/interfaces/character.interface';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add';

@Component({
  selector: 'app-dragonball',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css'
})

export class DragonballComponent {

  characters = signal<Character[]>([
    { id: 1, name: "Gokú", power: 9001 },
    { id: 2, name: "Vegeta", power: 8000 },
    { id: 3, name: "Piccolo", power: 3000 },
    { id: 4, name: "Yamcha", power: 500 },
  ])

  addCharacter = (character: Character) => {
    this.characters.update(list => [...list, character])
  }

  classNamesPower = computed(() => {
    const classNames: Record<number, any> = {};
    for (const character of this.characters()) {
      classNames[character.id] = {
        'text-danger fw-bold': character.power > 8500,
        'text-primary': character.power <= 8500
      }
    }
    return classNames
  })
}
