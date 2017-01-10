import {Component } from '@angular/core';

@Component({
  selector: 'soho-progress-demo',
  templateUrl:'./progress.demo.html'
})

export class ProgressDemoComponent {
  /*
   * val is used to set the value in the HTML/DOM
   */
  private val: number= 30;
  constructor() { }

  update() {
    this.val = 100;
  }

}