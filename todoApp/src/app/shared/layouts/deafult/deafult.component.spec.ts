import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeafultComponent } from './deafult.component';

describe('DeafultComponent', () => {
  let component: DeafultComponent;
  let fixture: ComponentFixture<DeafultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeafultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeafultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
