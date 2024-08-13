import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signup1 } from './signup1.component';

describe('Signup1', () => {
  let component: Signup1;
  let fixture: ComponentFixture<Signup1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signup1],
    }).compileComponents();

    fixture = TestBed.createComponent(Signup1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
