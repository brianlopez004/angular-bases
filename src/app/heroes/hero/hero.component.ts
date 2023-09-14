import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase(); //Para capitalizar el nombre
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age} años`;
  }

  public changeHero(): void {
    this.name = 'Spiderman';
  }

  public changeAge(): void {
    this.age = 25;
  }

  public resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
