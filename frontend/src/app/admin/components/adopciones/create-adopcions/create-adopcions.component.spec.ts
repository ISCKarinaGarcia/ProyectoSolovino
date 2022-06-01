import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdopcionsComponent } from './create-adopcions.component';

describe('CreateAdopcionsComponent', () => {
  let component: CreateAdopcionsComponent;
  let fixture: ComponentFixture<CreateAdopcionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdopcionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdopcionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
