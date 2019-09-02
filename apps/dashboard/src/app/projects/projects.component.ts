import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  Customer,
  Project,
  CustomersService,
  ProjectsFacade, NotificationsService
} from '@workshop/core-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ ProjectsFacade ]
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  currentProject$: Observable<Project>;
  customers$: Observable<Customer[]>;

  constructor(
    private projectsFacade: ProjectsFacade,
    private customerService: CustomersService,
    private ns: NotificationsService) {
    this.projects$ = projectsFacade.projects$;
    this.currentProject$ = projectsFacade.currentProject$;
  }

  ngOnInit() {
    this.getProjects();
    this.getCustomers();
    this.resetCurrentProject();
  }

  resetCurrentProject() {
    this.projectsFacade.resetCurrentProject();
  }

  selectProject(project) {
    this.projectsFacade.selectProject(project);
  }

  cancel() {
    this.resetCurrentProject();
  }

  getCustomers() {
    this.customers$ = this.customerService.all();
  }

  getProjects() {
    this.projectsFacade.getProjects();
  }

  saveProject(project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project) {
    this.projectsFacade.createProject(project);
    // these will go away
    this.ns.emit('Project created!');
    this.resetCurrentProject();
  }

  updateProject(project) {
    this.projectsFacade.updateProject(project);
    // these will go away
    this.ns.emit('Project updated!');
    this.resetCurrentProject();
  }

  deleteProject(project) {
    this.projectsFacade.deleteProject(project);
    // these will go away
    this.ns.emit('Project deleted!');
    this.resetCurrentProject();
  }
}

