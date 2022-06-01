import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExSolovinosComponent } from './ex-solovinos.component';

describe('ExSolovinosComponent', () => {
  let component: ExSolovinosComponent;
  let fixture: ComponentFixture<ExSolovinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExSolovinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExSolovinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
