import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDashboardComponent } from './movie-dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from 'src/app/login/services/user.service';
import { MockUserService } from 'src/app/login/components/register-user/register-user.component.spec';
import { DashboardService } from '../../services/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailService } from 'src/app/movie-details/movie-details/movie-detail.service';

describe('MovieDashboardComponent', () => {
  let component: MovieDashboardComponent;
  let fixture: ComponentFixture<MovieDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDashboardComponent ],
      providers: [ {provide: UserService, useClass: MockUserService},DashboardService,MovieDetailService],
      imports: [RouterTestingModule,HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
