import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list";
import { Character, CreateCharacter } from '../../components/interfaces/character.interface';

@Component({
  selector: 'app-dragonball',
  imports: [NgClass, CharacterListComponent],
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

  data = signal<Partial<CreateCharacter>>({});

  getAttribute = (key: keyof CreateCharacter) => this.data()?.[key] ?? '';

  setData = (key: keyof CreateCharacter, value: string | number) => {
    this.data.update(current => ({
      ...current,
      [key]: value
    }));
  };

  addCharacter = () => {
    const data = this.data()
    if (Object.values(this.data()).some(v => v !== null && v !== undefined)) {
      this.characters.update(list => [...list, { id: this.characters().length + 1, ...data } as Character])
    }
  }

  lenghtCharacters = () => {
    return this.characters().length
  }

  prueba = () => {
    return 3
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
