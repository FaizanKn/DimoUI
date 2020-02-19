import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public form: FormGroup;
  public languagePreference: Array<any> = [];
  public zenrePreference: Array<any> = [];
  public productionHousePreference: Array<any> = [];
  public dropdownSettings: any = {};


  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
    });
    this.validateConfirmPassword();
  }

  public submit() {
    const requestBody = new User(this.form.value);
    this.userService.doRegister(requestBody).subscribe((resp) => {
      console.log(resp);
      if (resp.statusCode === true) {
        alert("Registration Successful!");
        this.redirectToLogin();
      } else {
        alert(resp.message);
      }

    }, error => {
      console.log(error);
    });
  }

  public validateConfirmPassword() {
    this.form.valueChanges.subscribe(field => {
      if (field.password !== field.confirmPassword) {
        this.form.controls['confirmPassword'].setErrors({ mismatch: true });
      } else {
        this.form.controls['confirmPassword'].setErrors(null);
      }
    });
  }

  public redirectToLogin() {
    this.router.navigate(['']);
  }

  public getProductionList() {

  }

  public setDropDownSetting(textValue: string): object {
    return {
      singleSelection: false,
      text: textValue,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      lazyLoading: true,
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }


}
