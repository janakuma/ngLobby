import { Component, Input } from '@angular/core';
//import { Hero } from './hero';


@Component({
  selector: 'test-detail',
  template: `
        <p>11{{hero}}1111</p>
    `
})

export class TestDetailComponent {
    @Input() hero: any;
}
