import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTmpRefComponent } from './example-tmp-ref.component';

describe('ExampleTmpRefComponent', () => {
  let component: ExampleTmpRefComponent;
  let fixture: ComponentFixture<ExampleTmpRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ExampleTmpRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleTmpRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
