import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VisitorsService {
  visitors = this.db.object<number>('visitors');

  constructor(private db: AngularFireDatabase) {}

  getVisitorsCount(): Observable<number> {
    return this.visitors.valueChanges();
  }
  reset() {
    this.visitors
      .remove()
      .then(() => {
        console.log('Object successfully removed!');
      })
      .catch((error) => {
        console.error('Error removing object:', error);
      });
  }

  incrementVisitorsCount() {
    this.db
      .object<number>('visitors')
      .query.ref.transaction((currentCount) => (currentCount || 0) + 1);
  }
}
