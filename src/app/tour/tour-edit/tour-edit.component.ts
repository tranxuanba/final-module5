import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Tour} from "../../model/tour";
import {TourService} from "../../service/tour.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-tour-edit',
  templateUrl: './tour-edit.component.html',
  styleUrls: ['./tour-edit.component.css']
})
export class TourEditComponent implements OnInit {
  sub:Subscription;

  tour: Tour = {
    id:0,
    title:"title",
    description: "Mo ta",
    price: 0
  };

  id: number | undefined;

  constructor(private tourService: TourService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getTour(this.id);
    })
  }

  ngOnInit(): void {
  }
  getTour(id: number){
    this.tourService.findTourById(id).
    subscribe(tour =>{
      this.tour = tour;
    });
  }
  updateTour(){
    this.tourService.editTour(this.tour.id, this.tour).subscribe(()=>{
      this.router.navigate(['/']);
    });
    // this.router.navigateByUrl("/");

  }
}
