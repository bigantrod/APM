import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import {WelcomeComponent} from './home/welcome.component';

import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe} from './products/product.filter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent} from './products/product-detail.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', component: ProductListComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ], {useHash: true})
    ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailComponent
     ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }