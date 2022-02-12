console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named `basket` and set it to an empty array.
let basket = [];
const maxItems = 5;

function addItem(item) {
  while (isFull()) {
    return false;
  }
  basket.push(item);
    return true;
}

function listItems( array ) {
  // OR...
  // for (let i = 0; i < array.length; i++) {
  // console.log ('Item in basket:', array[i]);
  i = 0;
  while (i < array.length) {
  console.log ('Item in basket:', array[i]);
  i++;
  }
}

function empty( array ) {
  array.length = 0;
  return array;
  }

function isFull() {
  while (maxItems <= basket.length) {
    return true;
  }
    return false;
}

function removeItem(item) {
  let removedItem;
  if (basket.indexOf(item) >= 0){
    removedItem = basket.splice(basket.indexOf(item));
    return removedItem;
    }
      else {
        return 'null';
    }
}

console.log( 'Number of Items in Basket:', basket.length );
// I created a log called 'Number of Items in Basket' to help me
//follow along in the console :)
console.log( 'Adding apple', addItem( 'apple' ));
console.log( 'Basket is full:', isFull());
console.log( 'Number of Items in Basket:', basket.length );
console.log( listItems(basket));
console.log( 'Adding banana', addItem( 'banana' ));
console.log( 'Basket is full:', isFull());
console.log( 'Number of Items in Basket:', basket.length );
console.log( listItems(basket));
console.log( 'Adding orange', addItem( 'orange' ));
console.log( 'Basket is full:', isFull());
console.log( 'Number of Items in Basket:', basket.length );
console.log( listItems(basket));
console.log( 'Adding lime', addItem( 'lime' ));
console.log( 'Basket is full:', isFull());
console.log( 'Number of Items in Basket:', basket.length );
console.log( listItems(basket));
console.log( 'Adding lemon', addItem( 'lemon' ));
console.log( 'Basket is full:', isFull());
console.log( 'Number of Items in Basket:', basket.length );
console.log( listItems(basket));
console.log( 'Adding just one more thing!', addItem( 'one more thing' ));
console.log( 'Basket is full:', isFull());
console.log( 'Emptying basket:', empty( basket ));
console.log( 'Adding pear', addItem( 'pear' ));
console.log( 'Adding plum', addItem( 'plum' ));
console.log( 'Number of Items in Basket:', basket.length );
console.log( listItems(basket));
console.log( 'Basket is full:', isFull());
console.log( 'Find index number for Plum:', basket.indexOf( 'plum' ));
console.log( 'Removing Plum:', removeItem( 'plum' ));
console.log( listItems(basket));
console.log( 'Number of Items in Basket:', basket.length );
console.log( listItems(basket));
console.log( 'Removing Peach (item NOT in basket, should return "Null"):', removeItem( 'peach' ));
