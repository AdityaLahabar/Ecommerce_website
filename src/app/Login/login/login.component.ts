import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  userObj: any={
    EmailId:'',
    Password:''
  }

  router=inject(Router);
  http=inject(HttpClient)


  onLogin(){
    if(this.userObj.EmailId=="admin" && this.userObj.Password=="1234"){
      alert("Login Success");
      localStorage.setItem('LoginUser',  this.userObj.userName)
      this.router.navigateByUrl('Products')
    }else{
      alert('Wrong Credential')
    }
  }
 
}
