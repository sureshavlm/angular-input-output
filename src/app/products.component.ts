import { Component } from '@angular/core';


@Component({
	selector: 'products-component',
	templateUrl: './products.component.html',
	styleUrls : [
					'./styles/advertisement.css', 
					'./styles/product-details.css'
				]
})

export class PrdouctsComponent {
	products: any = [];
	color: string = 'orange';

	firstName: string = 'John';

	/* event handler */
	update(_firstName) {
		this.firstName = _firstName;
	}

	updatePrice(event) {
		this.products[event.index].price = event.price;
	}

	constructor() {
		this.products = [
							{ name: 'Dell 5353', price: 55000, category: 'Laptop' },
							{ name: 'Macbook Pro', price: 125000, category: 'Laptop' },
							{ name: 'Samsung S4', price: 65000, category: 'Tab' }
						]
	}
}
	
