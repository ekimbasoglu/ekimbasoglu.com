import { Component, OnInit } from '@angular/core';
import { VisitorsService } from '../visitors.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  linkedInImage = 'assets/images/social/linkedin.png';
  title = 'Ekim Basoglu';
  visitorCount: Observable<number>;

  constructor(private visitorsService: VisitorsService) {
    if (localStorage.getItem('dark')) {
      document.documentElement.classList.add('dark');
    }
  }

  ngOnInit() {
    // Checks if it's visited already
    let visitor = localStorage.getItem('visitor')!;
    if (visitor == null) {
      this.visitorCount = this.visitorsService.getVisitorsCount();
      this.visitorsService.incrementVisitorsCount();

      localStorage.setItem('visitor', 'true');
    }
  }
}
