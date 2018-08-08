import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service'

@Component({
  selector: 'app-edit-beer-review',
  templateUrl: './edit-beer-review.component.html',
  styleUrls: ['./edit-beer-review.component.css']
})
export class EditBeerReviewComponent implements OnInit {
  theReview: any = {}
  

<<<<<<< HEAD
theReview:any = {};

  constructor(private viewService: ReviewService) { }
=======
  constructor(
    private viewService: ReviewService
  ) { }
>>>>>>> 46cfae21271cd4a8024f7c78416a025bb0e7cd42

  ngOnInit() {
  }

  changeReview(){
<<<<<<< HEAD
    this.viewService.editReview(beerId, reviewId)
    .subscribe()
=======
    this.viewService.editReview(this.theReview)
    .subscribe((res) =>{

    })
>>>>>>> 46cfae21271cd4a8024f7c78416a025bb0e7cd42
  }


}
