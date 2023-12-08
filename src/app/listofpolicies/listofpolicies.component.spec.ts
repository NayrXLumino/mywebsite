import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofpoliciesComponent } from './listofpolicies.component';

describe('ListofpoliciesComponent', () => {
  let component: ListofpoliciesComponent;
  let fixture: ComponentFixture<ListofpoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListofpoliciesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListofpoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
