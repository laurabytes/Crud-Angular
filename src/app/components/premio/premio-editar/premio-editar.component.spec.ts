import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremioEditarComponent } from './premio.component';

describe('PremioEditarComponent', () => {
  let component: PremioEditarComponent;
  let fixture: ComponentFixture<PremioEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremioEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
