import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  beers:Array<any>;
  beersFromBrewery:Array<any>;

  theNewBeerEntry: any = {};

  constructor(private theService: BeerService, private myActivatedRoute: ActivatedRoute) { }

<<<<<<< HEAD

=======
  
>>>>>>> a3cb5214b76c1798357df71c6a61a2c98a753cf9
  allBeers(){
    this.theService.allBeers()
    .subscribe((res)=>{
      this.beers = res;
    });
  }
  addNewBeer(){
    this.theService.createBeer(this.theNewBeerEntry)
    .subscribe((response)=>{
      this.allBeers();
      location.reload();
      console.log('This======>' + response + "<==== was added into the collection")
    });
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 489da4070f373836373623e67de27ba5e089e25d


<<<<<<< HEAD

=======
>>>>>>> a3cb5214b76c1798357df71c6a61a2c98a753cf9
  showBreweryBeers(){
    this.theService.breweryBeers(this.beersFromBrewery)
    .subscribe((response)=>{
      this.beersFromBrewery = response;
    })
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> a3cb5214b76c1798357df71c6a61a2c98a753cf9
=======
>>>>>>> 46cfae21271cd4a8024f7c78416a025bb0e7cd42
=======

>>>>>>> 489da4070f373836373623e67de27ba5e089e25d
>>>>>>> e7a142f1574798259ed2cf66ccf49d7876b5b252
  ngOnInit() {
      this.allBeers();
      this.showBreweryBeers();
  }

}
