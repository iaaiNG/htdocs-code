import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo06Component } from './demo06/demo.component';
import { DemoComponent1 } from './demo08/demo.component';
import { DemoComponent2 } from './demo09/demo.component';
import { NotFound } from './notFound/not-found.component';
import { Demo10Component } from './demo10/demo.component';
import { CheckComponent } from './demo11/check.component';
import { PayComponent } from './demo11/pay.component';
import { SendComponent } from './demo11/send.component';
import { MailComponent } from './demo12/mail.component';
import { InboxComponent } from './demo12/inbox.component';
import { OutboxComponent } from './demo12/outbox.component';
import { CartComponent } from './demo15/cart.component';
import { Step1Component } from './demo15/step1.component';
import { Step2Component } from './demo15/step2.component';
import { DemoComponent } from './demo16/demo.component';
import { Demo17Component } from './demo17_lianxi/demo.component'
import { ParentComponent } from './demo13/parent.component';
import { MyMainComponent } from './demo14/mymain.component';

const routes: Routes = [
  { path: '', redirectTo: '/demo16', pathMatch: 'full' },
  { path: 'cart', component: CartComponent,
    children:[
      { path: 'step1', component: Step1Component },
      { path: 'step2', component: Step2Component },
    ]
  },
  { path: 'mail',
    component: MailComponent, 
    children:[
      { path: '', component: InboxComponent },
      { path: '', redirectTo: '/mail/inbox', pathMatch: 'full' },
      { path: 'inbox', component: InboxComponent },
      { path: 'outbox', component: OutboxComponent },
    ]
  },
  { path: 'mymain', component: MyMainComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'demo06', component: Demo06Component },
  { path: 'demo17', component: Demo17Component },
  { path: 'demo16', component: DemoComponent },
  { path: 'demo1', component: DemoComponent1 },
  { path: 'demo2', component: DemoComponent2 },
  { path: 'demo10/:uName', component: Demo10Component },
  { path: 'check', component: CheckComponent },
  { path: 'pay', component: PayComponent },
  { path: 'send', component: SendComponent },
  { path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

// export const routedComponents = [DemoComponent];