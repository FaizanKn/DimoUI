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
    this.getLanguageList();
  }

  public initForm(){
     this.form = this.formBuilder.group({
       name: ['', [Validators.required]],
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
       confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
       languagePreference: [],
       production: [],
       genre: []
     });
     this.validateConfirmPassword();     
  }

  public submit(){
    console.log(this.form.value);
    const requestBody = new User(this.form.value);
    this.userService.doRegister(requestBody).subscribe((resp)=>{
           console.log(resp);
           if(resp.statusCode === true){
            this.redirectToLogin();
           } else {
             alert(resp.message);
           }
           
    }, error => {
      console.log(error);
    });
  }

  public validateConfirmPassword(){
    this.form.valueChanges.subscribe(field => {
      if (field.password !== field.confirmPassword) {
        this.form.controls['confirmPassword'].setErrors({ mismatch: true });
      } else {
        this.form.controls['confirmPassword'].setErrors(null);
      }
    });
  }

  public redirectToLogin(){
    this.router.navigate(['']);
  }

 public getLanguageList(){
   this.languagePreference = [
    {"id":1,"itemName":"India"},
    {"id":2,"itemName":"Singapore"},
    {"id":3,"itemName":"Australia"},
    {"id":4,"itemName":"Canada"},
    {"id":5,"itemName":"South Korea"},
    {"id":6,"itemName":"Germany"},
    {"id":7,"itemName":"France"},
    {"id":8,"itemName":"Russia"},
    {"id":9,"itemName":"Italy"},
    {"id":10,"itemName":"Sweden"}
  ];
 }

 public getZenreList(){
   
}

public getProductionList(){
   
}

public setDropDownSetting(textValue: string){
  return { 
    singleSelection: false, 
    text: textValue,
    selectAllText:'Select All',
    unSelectAllText:'UnSelect All',
    lazyLoading : true,
    enableSearchFilter: true,
    classes:"myclass custom-class"
  };        
}





}
