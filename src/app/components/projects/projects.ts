import { Component } from '@angular/core';
import { Portfolio } from '../../services/portfolio';
import { Project } from '../../model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [];
 
  constructor(private portfolioService: Portfolio) {}
 
  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
  }
}
