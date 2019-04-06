import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector : 'product-details',
	templateUrl : './product-details-component.html',
	styleUrls : [
					'../styles/product-details.css'
				]
})

export class ProductDetailsComponent {
	@Input()
	item: any;

	@Output()
	changeprice: EventEmitter;

	@Input()
	userId: string;

	price: number=0;

	constructor() {
		//instantiating event object
		this.changeprice = new EventEmitter();   
	}

	update() {
		console.log('Update called', this.price);
		let obj: any = {price: this.price, index: this.userId-1}
		
		this.changeprice.emit(obj); //trigger an event
	}
}
