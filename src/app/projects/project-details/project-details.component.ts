import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PortfolioProject } from '../projects/projects.model';
import { ProjectsService } from '../projects.service';
import {
  ResponsiveService,
  screenTypes,
} from 'src/app/shared/responsive.service';

@Component({
  selector: 'portfolio-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  public project!: PortfolioProject;
  public readonly screenTypes = screenTypes;
  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    public responsiveSrv: ResponsiveService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.projectsService
      .getProjects(parseInt(id, 10))
      .subscribe((projects: PortfolioProject[]) => {
        this.project = projects[0];
      });
  }

  public viewWebsite(project: PortfolioProject): void {
    window.open('//' + project.liveUrl, '_blank');
  }

  goToProject(project: PortfolioProject): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['/portfolio', project.id]);
  }
}
