// 配置路由词典
// a-module-routing

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 修改1：正确的去引入对应的组件类
import { Demo12Component } 
from './demo12/demo12.component';
import {Demo13Component} 
from './demo13/demo13.component'
import {NotFoundComponent} 
from './notFound/not-found.component'
import {Demo14Component} 
from './demo14/demo14.component'
import {CheckComponent} from './demo15/check.component'
import {PayComponent} from './demo15/pay.component'
import {SendComponent} from './demo15/send.component'
import {LoginComponent} from './demo16/login.component'
import {DashboardComponent} from './demo16/dashboard.component'
import {MailComponent} from './demo17/mail.component'
import {InboxComponent} from './demo17/inbox.component'
import {OutboxComponent} from './demo17/outbox.component'
import {ParentComponent} from './demo18/parent.component'
import {MyMainComponent} from './demo19/mymain.component'
import {MyIndexComponent} 
from './demo20/myindex.component'
import {CartComponent} from './demo21/cart.component'
import {OrderConfirmComponent} from './demo21/orderconfirm.component'
import {Step1Component} from './demo21/step1.component'
import {Step2Component} from './demo21/step2.component'
import {Demo22Component} from './demo22/demo22.component'
import {Demo23Component} 
from './demo23/demo23.component'
import {Demo24Component} 
from './demo24/demo24.component'
import {Demo25Component} from './demo25/demo25.component'
import {Demo26Component} 
from './demo26_http/demo26.component'
import {Demo27Component} from './demo27_lianxi/demo27.component'
import {Demo28Component} 
from './demo28_customdirective/demo28.component'
import {Demo29Component} 
from './demo29_service_comm/demo29.component'
import {Demo30Component}
from './demo29_service_comm/demo30.component'
import {Demo31Component}
from './demo31_guard/demo31.component'
import {MyGuard} 
from './demo31_guard/myguard.service'
import {Demo32Component} 
from './demo32_lifecycle/demo32.component'
import {Demo34Component}
from './demo34_carsouel/demo34.component'

// 修改2：配置路由词典
const routes: Routes = [
  { path: '', redirectTo:'/demo31',pathMatch:'full'},
  { path: 'demo34',component:Demo34Component},
  { path: 'demo32',component:Demo32Component},
  { 
    path: 'demo31',
    component:Demo31Component,
    canActivate:[MyGuard]
  },
  { path: 'demo29',component:Demo29Component},
  { path: 'demo30',component:Demo30Component},
  { path: 'demo28',component:Demo28Component},
  { path: 'demo27',component:Demo27Component},
  { path: 'demo26',component:Demo26Component},
  { path: 'demo25',component:Demo25Component},
  { path: 'demo24',component:Demo24Component},
  { path: 'demo23',component:Demo23Component},
  { path:'demo22',component:Demo22Component},
  { path:'cart',component:CartComponent},
  { 
    path:'orderConfirm',
    component:OrderConfirmComponent,
    children:[
      {path:'',component:Step1Component},
      {path:'step1',component:Step1Component},
      {path:'step2',component:Step2Component}
    ]
  },
  { path: 'myindex',component:MyIndexComponent},
  { path:'parent',component:ParentComponent},
  { path:'mymain',component:MyMainComponent},
  { 
    path: 'mail',
    component:MailComponent,
    children:[
      // { path:'',component:InboxComponent},
      { path:'', redirectTo:'/mail/inbox', pathMatch: 'full'},
      { path: 'inbox',component:InboxComponent},
      { path: 'outbox',component:OutboxComponent},
      { path: '**',component:NotFoundComponent}
    ]
  },

  { path: 'demo12', component: Demo12Component },
  { path: 'demo13', component: Demo13Component },
  { path: 'demo14/:uName', component: Demo14Component },
  { path: 'check',component:CheckComponent},
  { path: 'pay/:price',component:PayComponent},
  { path: 'send',component:SendComponent},
  { path: 'login', component:LoginComponent },
  { path:'dashboard',component:DashboardComponent},
  { path: '**',component:NotFoundComponent},
  
];

// 修改3：将forChild-->forRoot
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
// 修改4：指定导出的模块类的名称
export class AppRoutingModule { }

// export const routedComponents = [NameComponent];