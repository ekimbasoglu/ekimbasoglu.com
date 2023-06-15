import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  linkedInImage = 'assets/images/social/linkedin.png';
  title = 'Ekim Basoglu';
  constructor() {
    if (localStorage.getItem('dark')) {
      document.documentElement.classList.add('dark');
    }
  }
  darkMode() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('dark', 'true');
    } else {
      localStorage.removeItem('dark');
    }
  }
}
