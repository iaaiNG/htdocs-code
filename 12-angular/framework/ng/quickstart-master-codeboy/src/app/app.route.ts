import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFound } from './utility/notFound/notFound.component';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { OrderConfirmComponent } from './orderConfirm/orderConfirm.component';
import { Step1Component } from './orderConfirm/orderConfirmStepOne.component';
import { Step2Component } from './orderConfirm/orderConfirmStepTwo.component';
import { Step3Component } from './orderConfirm/orderConfirmStepThree.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'orderconfirm', component: OrderConfirmComponent,
    children:[
      {path: 'step1', component: Step1Component},
      {path: 'step2', component: Step2Component},
      {path: 'step3', component: Step3Component}
    ]
  },
  { path: 'cart', component: CartComponent },
  { path: 'index', component: IndexComponent },
  { path: 'list', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

// export const routedComponents = [DemoComponent];