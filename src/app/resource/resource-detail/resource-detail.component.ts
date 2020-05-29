import { Component, OnInit } from '@angular/core';
import { Resource } from '../resource.model';
import { ResourceService } from '../resource.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.css']
})
export class ResourceDetailComponent implements OnInit {
   //using it with routes
  detailreso: Resource;
  id:number;

  constructor(private resourceservice: ResourceService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) => {
        this.id=+params['id'];
        this.detailreso=this.resourceservice.getsingleresource(this.id);
      }
    );
  }

  addToshoppinglist(){
    this.resourceservice.addIngredientstoprojectshoppinglist(this.detailreso.projectrequirements);

  }

  onEditResource(){
       this.router.navigate(['edit'],{relativeTo: this.route});
  }
}
