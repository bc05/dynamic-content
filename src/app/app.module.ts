import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './shared/alert/alert.component';
import { ExampleDynamicComponentComponent } from './shared/example-dynamic-component/example-dynamic-component.component';
import { ExampleNgContentComponent } from './shared/example-ng-content/example-ng-content.component';
import { ExampleTmpRefComponent } from './shared/example-tmp-ref/example-tmp-ref.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ExampleNgContentComponent,
    ExampleTmpRefComponent, 
    ExampleDynamicComponentComponent,
    AlertComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
