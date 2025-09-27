import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SuperheroService } from '../services/superhero';
import { Superhero } from '../../models/superhero.model';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './heroes.html',
  styleUrls: ['./heroes.css']
})
export class Heroes implements OnInit, AfterViewInit {
  heroes: Superhero[] = [];
  totalHeroes = 731;
  heroesPerPage = 20;
  currentPage = 1;
  totalPages!: number;

  selectedHero: Superhero | null = null;

  constructor(private superheroService: SuperheroService) {}

  ngOnInit(): void {
  Chart.register(...registerables); // ✅ move here
  this.totalPages = Math.ceil(this.totalHeroes / this.heroesPerPage);
  this.loadHeroes();
  }

  loadHeroes() {
    const startId = (this.currentPage - 1) * this.heroesPerPage + 1;
    const ids = Array.from({ length: this.heroesPerPage }, (_, i) => startId + i);

    console.log("Fetching heroes with IDs:", ids);

    this.superheroService.getHeroes(ids).subscribe(
      heroes => {
        console.log("Full API response:", heroes);
        this.heroes = heroes;
      },
      err => console.error("Error loading heroes:", err)
    );
  }

  getProxiedImageUrl(id: string): string {
    return `assets/images/${id}.jpg`;
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.loadHeroes();
  }

  openHeroModal(hero: Superhero) {
    this.selectedHero = hero;
    const modalElement = document.getElementById('heroModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  ngAfterViewInit() {
    const ctx = document.getElementById('trendChart') as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
            label: 'Popularity Trend',
            data: [10, 20, 15, 30, 25],
            borderColor: '#4ade80',
            backgroundColor: 'rgba(74, 222, 128, 0.2)',
            fill: true
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } }
        }
      });
    }
  }
}
