import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public form: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm(){
     this.form = this.formBuilder.group({
       name: ['', [Validators.required]],
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
     });     
  }

  public submit(){
    console.log(this.form.value);
    this.userService.doRegister(this.form.value).subscribe((resp)=>{
           console.log(resp);
    }, error => {
      console.log(error);
    });
  }

}
