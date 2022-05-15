import { Component, OnInit } from '@angular/core';
import projects from '../../core/data/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects = projects;

  projectsList: any[];

  config: any;

  constructor() {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.projectsList?.length,
    };
  }

  ngOnInit() {
    this.filterProjects('');
  }

  filterProjects(searchTerm: string) {
    if (searchTerm == '') {
      //console.log(projects);
      this.projectsList = projects;
      return this.projectsList;
    }
    var filteredProjectlist = this.projects.filter((p) => {
      return p.category == searchTerm;
    });
    //console.log(filteredProjectlist);
    this.projectsList = filteredProjectlist;
    return this.projectsList;
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}
