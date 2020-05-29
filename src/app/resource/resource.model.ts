import { Project } from '../shared/project.model';

export class Resource{
   public name:string;
   public description:string;
   public imagePath:string;
   public projectrequirements:Project[];

   constructor(name:string,desc:string,imagepath:string,projectrequirements:Project[])
   {
       this.name=name;
       this.description=desc;
       this.imagePath=imagepath;
       this.projectrequirements=projectrequirements;
   }

}