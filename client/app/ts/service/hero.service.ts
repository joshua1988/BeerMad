import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import '../../rxjs-extensions';

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

  // update(hero: Hero): Promise<Hero> {
  //   const url = `${this.heroesUrl}/${hero.id}`;
  //   return this.http
  //     .put(url, JSON.stringify(hero), {headers: this.headers})
  //     .toPromise()
  //     .then(() => hero)
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
