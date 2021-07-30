import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsHomeComponent } from './collections-home/collections-home.component'

const routes: Routes = [
  { path: 'collections', component: CollectionsHomeComponent }
];

// const routes: Routes = [
//   { path: 'elements', component: ElementsHomeComponent }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
