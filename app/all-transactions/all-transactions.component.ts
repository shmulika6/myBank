import { Component, OnInit } from '@angular/core';
import { BankTransaction, TransactionType } from '../bank-transaction';
import { LoginService } from '../login.service';
import { TransactionArrayService } from '../transaction-array.service';
import { Router } from '@angular/router';
import { TafritService } from '../tafrit.service';


@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.css']
})
export class AllTransactionsComponent implements OnInit {

  transactionArray: BankTransaction[] = [];
  transactionTypeNames: string[] = [];
  showMenu : boolean = true;
  constructor(private login_srv: LoginService, private tran_srv: TransactionArrayService, private router_srv: Router, private menu_srv: TafritService) {
    this.menu_srv.setShowMenu(true);
    this.transactionArray = this.tran_srv.transactionArrayServ;
    for (let optn in TransactionType)
      if (isNaN(Number(optn)))
        this.transactionTypeNames.push(optn);

   }

  ngOnInit(): void {
    if (!this.login_srv.userSignedIn()) {
      this.router_srv.navigateByUrl("/AccountLogin");
    }
    this.menu_srv.setShowMenu(true);
  }

}
