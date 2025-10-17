import { Component, input, Signal } from '@angular/core';
import type { Character } from '../../interfaces/character.interface';
import { NgClass } from '@angular/common';

interface Props {
  characters: Character[]
  classNamesPower: Signal<Record<number, any>>
}

@Component({
  selector: 'app-character-list',
  imports: [NgClass],
  templateUrl: './character-list.html',
})

export class CharacterListComponent {

  characters = input.required<Props['characters']>();
  classNamesPower = input.required<Props['classNamesPower']>();

}