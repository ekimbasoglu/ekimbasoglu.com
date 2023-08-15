import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VisitorsService {
  constructor(private db: AngularFireDatabase) {}

  getVisitorsCount(): Observable<number> {
    return this.db.object<number>('visitors').valueChanges();
  }
  getVisitorsObject() {
    return this.db.object<number>('visitors').valueChanges();
  }

  incrementVisitorsCount() {
    this.db
      .object<number>('visitors')
      .query.ref.transaction((currentCount) => (currentCount || 0) + 1);
  }
}
