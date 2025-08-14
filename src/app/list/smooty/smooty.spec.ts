import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smooty } from './smooty';

describe('Smooty', () => {
  let component: Smooty;
  let fixture: ComponentFixture<Smooty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Smooty]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Smooty);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
