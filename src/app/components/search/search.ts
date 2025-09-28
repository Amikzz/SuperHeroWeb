import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';   // ✅ import FormsModule
import { SuperheroService } from '../services/superhero';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],  // ✅ add FormsModule here
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  searchQuery: string = '';
  heroes: any[] = [];
  loading: boolean = false;
  errorMessage: string = '';
  selectedHero: any = null;  // for modal

  constructor(private heroService: SuperheroService) {}

  onSearch(): void {
    if (!this.searchQuery.trim()) return;

    this.loading = true;
    this.errorMessage = '';
    this.heroes = [];

    this.heroService.searchHeroes(this.searchQuery).subscribe({
      next: (data) => {
        console.log('Full API Response:', data); // 👈 Logs the whole response

        if (data.response === 'success') {
          this.heroes = data.results;
        } else {
          this.errorMessage = `No results found for "${this.searchQuery}".`;
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error Response:', err); // 👈 Logs error details
        this.errorMessage = 'Failed to fetch results. Please try again.';
        this.loading = false;
      }
    });
  }

  getProxiedImageUrl(id: string): string {
    return `assets/images/${id}.jpg`;
  }

  openHeroModal(hero: any): void {
    this.selectedHero = hero;
  }

  closeHeroModal(): void {
    this.selectedHero = null;
  }
}
