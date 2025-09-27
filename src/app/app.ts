import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule, FormsModule],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [fadeAnimation],
})
export class App {
  protected readonly title = signal('SuperHeroWeb');

   isLoading = true;

  constructor() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500); // simulate loading delay
  }
}
