import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor() { }
  public getSuperHeroes() : SuperHero[]{
    let hero = new SuperHero();
    hero.id = 1;
    hero.firstName = "Tony";
    hero.lastName = "Stark";
    hero.place = "America";
    hero.name = "Iron Man"

    return [hero];

  }
}
