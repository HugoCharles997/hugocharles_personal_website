import { Component, Output, EventEmitter } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import gsap from 'gsap';

/**
 * @title Menu positioning
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
})
export class NavbarComponent {
  @Output()
  menuClosed: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}
  ngOnInit() {
    this.animateMenu();
    this.animateButtons();
  }

  public isMenuOpen: boolean = false;

  animateMenuOnOpen() {
    gsap.to('.toggle-menu-button', {
      x: 100,
      duration: 1,
      repeat: 0,
      ease: 'power3',
    });

    this.animateButtonsReverse();
  }

  animateMenuOnClose() {
    gsap.to('.toggle-menu-button', {
      x: 0,
      duration: 1,
      repeat: 0,
      ease: 'power3',
    });

    this.animateButtonsReturn();
  }
  animateMenu() {
    const button: any = document.querySelector('.toggle-menu-button');
    button.classList.add('hidden-button');
    gsap.delayedCall(1, () => {
      button.classList.remove('hidden-button');
      gsap.to('.toggle-menu-button', {
        y: 20,
        duration: 3,
        ease: 'elastic',
      });
    });
  }

  animateButtons() {
    const homeButton: any = document.querySelector('.home-button');
    homeButton.classList.add('hidden-button');
    const aboutButton: any = document.querySelector('.about-button');
    aboutButton.classList.add('hidden-button');
    const projectsButton: any = document.querySelector('.projects-button');
    projectsButton.classList.add('hidden-button');
    const musicButton: any = document.querySelector('.music-button');
    musicButton.classList.add('hidden-button');
    const contactButton: any = document.querySelector('.contact-button');
    contactButton.classList.add('hidden-button');

    gsap.delayedCall(1, () => {
      homeButton.classList.remove('hidden-button');
      gsap.to('.home-button', {
        y: 50,
        duration: 3,
        ease: 'elastic',
      });
    });

    gsap.delayedCall(1.5, () => {
      aboutButton.classList.remove('hidden-button');
      gsap.to('.about-button', {
        y: 50,
        duration: 3,
        ease: 'elastic',
      });
    });

    gsap.delayedCall(2, () => {
      projectsButton.classList.remove('hidden-button');
      gsap.to('.projects-button', {
        y: 50,
        duration: 3,
        ease: 'elastic',
      });
    });

    gsap.delayedCall(2.5, () => {
      musicButton.classList.remove('hidden-button');
      gsap.to('.music-button', {
        y: 50,
        duration: 3,
        ease: 'elastic',
      });
    });

    gsap.delayedCall(3, () => {
      contactButton.classList.remove('hidden-button');
      gsap.to('.contact-button', {
        y: 50,
        duration: 3,
        ease: 'elastic',
      });
    });
  }

  animateButtonsReturn() {
    const homeButton: any = document.querySelector('.home-button');
    homeButton.classList.add('hidden-button');
    const aboutButton: any = document.querySelector('.about-button');
    aboutButton.classList.add('hidden-button');
    const projectsButton: any = document.querySelector('.projects-button');
    projectsButton.classList.add('hidden-button');
    const musicButton: any = document.querySelector('.music-button');
    musicButton.classList.add('hidden-button');
    const contactButton: any = document.querySelector('.contact-button');
    contactButton.classList.add('hidden-button');

    homeButton.classList.remove('hidden-button');
    gsap.to('.home-button', {
      y: 50,
      duration: 3,
      ease: 'elastic',
    });
    gsap.delayedCall(0.1, () => {
      aboutButton.classList.remove('hidden-button');
      gsap.to('.about-button', {
        y: 50,
        duration: 3,
        ease: 'elastic',
      });
    });

    gsap.delayedCall(0.2, () => {
      projectsButton.classList.remove('hidden-button');
      gsap.to('.projects-button', {
        y: 50,
        duration: 3,
        ease: 'elastic',
      });
    });

    gsap.delayedCall(0.3, () => {
      musicButton.classList.remove('hidden-button');
      gsap.to('.music-button', {
        y: 50,
        duration: 3,
        ease: 'elastic',
      });
    });

    gsap.delayedCall(0.4, () => {
      contactButton.classList.remove('hidden-button');
      gsap.to('.contact-button', {
        y: 50,
        duration: 3,
        ease: 'elastic',
      });
    });
  }

  animateButtonsReverse() {
    const homeButton: any = document.querySelector('.home-button');
    const aboutButton: any = document.querySelector('.about-button');
    const projectsButton: any = document.querySelector('.projects-button');
    const musicButton: any = document.querySelector('.music-button');
    const contactButton: any = document.querySelector('.contact-button');

    gsap.to('.home-button', {
      y: -30,
      duration: 0.75,
      ease: 'bounce',
      repeat: 1,
    });

    gsap.delayedCall(0.25, () => {
      homeButton.classList.add('hidden-button');
    });

    gsap.delayedCall(0.075, () => {
      gsap.to('.about-button', {
        y: -30,
        duration: 0.75,
        ease: 'bounce',
        repeat: 1,
      });

      gsap.delayedCall(0.25, () => {
        aboutButton.classList.add('hidden-button');
      });
    });

    gsap.delayedCall(0.15, () => {
      gsap.to('.projects-button', {
        y: -30,
        duration: 0.75,
        ease: 'bounce',
        repeat: 1,
      });

      gsap.delayedCall(0.25, () => {
        projectsButton.classList.add('hidden-button');
      });
    });

    gsap.delayedCall(0.225, () => {
      gsap.to('.music-button', {
        y: -30,
        duration: 0.75,
        ease: 'bounce',
        repeat: 1,
      });

      gsap.delayedCall(0.25, () => {
        musicButton.classList.add('hidden-button');
      });
    });

    gsap.delayedCall(0.3, () => {
      gsap.to('.contact-button', {
        y: -30,
        duration: 0.75,
        ease: 'bounce',
        repeat: 1,
      });

      gsap.delayedCall(0.25, () => {
        contactButton.classList.add('hidden-button');
      });
    });
  }
}
