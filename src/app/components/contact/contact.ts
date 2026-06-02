import { Component } from '@angular/core';
import { Portfolio } from '../../services/portfolio';
import { ContactLink } from '../../model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactLinks: ContactLink[] = [];
 
  constructor(private portfolioService: Portfolio) {}
 
  ngOnInit(): void {
    this.contactLinks = this.portfolioService.getContactLinks();
  }
}
