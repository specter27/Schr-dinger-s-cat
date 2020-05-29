import { EventEmitter, Injectable } from '@angular/core';
import { Resource } from './resource.model';
import { Project } from '../shared/project.model';
import{ ProjectListService } from '../project-list/project-list.service';


@Injectable()
export class ResourceService{
    resourceselected=new EventEmitter<Resource>();

    private resources: Resource[]=[new Resource('Door Lock Automation',
    'this is simply a test resource',
    'https://www.raspberrypi.org/app/uploads/2017/01/FVET3BKIYB2E8K7.LARGE_-500x281.jpg',
    [new Project('Wires'),
     new Project('Aurdrino or Rasberry pi'),
    new Project('Actuators'),
    new Project('Patience is also needed ')]),

    new Resource('Home Automation using IOT',
    'Home automation is the process of controlling home appliances automatically using various control system techniques.',
    'https://www.tatapower.com/images/homeautomation_banner_small.jpg',
    [new Project('Opto-coupler'),
    new Project(' TRIAC'),
    new Project(' capacitors'),
    new Project(' regulator')])
    ];

    constructor(private plservice : ProjectListService){

    }


    getResource(){

        // The slice() method returns the selected elements in an array, as a new array object.
        return this.resources.slice();
    }

    getsingleresource(index:number){
        return this.resources[index];

    }
    addIngredientstoprojectshoppinglist(req : Project[]){
        this.plservice.addProjectreq(req);
    }
}