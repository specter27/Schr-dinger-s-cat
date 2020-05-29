import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/component.header';
import { ResourceComponent } from './resource/resource.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ResourceDetailComponent } from './resource/resource-detail/resource-detail.component';
import { ResourceListComponent } from './resource/resource-list/resource-list.component';
import { ResourceItemComponent } from './resource/resource-list/resource-item/resource-item.component';
import { ProjectEditComponent } from './project-list/project-edit/project-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ProjectListService } from './project-list/project-list.service';
import { ResourceStartComponent } from './resource/resource-start/resource-start.component';
import { ResourceEditComponent } from './resource/resource-edit/resource-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResourceComponent,
    ProjectListComponent,
    ResourceDetailComponent,
    ResourceListComponent,
    ResourceItemComponent,
    ProjectEditComponent,
    DropdownDirective,
    ResourceStartComponent,
    ResourceEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule
  ],
  providers: [ProjectListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
