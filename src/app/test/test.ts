import { Component } from '@angular/core';
import { Hero } from './hero'; //특정 타입이 없으면 꼭 필요한 것은 아님


@Component({
  selector: 'app-test',
  template: `
    <div>{{selectedHero}}</div>
    <button (click)="onSelect('aaa')" style="position: relative; z-index: 1000;">aaa</button>

    <test-detail [hero] = "selectedHero"></test-detail>
  `
})

export class TestComponent {
  selectedHero: any;
  onSelect(hero:any) {
    this.selectedHero = hero;
  }
}
