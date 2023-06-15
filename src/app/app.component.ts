import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  colorTheme = '';
  constructor() {
    if (localStorage.getItem('dark')) {
      this.colorTheme = '[dark mode]';
      document.documentElement.classList.add('dark');
    }
  }
  darkMode() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
      this.colorTheme = '[light mode]';
      localStorage.setItem('dark', 'true');
    } else {
      this.colorTheme = '[dark mode]';
      localStorage.removeItem('dark');
    }
  }
}
