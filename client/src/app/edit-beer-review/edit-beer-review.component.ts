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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e7a142f1574798259ed2cf66ccf49d7876b5b252
theReview:any = {};

  constructor(private viewService: ReviewService) { }
=======
  constructor(
    private viewService: ReviewService
  ) { }
>>>>>>> 46cfae21271cd4a8024f7c78416a025bb0e7cd42
=======
<<<<<<< HEAD
=======
>>>>>>> a3cb5214b76c1798357df71c6a61a2c98a753cf9
=======
>>>>>>> e7a142f1574798259ed2cf66ccf49d7876b5b252


  constructor(private viewService: ReviewService) { }

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 489da4070f373836373623e67de27ba5e089e25d
=======
>>>>>>> a3cb5214b76c1798357df71c6a61a2c98a753cf9
=======
>>>>>>> 489da4070f373836373623e67de27ba5e089e25d
>>>>>>> e7a142f1574798259ed2cf66ccf49d7876b5b252

  ngOnInit() {
  }

  changeReview(){
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e7a142f1574798259ed2cf66ccf49d7876b5b252
    this.viewService.editReview(beerId, reviewId)
    .subscribe()
=======
=======
>>>>>>> 489da4070f373836373623e67de27ba5e089e25d
<<<<<<< HEAD
=======
>>>>>>> a3cb5214b76c1798357df71c6a61a2c98a753cf9
=======
>>>>>>> e7a142f1574798259ed2cf66ccf49d7876b5b252
    this.viewService.editReview(this.theReview)
    .subscribe((res) =>{

    })
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 46cfae21271cd4a8024f7c78416a025bb0e7cd42
=======
>>>>>>> 489da4070f373836373623e67de27ba5e089e25d
=======
>>>>>>> a3cb5214b76c1798357df71c6a61a2c98a753cf9
=======
>>>>>>> 46cfae21271cd4a8024f7c78416a025bb0e7cd42
=======
>>>>>>> 489da4070f373836373623e67de27ba5e089e25d
>>>>>>> e7a142f1574798259ed2cf66ccf49d7876b5b252
  }


}
