import { Injectable } from '@angular/core';
import { ContactLink, ExperienceItem, Project, SkillCategory } from '../model';

@Injectable({
  providedIn: 'root',
})
export class Portfolio {
  getSkills(): SkillCategory[] {
    return [
      {
        category: 'Backend',
        skills: ['.NET Core', 'C#', 'Web API', 'EF Core', 'RESTful APIs', 'xUnit / NUnit'],
      },
      {
        category: 'Frontend',
        skills: ['Angular 19', 'TypeScript', 'HTML5', 'CSS', 'Bootstrap', 'Angular Material'],
      },
      {
        category: 'Database',
        skills: ['SQL Server', 'MongoDB', 'DB Optimization'],
      },
      {
        category: 'Cloud & DevOps',
        skills: ['Azure Services', 'Bitbucket', 'Jenkins', 'OpenShift (OCP)', 'CI/CD'],
      },
      {
        category: 'Tools & Methods',
        skills: ['Git', 'Postman', 'Swagger', 'Agile / Scrum', 'Clean Architecture'],
      },
      {
        category: 'AI-Assisted Dev',
        skills: ['ChatGPT', 'GitHub Copilot', 'Claude', 'Google Gemini'],
      },
    ];
  }
 
  getExperience(): ExperienceItem[] {
    return [
      {
        id: '1',
        company: 'Synergech Technologies',
        role: 'Software Engineer',
        period: {
          start: 'Jul 2024',
          end: 'Nov 2025',
        },
        description:
          'Led modernization of Lloyd\'s Rater (Insurance Domain) — migrating legacy Bubble UI and Azure Logic Apps into a scalable Angular + .NET Core architecture. Contributed to PNC Banking, building secure APIs using .NET Core EF. Designed modular RESTful APIs for insurance quote generation workflows, integrated third-party vendor APIs, and maintained CI/CD pipelines via Bitbucket, Jenkins, and Red Hat OpenShift.',
        technologies: ['.NET Core', 'Angular 19', 'SQL Server', 'Azure', 'Jenkins', 'OpenShift', 'xUnit'],
      },
      {
        id: '2',
        company: 'Orion Innovation',
        role: 'Software Engineer',
        period: {
          start: 'Apr 2022',
          end: 'Mar 2024',
        },
        description:
          'Contributed to the Onboarding Application across Angular and .NET. Performed UI enhancements, bug fixing, and feature updates in Angular components. Supported backend development by resolving issues in .NET Core Web API. Collaborated with senior developers and worked in Agile environment.',
        technologies: ['Angular', '.NET Core', 'Web API', 'Agile'],
      },
      {
        id: '3',
        company: 'Orion Innovation',
        role: 'Intern — Full Stack',
        period: {
          start: 'Feb 2022',
          end: 'Mar 2022',
        },
        description:
          'Trained as Full Stack Developer in .NET, Angular and SQL. Gained foundational knowledge across the stack.',
        technologies: ['.NET', 'Angular', 'SQL'],
      },
    ];
  }
 
  getProjects(): Project[] {
    return [
      {
        id: '1',
        number: '01',
        domain: 'Insurance Domain',
        name: 'Lloyd\'s Rater Modernization',
        description:
          'End-to-end transformation of a legacy insurance quoting platform. Replaced Bubble UI and Azure Logic Apps with a clean Angular + .NET Core architecture, enabling scalable quote generation workflows and vendor API integrations.',
        technologies: ['.NET Core', 'Angular 19', 'Azure', 'Angular Material'],
      },
      {
        id: '2',
        number: '02',
        domain: 'Banking Domain',
        name: 'PNC Banking API',
        description:
          'Developed secure, production-grade banking APIs using .NET Core and EF Core. Focused on robust error handling, structured logging, clean architecture, and thorough unit test coverage.',
        technologies: ['.NET Core', 'EF Core', 'SQL Server', 'xUnit'],
      }
    ];
  }
 
  getContactLinks(): ContactLink[] {
    return [
      {
        icon: 'mail',
        label: 'vinith1805@gmail.com',
        href: 'mailto:vinith1805@gmail.com',
        type: 'email',
      },
      {
        icon: 'phone',
        label: '+91 80156 33350',
        href: 'tel:+918015633350',
        type: 'phone',
      },
      {
        icon: 'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/vinith-s-fullstack/',
        type: 'social',
      },
      {
        icon: 'github',
        label: 'GitHub',
        href: 'https://github.com/VINITH1805',
        type: 'social',
      }
    ];
  }
 
  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '/Vinith_S_Resume.pdf';
    link.download = 'Vinith_S_Resume.pdf';
    link.click();
  }
}
 


