import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  colorTheme = '';
  constructor() {
    this.colorTheme = '[dark mode]';
    if (localStorage.getItem('dark')) {
      document.documentElement.classList.add('dark');
      this.colorTheme = '[light mode]';
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
