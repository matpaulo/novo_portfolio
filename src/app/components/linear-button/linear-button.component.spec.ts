import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearButtonComponent } from './linear-button.component';

describe('LinearButtonComponent', () => {
  let component: LinearButtonComponent;
  let fixture: ComponentFixture<LinearButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinearButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinearButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
