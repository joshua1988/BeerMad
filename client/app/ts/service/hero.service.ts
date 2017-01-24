import { Injectable } from '@angular/core';

import { Hero } from '../../ts/vo/hero';
import { HEROES } from '../../ts/mock-heroes';

@Injectable()
export class HeroService {
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
