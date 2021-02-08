import { Component, OnInit } from '@angular/core';
import { PortfolioProject } from './projects.model';
import { ResponsiveService } from 'src/app/shared/responsive.service';
import { Router } from '@angular/router';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public projects: PortfolioProject[] = [];

  constructor(
    public responsiveSrv: ResponsiveService,
    private router: Router,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.projectsService
      .getProjects()
      .subscribe((projects: PortfolioProject[]) => {
        this.projects = projects;
      });
  }

  public viewProject(project: PortfolioProject): void {
    this.router.navigate(['/portfolio', project.id]);
  }
}
