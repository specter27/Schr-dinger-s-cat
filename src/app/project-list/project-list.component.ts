import { Component, OnInit } from '@angular/core';
import { Project} from '../shared/project.model';
import { ProjectListService } from './project-list.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects : Project[];
  constructor(private plservice : ProjectListService) { }

  ngOnInit(): void {
    this.projects=this.plservice.getProjects();
    this.plservice.projectadded.subscribe(
      (pro:Project[]) => {
        this.projects=pro;
      }
    );
  }
  

}
