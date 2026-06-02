import { Component, signal } from '@angular/core';
import { Portfolio } from '../../services/portfolio';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  mobileMenuOpen = signal(false);
  constructor(private portfolioService: Portfolio) {}
 
  toggleMenu(): void {
    this.mobileMenuOpen.update(val => !val);
  }
 
  closeMenu(): void {
    this.mobileMenuOpen.set(false);
  }
 
  downloadCVAndClose(): void {
    this.portfolioService.downloadCV();
    this.closeMenu();
  }
}
