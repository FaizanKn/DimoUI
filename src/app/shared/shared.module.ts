import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [NavigationBarComponent, PageNotFoundComponent],
  imports: [
    CommonModule
  ],
  exports: [NavigationBarComponent]
})
export class SharedModule { }
