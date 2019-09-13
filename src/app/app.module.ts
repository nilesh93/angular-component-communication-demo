import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ChildAComponent } from './parent-child/child-a/child-a.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiblingsComponent } from './siblings/siblings.component';
import { SiblingAComponent } from './siblings/sibling-a/sibling-a.component';
import { SiblingBComponent } from './siblings/sibling-b/sibling-b.component';
import { SiblingCommService } from './siblings/sibling-comm.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentChildComponent,
    ChildAComponent,
    SiblingsComponent,
    SiblingAComponent,
    SiblingBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SiblingCommService],
  bootstrap: [AppComponent]
})
export class AppModule { }
