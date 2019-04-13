var blueSilkDress = {
	itemClass: 'dresses',
	itemPrice: 149,
	itemDesc: 'Blue Silk Dress',
	itemColor: 'blue',
	quantity: 1
}

var checkedStretchDress = {
	itemClass: 'dresses',
	itemPrice: 129,
	itemDesc: 'Checked Stretch Dress',
	itemColor: 'red',
	quantity: 1
}

var stretchKnitDress = {
	itemClass: 'dresses',
	itemPrice: 129,
	itemDesc: 'Stretch Knit Dress',
	itemColor: 'black',
	quantity: 1
}

var pinkDottedDress = {
	itemClass: 'dresses',
	itemPrice: 129,
	itemDesc: 'Pink Dotted Dress',
	itemColor: 'pink',
	quantity: 1
}

var deminOverallShorts = {
	itemClass: 'dresses',
	itemPrice: 100,
	itemDesc: 'Demin Overall Shorts',
	itemColor: 'blue',
	quantity: 1
}

var cottonBlueShirt = {
	itemClass: 'shirt',
	itemPrice: 89,
	itemDesc: 'Cotton Blue Shirt',
	itemColor: 'blue',
	quantity: 1
}

var cottonYellowShirt = {
	itemClass: 'shirt',
	itemPrice: 80,
	itemDesc: 'Cotton Yellow Shirt',
	itemColor: 'yellow',
	quantity: 1
}

var hipsterBag = {
	itemClass: 'bags',
	itemPrice: 69,
	itemDesc: 'Blue Hipster Backpack',
	itemColor: 'blue',
	quantity: 1
}

const arr = [blueSilkDress, checkedStretchDress, stretchKnitDress, pinkDottedDress, deminOverallShorts, cottonBlueShirt, cottonYellowShirt, hipsterBag];

console.log(arr[1]);

// How do we calculate the subtotal price of a single product? 

var singleProduct = arr[2];
	console.log(singleProduct.itemPrice * singleProduct.quantity);

// how do we calculate the total price of our entire array? 

var total = 0;
for (var i = 0; i < arr.length; i++) {

	var singleProduct = arr[i];
	total += singleProduct.itemPrice * singleProduct.quantity;
}

console.log(total);



