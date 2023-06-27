import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example-tmp-ref',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-tmp-ref.component.html',
  styleUrls: ['./example-tmp-ref.component.scss']
})
export class ExampleTmpRefComponent {
  @Input() tmp!: TemplateRef<unknown>;

  user = {
    name: 'John Doe',
  }
}
