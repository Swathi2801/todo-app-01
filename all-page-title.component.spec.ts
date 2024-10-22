import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPageTitleComponent } from './all-page-title.component';

describe('AllPageTitleComponent', () => {
  let component: AllPageTitleComponent;
  let fixture: ComponentFixture<AllPageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPageTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
