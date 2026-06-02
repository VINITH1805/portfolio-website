import { Component } from '@angular/core';
import { Portfolio } from '../../services/portfolio';
import { SkillCategory } from '../../model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills: SkillCategory[] = [];
 
  constructor(private portfolioService: Portfolio) {}
 
  ngOnInit(): void {
    this.skills = this.portfolioService.getSkills();
  }
}
