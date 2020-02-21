import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailService } from './movie-details/movie-detail.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MovieDetailsComponent],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    SharedModule
  ]
})
export class MovieDetailsModule { }
