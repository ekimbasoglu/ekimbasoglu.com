import { Component } from '@angular/core';
import { VisitorsService } from '../visitors.service';

@Component({
  selector: 'app-countreset',
  templateUrl: './countreset.component.html',
  styleUrls: ['./countreset.component.css'],
})
export class CountresetComponent {
  constructor(private visitorsService: VisitorsService) {
    if (localStorage.getItem('dark')) {
      document.documentElement.classList.add('dark');
    }
  }

  ngOnInit() {
    this.visitorsService.reset();
  }
}
