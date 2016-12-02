import { Injectable } from '@angular/core';

import { Hero } from './hero'
import { HEROES } from './mock-heroes'

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    //return this.getMockHeroes();
    return this.getHeroesSlowly();
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>( resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getMockHeroes());
  }

  getMockHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
