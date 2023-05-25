import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyadirComponent } from './anyadir.component';

describe('AnyadirComponent', () => {
  let component: AnyadirComponent;
  let fixture: ComponentFixture<AnyadirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnyadirComponent]
    });
    fixture = TestBed.createComponent(AnyadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
