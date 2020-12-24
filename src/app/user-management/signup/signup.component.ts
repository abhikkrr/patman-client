import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/common/model/SignUp';
import { AuthenticationService } from 'src/app/common/service/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupData: SignUp = new SignUp();
  confirmpassword: string;
  isSuccessful = false;
  isSignUpFailed = true;
  errorMessage = '';
  form: any = {};
  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    
  }

  login(){
    this.router.navigateByUrl('login');
  }

  onSubmit(){
    this.signupData.username = this.form.username;
    this.signupData.password = this.form.password;
    this.signupData.email = this.form.email;
    if(!this.signupData.username ){
      this.errorMessage = '!! Name must not be blank !!';
    }else if(!(this.signupData.username.trim())){
      this.errorMessage = '!! Name must not be blank !!';
    }else{
      this.authService.register(this.signupData).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          console.log(err.error.message);
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    }
  }

}
