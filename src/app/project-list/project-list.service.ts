import { Project} from '../shared/project.model';
import { EventEmitter } from '@angular/core';

export class ProjectListService{
   
   projectadded=new EventEmitter<Project[]>();
   private projects : Project[]=[new Project('Door-Automation Architecture')];

   getProjects(){
       //The slice() method returns the selected elements in an array, as a new array object.
       /*the main reason of using slice() so that we can only access the 
          projects from this class only not anywhere else in this app*/
       return this.projects.slice();
   }

   addProject(projectname : Project)
   {
        this.projects.push(projectname);
        this.projectadded.emit(this.projects.slice());
   }

   addProjectreq(requiredments : Project[])
   {
       //... is spread opeartor that converts the array into list
       this.projects.push(...requiredments);
       this.projectadded.emit(this.projects.slice());
   }

}