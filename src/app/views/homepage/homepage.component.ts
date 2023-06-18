import { Component } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  constructor() {}

  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const target2 = document.querySelector('.tw2');

    const writer1 = new Typewriter(target, {
      typeSpeed: 80,
      deleteSpeed: 20,
      cursorColor: '#efc2d5',
      typeColor: '#272626',
    });

    const writer2 = new Typewriter(target2, {
      typeSpeed: 80,
      cursorColor: '#272626',
      typeColor: '#efc2d5',
      loop: true,
    });
    writer1
      .type('Hello there, ')
      .rest(300)
      .type(' I am Hugo.')
      .rest(500)
      .removeCursor()
      .start();

    writer2
      .rest(3000)
      .type('fullstack development')
      .rest(600)
      .clear()
      .type('main Angular & Spring')
      .rest(600)
      .clear()
      .type('audio development')
      .rest(600)
      .clear()
      .type('music production')
      .rest(600)
      .clear()
      .type('used to good practices')
      .rest(600)
      .start();
  }
}
