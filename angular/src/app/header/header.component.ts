import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {
    if (localStorage.getItem('dark')) {
      document.documentElement.classList.add('dark');
      document.body.classList.toggle('dark');
    }
  }
  ngOnInit(): void {}
  darkMode() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('dark', 'true');
    } else {
      localStorage.removeItem('dark');
    }
  }
}
