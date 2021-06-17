import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountOwner } from '../account-owner';
import { AppComponent } from '../app.component';
import { ChangeBranchService } from '../change-branch.service';
import { LoginService } from '../login.service';
import { OwnerService } from '../owner.service';
import { TafritService } from '../tafrit.service';

@Component({
  selector: 'app-account-owner',
  templateUrl: './account-owner.component.html',
  styleUrls: ['./account-owner.component.css']
})
export class AccountOwnerComponent implements OnInit {
  owner:AccountOwner = null;
  edit:boolean = false;

  newOwner : AccountOwner = null;
  
  constructor( private router_srv : Router, private owner_srv : OwnerService, private menu_srv : TafritService, private login_srv : LoginService) {
    
   }


  startEdit() {
    this.newOwner = new AccountOwner(this.owner_srv.theAccountOwner.name, this.owner_srv.theAccountOwner.address, this.owner_srv.theAccountOwner.tz, this.owner_srv.theAccountOwner.hasPicture);
    this.edit = true;
  }

  endEdit(){
    if (this.newOwner.name == null || this.newOwner.address == null || this.newOwner.name == "" || this.newOwner.address == "") {
      alert("אחד או יותר מהפרטים לא הוזן");
      if (this.newOwner.name == null || this.newOwner.name == "") {
        document.getElementById("name").focus();
        return;
      }
        document.getElementById("address").focus();
        return;
    }
    this.owner = this.newOwner;
    this.owner_srv.updateOwner(this.newOwner);
    this.menu_srv.setNameMenu(this.owner.name);
    this.edit = false; 
    
  }

  cancelEdit(){
    this.edit = false;
  }
  ngOnInit(): void {
    if (!this.login_srv.userSignedIn()) {
      this.router_srv.navigateByUrl("/AccountLogin");
    }
    this.owner = this.owner_srv.getOwner();
    this.menu_srv.setShowMenu(true);
  }

}
