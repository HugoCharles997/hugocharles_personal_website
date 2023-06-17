import { Component } from '@angular/core';
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
  ngOnInit() {
    this.animateMenu();
    this.animateButtons();
  }

  animateMenuOnClick() {
    gsap.to('.toggle-menu-button', {
      x: 0,
      duration: 2,
      yoyo: true,
      repeat: 1,
      ease: 'elastic',
    });
  }
  animateMenu() {
    const button: any = document.querySelector('.toggle-menu-button');
    button.classList.add('hidden-button');

    gsap.delayedCall(1, () => {
      button.classList.remove('hidden-button');
      gsap.to('.toggle-menu-button', {
        x: -100,
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

    // homeButton.addEventListener('mouseenter', () => {
    //   gsap.to(homeButton, {
    //     scale: 1.05,
    //     duration: 0.1,
    //   });
    // });
    // homeButton.addEventListener('mouseleave', () => {
    //   gsap.to(homeButton, {
    //     scale: 1,
    //     duration: 0.1,
    //   });
    // });

    // aboutButton.addEventListener('mouseenter', () => {
    //   gsap.to(aboutButton, {
    //     scale: 1.05,
    //     duration: 0.1,
    //   });
    // });
    // aboutButton.addEventListener('mouseleave', () => {
    //   gsap.to(aboutButton, { scale: 1, duration: 0.1 });
    // });

    // projectsButton.addEventListener('mouseenter', () => {
    //   gsap.to(projectsButton, {
    //     scale: 1.05,
    //     duration: 0.1,
    //   });
    // });
    // projectsButton.addEventListener('mouseleave', () => {
    //   gsap.to(projectsButton, { scale: 1, duration: 0.1 });
    // });

    // musicButton.addEventListener('mouseenter', () => {
    //   gsap.to(musicButton, {
    //     scale: 1.05,
    //     duration: 0.1,
    //   });
    // });
    // musicButton.addEventListener('mouseleave', () => {
    //   gsap.to(musicButton, { scale: 1, duration: 0.1 });
    // });

    // contactButton.addEventListener('mouseenter', () => {
    //   gsap.to(contactButton, {
    //     scale: 1.05,
    //     duration: 0.1,
    //   });
    // });
    // contactButton.addEventListener('mouseleave', () => {
    //   gsap.to(contactButton, { scale: 1, duration: 0.1 });
    // });
  }
}
