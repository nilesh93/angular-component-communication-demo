import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { SiblingsComponent } from './siblings/siblings.component';


const routes: Routes = [
  {
    path: '',
    component: ParentChildComponent
  },
  {
    path: 'siblings',
    component: SiblingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
