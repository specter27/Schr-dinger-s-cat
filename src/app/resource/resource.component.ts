import { Component, OnInit } from '@angular/core';
import { Resource } from './resource.model';
import { ResourceService } from './resource.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css'],
  providers: [ResourceService]
})
export class ResourceComponent implements OnInit {

  selectedresource:Resource;

  constructor(private resourceservice : ResourceService) { }

  ngOnInit(): void {
    this.resourceservice.resourceselected.subscribe(
      (reso:Resource)=>{
        this.selectedresource=reso;
      }
    );
  }

}
