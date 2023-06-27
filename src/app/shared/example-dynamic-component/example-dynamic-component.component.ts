import {  Component, ComponentRef, Input, OnInit, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-example-dynamic-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-dynamic-component.component.html',
  styleUrls: ['./example-dynamic-component.component.scss']
})
export class ExampleDynamicComponentComponent implements OnInit{
  @Input() dynamicComponent!: Type<unknown>

  @ViewChild('containerDynamicComponent')
  containerDynamicComponent!: TemplateRef<unknown>;

  constructor(private viewContainerRef: ViewContainerRef) { }


  ngOnInit(): void {
    this.viewContainerRef.createComponent(this.dynamicComponent);
  }	
}
