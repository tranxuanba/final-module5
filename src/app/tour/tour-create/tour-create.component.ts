import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TourService} from "../../service/tour.service";

@Component({
  selector: 'app-tour-create',
  templateUrl: './tour-create.component.html',
  styleUrls: ['./tour-create.component.css']
})
export class TourCreateComponent implements OnInit {
  tourForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private tourService: TourService) { }

  ngOnInit(): void {
  }
  submit() {
    const tour = this.tourForm.value;

    this.tourService.saveTour(tour).subscribe(() => {
      this.tourForm.reset();
      alert('Tạo thành công');
    }, e => {
      console.log(e);
    });
  }

}
