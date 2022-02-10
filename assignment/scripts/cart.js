console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item) {
  while (basket.push(item)) {
  return true;
 }
}

function listItems() {
  for (i = 0; i < basket.length; i++ ) {
  console.log ( basket[i] );
  }
}

function empty() {
  basket.length = 0;
  // while (basket.length > 0) {
  //   basket.pop(basket);
    return 'Empty';
  }

function isFull() {
  while (maxItems <= basket.length) {
    return true;
  }
    return false;
}

console.log( 'Basket is:', basket.length );
console.log( 'Added apples', addItem( 'apples'));
console.log( 'Basket is now:', basket.length);
console.log( 'Basket is full:', isFull());
console.log( 'Basket is:', basket.length );
console.log( 'Added bananas', addItem( 'bananas'));
console.log( 'Basket is now:', basket.length);
console.log( 'Basket is full:', isFull());
console.log( 'Basket is:', basket.length );
console.log( 'Added oranges', addItem( 'oranges'));
console.log( 'Basket is now:', basket.length);
console.log( 'Basket is full:', isFull());
console.log( 'Basket is:', basket.length );
console.log( 'Added limes', addItem( 'limes'));
console.log( 'Basket is now:', basket.length);
console.log( 'Basket is full:', isFull());
console.log( 'Basket is:', basket.length );
console.log( 'Added lemons', addItem( 'lemons'));
console.log( 'Basket is now:', basket.length);
console.log( 'Basket is full:', isFull());
console.log( 'Basket is:', basket.length );
console.log( 'Added just one more thing!', addItem( 'one more thing'));
console.log( 'Basket is now:', basket.length);
console.log( 'Basket is full:', isFull());
console.log( 'Emptying basket:', empty());
console.log( 'Basket is:', basket.length );
