import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import '../../rxjs-extensions';
import { Observable } from 'rxjs/Observable';

import { Hero } from '../../ts/vo/hero';
// import { HEROES } from '../../ts/mock-heroes';

@Injectable()
export class HeroService {
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // getHeroes(): Promise<Hero[]> {
  //   return Promise.resolve(HEROES);
  // }

  private heroesUrl = 'api/heroes';  // URL to web api
  constructor(private http: Http) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
             .map((r: Response) => r.json().data as Hero[])
             .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
