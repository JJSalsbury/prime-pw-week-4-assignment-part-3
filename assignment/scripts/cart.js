console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem( item ) {
    console.log( 'Current number of items in Basket:', basket.length );
    console.log( 'Added Item: ' + item );
    basket.push(item);
//    for ( i = 0; i < .length; i++) {
      return true;
}
      // console.log( 'Items in Basket: ', basket );
      // console.log('Item Added: (expect true)', addItem('apples'));
      console.log('Item Added: (expect true)', addItem('apples'));


addItem( 'apples');
addItem( 'bananas');
addItem( 'oranges');

function listItem( array ) {
  for (let i=0; i<array.length;i++){
    console.log( 'Items in Basket (Individual): ', basket[i]);
  }
}

listItem(basket);

function empty( array ) {
  basket.length = 0;
}

empty(basket);

console.log( 'Empty Basket - Current number of items in Basket: ', basket.length );
