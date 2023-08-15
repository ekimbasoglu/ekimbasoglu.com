import { Component } from '@angular/core';
import { VisitorsService } from '../visitors.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
})
export class CountComponent {
  count: number;

  constructor(
    private visitorsService: VisitorsService,
    private db: AngularFireDatabase
  ) {
    if (localStorage.getItem('dark')) {
      document.documentElement.classList.add('dark');
    }
  }
  ngOnInit() {
    this.visitorsService.getVisitorsCount().subscribe((count: any) => {
      this.count = count;
      console.log('count', this.count);
    });
  }
}
