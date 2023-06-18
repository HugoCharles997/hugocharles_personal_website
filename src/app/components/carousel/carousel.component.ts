import { Component, OnInit } from '@angular/core';

import gsap from 'gsap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  ngOnInit(): void {
    this.initializeCarousel();
  }

  initializeCarousel() {
    this.appearsCarousel();
    const text1_options = [
      'front-end development',
      'back-end development',
      'audio programming',
      'music production',
    ];
    const text2_options = [
      'Angular, Material, GSAP, Bootstrap ',
      'SpringBoot, Express.js, Symfony',
      'JUCE, Max/MSP',
      'Bitwig Studio, Ableton Live',
    ];
    const color_options = ['#efc2d5', '#272626', '#efc2d5', '#272626'];
    const image_options = [
      'assets/images/front-dev.png',
      'assets/images/back-dev.png',
      'assets/images/audio-dev.png',
      'assets/images/production.png',
    ];

    var i = 0;
    const currentOptionText1 = document.getElementById(
      'current-option-text1'
    ) as HTMLElement;
    const currentOptionText2 = document.getElementById(
      'current-option-text2'
    ) as HTMLElement;
    const currentOptionImage = document.getElementById('image') as HTMLElement;
    const carousel = document.getElementById('carousel-wrapper') as HTMLElement;
    const mainMenu = document.getElementById('menu') as HTMLElement;
    const optionPrevious = document.getElementById('previous-option');
    const optionNext = document.getElementById('next-option');

    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    currentOptionImage.style.backgroundImage = 'url(' + image_options[i] + ')';
    mainMenu.style.background = color_options[i];

    optionNext!.onclick = function () {
      i = (i + 1) % text1_options.length;
      currentOptionText1.dataset['nextText'] = text1_options[i];
      currentOptionText2.dataset['nextText'] = text2_options[i];
      mainMenu.style.background = color_options[i];
      carousel.classList.add('anim-next');

      setTimeout(() => {
        currentOptionImage.style.backgroundImage =
          'url(' + image_options[i] + ')';
      }, 455);

      setTimeout(() => {
        currentOptionText1.innerText = text1_options[i];
        currentOptionText2.innerText = text2_options[i];
        carousel.classList.remove('anim-next');

        // Check if carousel color is '#272626' and update text color accordingly
        if (color_options[i] === '#272626') {
          currentOptionText1.classList.add('white-text');
          currentOptionText2.classList.add('white-text');
        } else {
          currentOptionText1.classList.remove('white-text');
          currentOptionText2.classList.remove('white-text');
        }
      }, 650);
    };

    optionNext!.onclick = function () {
      i = (i + 1) % text1_options.length;
      currentOptionText1.dataset['nextText'] = text1_options[i];
      currentOptionText2.dataset['nextText'] = text2_options[i];
      mainMenu.style.background = color_options[i];
      carousel.classList.add('anim-next');

      setTimeout(() => {
        currentOptionImage.style.backgroundImage =
          'url(' + image_options[i] + ')';
      }, 455);

      setTimeout(() => {
        currentOptionText1.innerText = text1_options[i];
        currentOptionText2.innerText = text2_options[i];
        carousel.classList.remove('anim-next');

        if (color_options[i] === '#272626') {
          currentOptionText1.classList.remove('white-text');
          currentOptionText2.classList.remove('white-text');
          currentOptionText1.classList.add('black-text');
          currentOptionText2.classList.add('black-text');
        } else {
          currentOptionText1.classList.remove('black-text');
          currentOptionText2.classList.remove('black-text');
          currentOptionText1.classList.add('white-text');
          currentOptionText2.classList.add('white-text');
        }
      }, 650);
    };

    optionPrevious!.onclick = function () {
      i = (i === 0 ? text1_options.length - 1 : i - 1) % text1_options.length;
      currentOptionText1.dataset['previousText'] = text1_options[i];
      currentOptionText2.dataset['previousText'] = text2_options[i];
      mainMenu.style.background = color_options[i];
      carousel.classList.add('anim-previous');

      setTimeout(() => {
        currentOptionImage.style.backgroundImage =
          'url(' + image_options[i] + ')';
      }, 455);

      setTimeout(() => {
        currentOptionText1.innerText = text1_options[i];
        currentOptionText2.innerText = text2_options[i];
        carousel.classList.remove('anim-previous');

        // Toggle between black and white text based on background color
        if (color_options[i] === '#272626') {
          currentOptionText1.classList.remove('white-text');
          currentOptionText2.classList.remove('white-text');
          currentOptionText1.classList.add('black-text');
          currentOptionText2.classList.add('black-text');
        } else {
          currentOptionText1.classList.remove('black-text');
          currentOptionText2.classList.remove('black-text');
          currentOptionText1.classList.add('white-text');
          currentOptionText2.classList.add('white-text');
        }
      }, 650);
    };

    // Function to trigger the "up" button click
    const triggerUpButtonClick = () => {
      optionNext!.click();
    };

    // Automatically trigger the "up" button click every 4 seconds
    setInterval(triggerUpButtonClick, 6000);
  }

  appearsCarousel() {
    const carouselWrapper: any = document.getElementById('carousel-wrapper');

    carouselWrapper.classList.remove('hidden-button');

    gsap.from(carouselWrapper, {
      x: '100%',
      width: '0%',
      height: '0%',
      duration: 0.7,
      ease: 'circ.out',
    });
  }
}
