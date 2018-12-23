import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.route';
import { HttpModule } from '@angular/http'


import { AppComponent }  from './app.component';
import { NotFound } from './utility/notFound/notFound.component';
import { HeaderComponent } from './utility/header/header.component';
import { FooterComponent } from './utility/footer/footer.component';
import { IndexComponent } from './index/index.component';
import { MyHttpService } from './utility/service/myhttp.service';
import { Carousel } from './utility/carousel/carousel.component';
import { Slide } from './utility/carousel/slide.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { OrderConfirmComponent } from './orderConfirm/orderConfirm.component';
import { Step1Component } from './orderConfirm/orderConfirmStepOne.component';
import { Step2Component } from './orderConfirm/orderConfirmStepTwo.component';
import { Step3Component } from './orderConfirm/orderConfirmStepThree.component';


@NgModule({
  providers: [ MyHttpService, ],
  imports: [ BrowserModule, FormsModule, AppRoutingModule, HttpModule ],
  declarations: [
    OrderConfirmComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    CartComponent,
    LoginComponent,
    ListComponent,
    Slide, 
    Carousel,
    IndexComponent,
    AppComponent,
    NotFound,
    HeaderComponent,
    FooterComponent,
   ],
  bootstrap:    [ AppComponent ],
})

export class AppModule { }
