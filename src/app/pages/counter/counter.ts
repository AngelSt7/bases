import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})

export class CounterComponent {
  private initValue = 10
  counter = signal(this.initValue)

  increseBy(value: number) : void {
    this.counter.update(current => current + value)
  }

  reset() : void{
    this.counter.set(this.initValue)
  }

}
