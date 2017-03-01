import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RatingsService {
    constructor(private http: Http){
        console.log('RatingsService Initialized...');
    }

    getRatings() {
        return this.http.get('../app/data/ratings.data.json')
            .map(res => res.json());
    }
}