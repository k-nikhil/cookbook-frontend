import { Component, OnInit } from '@angular/core';
import { ReceipeService } from 'src/app/services/receipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Receipe } from 'src/app/models/receipe.model';

@Component({
  selector: 'app-detail-receipe',
  templateUrl: './detail-receipe.component.html',
  styleUrls: ['./detail-receipe.component.css']
})
export class DetailReceipeComponent implements OnInit {

  currentReceipe: Receipe = {
    receipeName: '',
    suitableFor: '',
    creationTimeStamp: '',
    instructions: ''
  };
  message = '';

  constructor(private receipService: ReceipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getReceipe(this.route.snapshot.params.id);
  }

  getReceipe(id: string): void {
    this.receipService.get(id)
      .subscribe(
        data => {
          this.currentReceipe = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      receipeName: this.currentReceipe.receipeName,
      instructions: this.currentReceipe.instructions,
      published: status
    };

    this.message = '';

    this.receipService.update(this.currentReceipe.receipeId, data)
      .subscribe(
        response => {
          // this.currentReceipe. = status;
          console.log(response);
          this.message = response.message ? response.message : 'The status was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateReceipe(): void {
    this.message = '';

    this.receipService.update(this.currentReceipe.receipeId, this.currentReceipe)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This receipe was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteReceipe(): void {
    this.receipService.delete(this.currentReceipe.receipeId)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/receipe']);
        },
        error => {
          console.log(error);
        });
  }
}
