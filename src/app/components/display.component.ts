import { Component } from '@angular/core';
import { RatingsService } from '../services/ratings.service';
// import { Rating } from './rating';

@Component({
    moduleId: module.id,
    selector: 'displayPanel',
    templateUrl: 'display.component.html',
    providers: [RatingsService]
})
export class DisplayComponent  {
    // this.ratings;

    constructor(private ratingsService: RatingsService) {
        
        this.ratingsService.getRatings().subscribe(ratings => {
            this.ratings = ratings;
        });
    }
}
