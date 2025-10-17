import { Component, computed, input, output, signal } from '@angular/core';
import { Character, CreateCharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character-add',
  imports: [],
  templateUrl: './character-add.html',
})

export class CharacterAddComponent {

  data = signal<Partial<CreateCharacter>>({});
  newCharacter = output<Character>()

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
      const value = {
        id: Math.floor(Math.random() * 1000),
        ...data
      } as Character
      this.newCharacter.emit(value)
    }
    this.resetForm()
  }

  resetForm = () => this.data.set({})
}
