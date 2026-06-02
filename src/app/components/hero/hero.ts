import { Component } from '@angular/core';
import { Portfolio } from '../../services/portfolio';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  constructor(private portfolioService: Portfolio) {}
 
  downloadCV(): void {
    this.portfolioService.downloadCV();
  }
}
