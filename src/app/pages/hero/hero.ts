import { Component, signal } from '@angular/core';

interface Hero {
  name: string,
  power: string,
  age: number
  description: string
}

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})

export class HeroPageComponent {
  private heroDefault = {
    name: 'Windstorm',
    age: 30,
    power: 'Lightning',
    description: 'Some description'
  };

  hero = signal<Hero>(this.heroDefault);

  getHero(key: keyof Hero) {
    return this.hero()[key];
  }

  getCapitalize() {
    return this.hero().name.toUpperCase();
  }

  changeHero(){
    return this.hero.update(value => ({
      ...value,
      name: 'Ironman',
      age: 45
    }))
  }

  resetForm() {
    return this.hero.set(this.heroDefault)
  }
}
