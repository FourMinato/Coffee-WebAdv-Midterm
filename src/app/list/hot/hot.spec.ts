import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hot } from './hot';

describe('Hot', () => {
  let component: Hot;
  let fixture: ComponentFixture<Hot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
