import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceComponent } from './resource/resource.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ResourceStartComponent } from './resource/resource-start/resource-start.component'; 
import { ResourceDetailComponent } from './resource/resource-detail/resource-detail.component';
import { ResourceEditComponent } from './resource/resource-edit/resource-edit.component';


const routes: Routes = [
  {path: '' ,redirectTo: '/resource' ,pathMatch:'full'},
  { path: 'resource' ,component: ResourceComponent, children:[
    {path: '' ,component: ResourceStartComponent},
    {path: 'new' ,component: ResourceEditComponent }, 
    {path: ':id' ,component: ResourceDetailComponent },
    {path: ':id/edit' ,component: ResourceEditComponent },

  ]},
  { path: 'project-list' ,component: ProjectListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
