import products from "./data.js";

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(data){
    const onlyCandies = 
    data
    .filter(item => item.type === 'sweet')
    .map(item => ({item: item.item, price: item.price}) );

    return onlyCandies
};


