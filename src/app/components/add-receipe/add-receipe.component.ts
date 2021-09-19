import { Component, OnInit } from '@angular/core';
import { Receipe } from 'src/app/models/receipe.model';
import { ReceipeService } from 'src/app/services/receipe.service';

@Component({
  selector: 'app-add-receipe',
  templateUrl: './add-receipe.component.html',
  styleUrls: ['./add-receipe.component.css']
})
export class AddReceipeComponent implements OnInit {

  receipe: Receipe = {
    receipeId: 0,
    creationTimeStamp: '',
    veg: true,
    suitableFor: 0,
    instructions: ''
  };
  submitted = false;

  constructor(private receipeService: ReceipeService) { }

  ngOnInit(): void {
  }

  saveReceipe(): void {
    const data = {
      receipeId: 0,
      creationTimeStamp : '',
      instructions: this.receipe.instructions,
      suitableFor: this.receipe.suitableFor,
      veg: this.receipe.veg
    };

    this.receipeService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newReceipe(): void {
    this.submitted = false;
    this.receipe = {
      receipeId:0,
      creationTimeStamp: '',
      instructions: '',
      suitableFor: 0,
      veg: true
    };
  }
}