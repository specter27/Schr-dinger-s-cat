import { Component, OnInit   } from '@angular/core';
import { Resource } from '../resource.model';
import { ResourceService } from '../resource.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
 
  resource : Resource[];
  constructor(private resourceservice:ResourceService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.resource=this.resourceservice.getResource();
  }

  onNewResource()
  {
      this.router.navigate(['new'],{relativeTo:this.route});
  }



  // Onresourceselected(input : Resource)
  // {
  //     this.resourcewasselected.emit(input);
  // }

}
