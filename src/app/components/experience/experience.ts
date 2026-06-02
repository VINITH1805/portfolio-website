import { Component } from '@angular/core';
import { Portfolio } from '../../services/portfolio';
import { ExperienceItem } from '../../model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experience: ExperienceItem[] = [];
 
  constructor(private portfolioService: Portfolio) {}
 
  ngOnInit(): void {
    this.experience = this.portfolioService.getExperience();
  }
}
