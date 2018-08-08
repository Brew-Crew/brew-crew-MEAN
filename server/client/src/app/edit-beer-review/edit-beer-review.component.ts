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
<<<<<<< HEAD
theReview:any = {};

  constructor(private viewService: ReviewService) { }
=======
  constructor(
    private viewService: ReviewService
  ) { }
>>>>>>> 46cfae21271cd4a8024f7c78416a025bb0e7cd42
=======


  constructor(private viewService: ReviewService) { }

>>>>>>> 489da4070f373836373623e67de27ba5e089e25d

  ngOnInit() {
  }

  changeReview(){
<<<<<<< HEAD
<<<<<<< HEAD
    this.viewService.editReview(beerId, reviewId)
    .subscribe()
=======
=======
>>>>>>> 489da4070f373836373623e67de27ba5e089e25d
    this.viewService.editReview(this.theReview)
    .subscribe((res) =>{

    })
<<<<<<< HEAD
>>>>>>> 46cfae21271cd4a8024f7c78416a025bb0e7cd42
=======
>>>>>>> 489da4070f373836373623e67de27ba5e089e25d
  }


}
