import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDynamicComponentComponent } from './example-dynamic-component.component';

describe('ExampleDynamicComponentComponent', () => {
  let component: ExampleDynamicComponentComponent;
  let fixture: ComponentFixture<ExampleDynamicComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ExampleDynamicComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleDynamicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
