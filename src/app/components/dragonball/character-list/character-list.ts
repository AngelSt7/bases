import { Component, input, Signal } from '@angular/core';
import type { Character } from '../../interfaces/character.interface';
import { NgClass } from '@angular/common';

interface Props {
  characters: Character[]
}

@Component({
  selector: 'app-character-list',
  imports: [NgClass],
  templateUrl: './character-list.html',
})

export class CharacterListComponent {

  //**Props */
  characters = input.required<Props['characters']>();
  classNamesPower = input.required<Signal<Record<number, any>>>();
  lenghtCharacters = input.required<() => number>()
  prueba = input.required<() => number>();

}