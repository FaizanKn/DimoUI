import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { RegisterUserComponent } from './register-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { Observable, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

import { AlertModule } from './../../../shared/alert/alert.module';

export class MockUserService {
  public doLogin(body: any): Observable<any> {
    return of({status: 200});
  }

  public doRegister(body: any): Observable<any> {
    return of({status: 200});
  }
  public loginSuccess(email: string, name: string){
}

}

describe('RegisterUserComponent', () => {
  let component: RegisterUserComponent;
  let fixture: ComponentFixture<RegisterUserComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterUserComponent],
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule, FormsModule, AlertModule],
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

    it("should redirect to dashboard on successful user registration",fakeAsync(()=>{
      setFormValues();
      spyOn(component,"redirectToDashboard");
      component.submit();
      tick();
      expect(component.redirectToDashboard).toHaveBeenCalled();
    }));

    it("should not redirect to dashboard on unsuccessful user registration",fakeAsync(()=>{
      setFormValues();    
      spyOn(component,"redirectToDashboard");
      spyOn(userService,"doRegister").and.returnValue(of({status: 400}));
      component.submit();
      tick();
      expect(component.redirectToDashboard).not.toHaveBeenCalled();
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
