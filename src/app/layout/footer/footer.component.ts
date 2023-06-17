import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import gsap from 'gsap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
})
export class FooterComponent {
  ngOnInit() {
    this.animateIcons();
    this.appearsIcons();
  }

  appearsIcons() {
    const linkedinIcon: any = document.querySelector('.linkedin-icon');
    linkedinIcon.classList.add('hidden-button');
    const githubIcon: any = document.querySelector('.github-icon');
    githubIcon.classList.add('hidden-button');
    const twitterIcon: any = document.querySelector('.twitter-icon');
    twitterIcon.classList.add('hidden-button');

    gsap.delayedCall(3.5, () => {
      linkedinIcon.classList.remove('hidden-button');
      gsap.to('.linkedin-icon', {
        x: 30,
        duration: 3,
        ease: 'elastic',
      });
    });

    gsap.delayedCall(4.1, () => {
      githubIcon.classList.remove('hidden-button');
      gsap.to('.github-icon', {
        x: 30,
        duration: 3,
        ease: 'elastic',
      });
    });

    gsap.delayedCall(4.7, () => {
      twitterIcon.classList.remove('hidden-button');
      gsap.to('.twitter-icon', {
        x: 30,
        duration: 3,
        ease: 'elastic',
      });
    });
  }
  animateIcons() {
    const element: any = document.querySelector('.icon');

    gsap.to('.linkedin-icon', {
      duration: 1.5,
      rotate: 15,
      yoyo: true,
      repeat: Infinity,
      ease: 'elastic',
      scale: 1.2,
      repeatDelay: 2,
    });

    //same as above but with delay
    gsap.to('.github-icon', {
      duration: 1.5,
      rotate: 15,
      yoyo: true,
      repeat: Infinity,
      ease: 'elastic',
      scale: 1.2,
      repeatDelay: 2,
      delay: 1,
    });

    gsap.to('.twitter-icon', {
      duration: 1.5,
      rotate: 15,
      yoyo: true,
      repeat: Infinity,
      ease: 'elastic',
      scale: 1.2,
      repeatDelay: 2,
      delay: 2,
    });

    // element.addEventListener('mouseenter', () => {
    //   gsap.to(element, {
    //     opacity: 0.8,
    //     duration: 0.2,
    //   });
    // });

    // element.addEventListener('mouseleave', () => {
    //   gsap.to(element, {
    //     scale: 1,
    //     opacity: 1,
    //     duration: 0.3,
    //   });
    // });
  }

  animateIconsOnClick() {}
}
