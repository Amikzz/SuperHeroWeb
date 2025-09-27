import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SuperheroService } from '../services/superhero';
import { Superhero } from '../../models/superhero.model';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './heroes.html',
  styleUrls: ['./heroes.css']
})
export class Heroes implements OnInit {
  heroes: Superhero[] = [];
  totalHeroes = 731;
  heroesPerPage = 20;
  currentPage = 1;
  totalPages!: number;

  constructor(private superheroService: SuperheroService) {}

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.totalHeroes / this.heroesPerPage);
    this.loadHeroes();
  }

  loadHeroes() {
    const startId = (this.currentPage - 1) * this.heroesPerPage + 1;
    const ids = Array.from({ length: this.heroesPerPage }, (_, i) => startId + i);

    this.superheroService.getHeroes(ids).subscribe(
      heroes => this.heroes = heroes,
      err => console.error(err)
    );
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.loadHeroes();
  }
}
