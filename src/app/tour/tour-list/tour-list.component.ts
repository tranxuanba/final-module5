import { Component, OnInit } from '@angular/core';
import {Tour} from "../../model/tour";
import {TourService} from "../../service/tour.service";

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {
  tours: Tour[] = [];
  constructor(private tourService: TourService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.tourService.getAll().subscribe(tours => {
      this.tours = tours;
    });
  }
}
