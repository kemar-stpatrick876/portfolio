export interface IPortfolioProject {
  id: number;
  name: string;
  description: string;
  background: string;
  images: {
    index: string;
    details_hero: string;
    details_static_previews: string[];
  };
  themes: string[];
  technologies: string[];
  liveUrl: string;
}

export class PortfolioProject {
  id!: number;
  name!: string;
  description!: string;
  background!: string;
  images!: {
    index: string;
    details_hero: string;
    details_static_previews: string[];
  };
  themes!: string[];
  technologies!: string[];
  liveUrl!: string;
  private next!: PortfolioProject;
  private previous!: PortfolioProject;

  constructor(project: IPortfolioProject) {
    const {
      id,
      name,
      description,
      background,
      images,
      themes,
      technologies,
      liveUrl,
    } = project;

    this.id = id;
    this.name = name;
    this.description = description;
    this.background = background;
    this.images = images;
    this.themes = themes;
    this.technologies = technologies;
    this.liveUrl = liveUrl;
  }

  public set nextProject(project: PortfolioProject) {
    this.next = project;
  }

  public get nextProject(): PortfolioProject {
    return this.next;
  }

  public set previousProject(project: PortfolioProject) {
    this.previous = project;
  }

  public get previousProject(): PortfolioProject {
    return this.previous;
  }

  public static buildProjects(
    iProjects: IPortfolioProject[]
  ): PortfolioProject[] {
    const projects: PortfolioProject[] = iProjects.map(
      (iProject: IPortfolioProject) => new PortfolioProject(iProject)
    );

    projects.forEach((project: PortfolioProject, index: number) => {
      if (index > 0) {
        project.previousProject = projects[index - 1];
      } else {
        project.previousProject = projects[projects.length - 1];
      }
      if (index < projects.length - 1) {
        project.nextProject = projects[index + 1];
      } else {
        project.nextProject = projects[0];
      }
    });

    return projects;
  }
}
