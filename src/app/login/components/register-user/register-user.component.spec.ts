import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { RegisterUserComponent } from './register-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { Observable, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

export class MockUserService {
  public doLogin(body: any): Observable<any> {
    return of(true);
  }

  public doRegister(body: any): Observable<any> {
    return of({statusCode: true});
  }

}

describe('RegisterUserComponent', () => {
  let component: RegisterUserComponent;
  let fixture: ComponentFixture<RegisterUserComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterUserComponent],
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule, FormsModule],
      providers: [{ provide: UserService, useClass: MockUserService }]
    }).overrideTemplate(RegisterUserComponent, "<div></div>")
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.get(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("initForm", () => {

    it("registration form should be invalid when empty", () => {
      component.initForm();
      expect(component.form.invalid).toBeTrue();
    });

    it("registration form should be invalid when email is not entered", () => {
      component.initForm();
      component.form.controls["name"].setValue("Test name");
      component.form.controls["password"].setValue("Test password");
      component.form.controls["confirmPassword"].setValue("Test password");
      expect(component.form.invalid).toBeTrue();
    });

    it("registration form should be valid when all details are entered", () => {
      setFormValues();
      expect(component.form.valid).toBeTrue();
    });

  });

  describe("submit",()=>{

    it("should redirect to login on successful user registration",fakeAsync(()=>{
      setFormValues();
      spyOn(component,"redirectToLogin");
      component.submit();
      tick();
      expect(component.redirectToLogin).toHaveBeenCalled();
    }));

    it("should not redirect to login on unsuccessful user registration",fakeAsync(()=>{
      setFormValues();    
      spyOn(component,"redirectToLogin");
      spyOn(userService,"doRegister").and.returnValue(of({statusCode: false}));
      component.submit();
      tick();
      expect(component.redirectToLogin).not.toHaveBeenCalled();
    }));

  });

  describe("validateConfirmPassword",()=>{

      it("should set errors if password and confirmed password does not match",()=>{
        component.initForm();
        component.form.controls["password"].setValue("TestPwd1");
        component.form.controls["confirmPassword"].setValue("TestPwd");
        component.validateConfirmPassword();
        expect(component.form.controls["confirmPassword"].getError("mismatch")).toBeTrue;
      });

      it("should set not errors if password and confirmed password are matched",()=>{
        setFormValues();
        component.validateConfirmPassword();
        expect(component.form.controls["confirmPassword"].getError("mismatch")).toBeNull;
      });

  });

  function setFormValues(){
    component.initForm();
    component.form.controls["name"].setValue("Test name");
    component.form.controls["email"].setValue("test@gmail.com");
    component.form.controls["password"].setValue("TestPwd");
    component.form.controls["confirmPassword"].setValue("TestPwd");
  }

});
