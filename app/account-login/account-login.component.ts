import { Component, OnInit } from '@angular/core';
import { UserCredentials } from '../user-credentials';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { TafritService } from '../tafrit.service';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css']
})
export class AccountLoginComponent implements OnInit {
  doel: string;
  sisma: string;

  constructor(private router_srv: Router, private login_srv: LoginService, private menu_srv: TafritService) {
   this.menu_srv.setShowMenu(false);
   }

  public logIn(): void {
    if (this.login_srv.authenticateIdPwd(this.doel, this.sisma)) {
      this.router_srv.navigateByUrl("/BankAccount");
    }
    else
      alert("שם המשתמש או הסיסמא או הצירוף שגוי");
      if(this.doel == null || this.doel == ""){
        document.getElementById("uid").focus();
      }
      else{
        document.getElementById("pwd").focus();
      }

  }
  

  ngOnInit(): void {
  }

}
