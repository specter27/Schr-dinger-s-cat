import { Component, OnInit, ViewChild , ElementRef } from '@angular/core';
import { Project } from 'src/app/shared/project.model';
import { ProjectListService } from '../project-list.service'
@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  @ViewChild('nameinput', { static: false }) name:ElementRef;
  // @Output() projectadded=new EventEmitter<Project>();
  constructor(private plservice: ProjectListService) { }

  ngOnInit(): void {
  }

  OnAddProject(){
    console.log(this.name.nativeElement.value);
    const proj=this.name.nativeElement.value;
    const newproject=new Project(proj);
    // this.projectadded.emit(newproject)
    this.plservice.addProject(newproject);
    


  }

}
