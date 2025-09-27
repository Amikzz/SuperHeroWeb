import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
