import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { map } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  invalidLogin: boolean = false;
  error:any;
  success:any;

  constructor(private router: Router, private formBuilder: FormBuilder, private apiService: ApiService, private https:HttpClient,private toast: NgToastService) { }

  onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value,
      device_id: "55c3389cb5ddd720dc0297617f3561c43a36218a277c974c8d43d545a643f45c",
      os_id: "b93a9204-ee21-4cf9-8a94-cf5eeabf7301",
      time_zone: "Asia/Calcutta",
      role_id: "143f37f2-ca38-0ab1-2489-1e47113655fc",
      

    }
    this.apiService.login(loginPayload).subscribe(data => {
      // debugger;
      if (data) {
        window.sessionStorage.setItem('token', data.data.access_token);
        window.sessionStorage.setItem('User_id', data.data.User.id);
        window.sessionStorage.setItem('username', data.data.User.username);
        window.sessionStorage.setItem('email', data.data.User.email);
        this.router.navigate(['Doc-list']);
        this.success=data.msg;
        this.toast.success({ detail: this.success });
        console.log(data.data.User.username);
        console.log(data.msg);
      } 
    }
    , err => {
      this.invalidLogin = true;
      console.log(err);
      this.error = err.error.msg
      this.toast.error({ detail: this.error });
    });

    

  }

  ngOnInit() {
    window.sessionStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  
}
