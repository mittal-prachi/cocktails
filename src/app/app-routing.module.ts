import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { FilterResolver } from './filter.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      filters: FilterResolver
    },
    children: [
      {path: '', component: DrinkListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
