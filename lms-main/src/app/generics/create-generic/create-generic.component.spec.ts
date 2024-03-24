import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGenericComponent } from './create-generic.component';

describe('CreateGenericComponent', () => {
  let component: CreateGenericComponent;
  let fixture: ComponentFixture<CreateGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateGenericComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
