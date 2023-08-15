import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountresetComponent } from './countreset.component';

describe('CountresetComponent', () => {
  let component: CountresetComponent;
  let fixture: ComponentFixture<CountresetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountresetComponent]
    });
    fixture = TestBed.createComponent(CountresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
