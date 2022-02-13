console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named `basket` and set it to an empty array.
let basket = [];
const maxItems = 5;

function addItem(item) {
  if (isFull()) {
    return false;
  }
  else {
  basket.push(item);
    return true;
  }
}

function listItems( array ) {
  for (let i = 0; i < array.length; i++) {
  console.log ('Item in basket:', array[i]);
  }
}

function empty( array ) {
  array.length = 0;
  return array;
  }

function isFull( array ) {
  if (maxItems <= basket.length) {
    return true;
  }
  else {
    return false;
  }
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

//I know how and when to use  template literal and would normally use them, but
//for this weeks assignments, I needed to see that the values were being passed to the
//console to ensure I understood what was happening. Otherwise, values are passed
//as a string and it made it difficut in some instances understand what was happening
//when trouble-shooting and correcting my code.
console.log( 'Number of Items in Basket:', basket.length );
// I created a log called 'Number of Items in Basket' to help me
//follow along in the console :)
console.log( 'Adding Item: apple (should return true)', addItem( 'apple' ));
console.log( 'Basket is now full:', isFull());
console.log( 'Number of Items in Basket:', basket.length );
listItems( basket );
console.log( 'Adding Item: banana (should return true)', addItem( 'banana' ));
console.log( 'Basket is now full:', isFull());
console.log( 'Number of Items in Basket:', basket.length );
listItems( basket );
console.log( 'Adding Item: orange (should return true)', addItem( 'orange' ));
console.log( 'Basket is now full:', isFull());
console.log( 'Number of Items in Basket:', basket.length );
listItems( basket );
console.log( 'Adding Item: lime (should return true)', addItem( 'lime' ));
console.log( 'Basket is now full:', isFull());
console.log( 'Number of Items in Basket:', basket.length );
listItems( basket );
console.log( 'Adding Item: lemon (should return true)', addItem( 'lemon' ));
console.log( 'Basket is now full:', isFull());
console.log( 'Number of Items in Basket:', basket.length );
listItems( basket );
console.log( 'Adding Item: just one more thing! (should return false)', addItem( 'one more thing' ));
console.log( 'Basket is now full:', isFull());
console.log( 'Emptying basket:', empty( basket ));
console.log( 'Number of Items in Basket:', basket.length );
listItems( basket );
console.log( 'Adding Item: pear', addItem( 'pear' ));
console.log( 'Adding Item: plum', addItem( 'plum' ));
console.log( 'Number of Items in Basket:', basket.length );
listItems( basket );
console.log( 'Basket is now full:', isFull());
console.log( 'Find index number for Plum (should return 1):', basket.indexOf( 'plum' ));
console.log( 'Removing Plum:', removeItem( 'plum' ));
listItems( basket );
console.log( 'Number of Items in Basket:', basket.length );
listItems( basket );
console.log( 'Removing Item: peach (item NOT in basket, should return "Null"):', removeItem( 'peach' ));
