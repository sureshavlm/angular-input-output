import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PrdouctsComponent } from './products.component';
import { ProductDetailsComponent } from './products/product-details-component';

import { AdvertisementsComponent } from './products/advertisements.component';

@NgModule({
	declarations : [ PrdouctsComponent, ProductDetailsComponent, AdvertisementsComponent ],
	imports : [ BrowserModule, FormsModule ],
	providers : [],
	bootstrap : [ PrdouctsComponent ]
})

export class RootModule {
	
}