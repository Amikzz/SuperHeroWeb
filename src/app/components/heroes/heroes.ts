import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './heroes.html',
  styleUrl: './heroes.css'
})
export class Heroes {

}
