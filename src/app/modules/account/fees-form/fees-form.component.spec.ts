import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesFormComponent } from './fees-form.component';

describe('FeesFormComponent', () => {
  let component: FeesFormComponent;
  let fixture: ComponentFixture<FeesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
