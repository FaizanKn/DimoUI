import { MovieDetailService } from './movie-detail.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent } from './movie-details.component';

import { of, BehaviorSubject,Observable } from 'rxjs';
import { MovieDetailsRoutingModule } from '../movie-details-routing.module';
export class MockMovieDetailService {
  public movieId: BehaviorSubject<string>= new BehaviorSubject('');

  public getMovieId(): Observable<string>{
    return of('')
  }

  public getMovieThumbNailByAPI(movieName: any): Observable<any> {
    return of(true);
  }

  public getMovieById(movieId: any): Observable<any> {
    return of({statusCode: true});
  }
 
}


describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let movieDetailService: MovieDetailService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsComponent ],
      imports: [MovieDetailsRoutingModule],
      providers: [{provide: MovieDetailService, useClass: MockMovieDetailService}]
    }).overrideTemplate(MovieDetailsComponent, "<div></div>")
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    movieDetailService = TestBed.get(MovieDetailService);
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });



});
