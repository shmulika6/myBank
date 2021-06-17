import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountLoginComponent } from './account-login/account-login.component';
import { AllTransactionsComponent } from './all-transactions/all-transactions.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { ChangeBranchComponent } from './change-branch/change-branch.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingleTransactionComponent } from './single-transaction/single-transaction.component';
import { HagashaComponent } from './hagasha/hagasha.component';
import { AccountOwnerComponent } from './account-owner/account-owner.component';

const routes: Routes = [{ path: '', redirectTo: 'Hagasha', pathMatch: 'full' },
{ path: 'Hagasha', component: HagashaComponent },
{ path:'AccountLogin',component:AccountLoginComponent},
{ path:'BankAccount',component:BankAccountComponent},
{ path: 'AccountOwner', component: AccountOwnerComponent },
{ path:'ChangePassword',component:ChangePasswordComponent},
{ path: 'SingleTransaction/:id', component: SingleTransactionComponent },
{ path:'AllTransactions', component: AllTransactionsComponent },
{ path:'ChangeBranch', component: ChangeBranchComponent } ,
{ path:'', redirectTo: '/AccountLogin', pathMatch: 'full'},
{ path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
