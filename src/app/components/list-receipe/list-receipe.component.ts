import { Component, OnInit } from '@angular/core';
import { Receipe } from 'src/app/models/receipe.model';
import { ReceipeService } from 'src/app/services/receipe.service';

@Component({
  selector: 'app-list-receipe',
  templateUrl: './list-receipe.component.html',
  styleUrls: ['./list-receipe.component.css']
})
export class ListReceipeComponent implements OnInit {

  receipes?: Receipe[];
  currentReceipe: Receipe = {};
  currentIndex = -1;
  receipeName = '';

  constructor(private receipeService: ReceipeService) { }

  ngOnInit(): void {
    this.retrieveReceipe();
  }

  retrieveReceipe(): void {
    this.receipeService.getAll()
      .subscribe(
        data => {
          this.receipes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveReceipe();
    this.currentReceipe = {};
    this.currentIndex = -1;
  }

  setActiveReceipe(receipe: Receipe, index: number): void {
    this.currentReceipe = receipe;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.receipeService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentReceipe = {};
    this.currentIndex = -1;

    this.receipeService.findByReceipeName(this.receipeName)
      .subscribe(
        data => {
          this.receipes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
