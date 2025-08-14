import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cool } from './cool';

describe('Cool', () => {
  let component: Cool;
  let fixture: ComponentFixture<Cool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cool]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cool);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
