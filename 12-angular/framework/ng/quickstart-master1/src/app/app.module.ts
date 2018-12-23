import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app.route'

import { AppComponent }  from './app.component';
import { TestDirective } from './demo06/test.directive';
import { Demo06Component } from './demo06/demo.component';
import { DemoComponent1 } from './demo08/demo.component';
import { DemoComponent2 } from './demo09/demo.component';
import { Demo10Component } from './demo10/demo.component';
import { CheckComponent } from './demo11/check.component';
import { PayComponent } from './demo11/pay.component';
import { SendComponent } from './demo11/send.component';
import { NotFound } from './notFound/not-found.component';
import { MailComponent } from './demo12/mail.component';
import { InboxComponent } from './demo12/inbox.component';
import { OutboxComponent } from './demo12/outbox.component';
import { ParentComponent } from './demo13/parent.component';
import { SonComponent } from './demo13/son.component';
import { MyMainComponent } from './demo14/mymain.component';
import { MyHeader1Component } from './demo14/myheader.component';
import { MyHeaderComponent } from './demo15/myheader.component';
import { CartComponent } from './demo15/cart.component';
import { Step1Component } from './demo15/step1.component';
import { Step2Component } from './demo15/step2.component';
import { DemoComponent } from './demo16/demo.component';
import { SexChangePipe } from './demo16/sex.pipe';
import { Demo17Component } from './demo17_lianxi/demo.component'
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    AppRoutingModule,HttpModule
   ],
  declarations: [ 
    MyHeader1Component,
    TestDirective,
    Demo06Component,
    Demo17Component,
    SexChangePipe,
    AppComponent, 
    DemoComponent,
    DemoComponent1, 
    DemoComponent2, 
    Demo10Component, 
    CheckComponent,
    PayComponent,
    SendComponent,
    MailComponent,
    InboxComponent,
    OutboxComponent,
    ParentComponent,
    SonComponent,
    MyMainComponent,
    MyHeaderComponent,
    CartComponent,
    Step1Component,
    Step2Component,
    NotFound ],
  bootstrap:    [ AppComponent ],
})

export class AppModule { }
