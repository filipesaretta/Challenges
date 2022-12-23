import products from "./data.js";

/*
    You're online shopping for holiday gifts, but money is tight
    so we need to look at the cheapest items first. 
    
    Then log the item and the price to the console: 
    
    💕,0
    🍬,0.89
    🍫,0.99
    🧁,0.99
    📚,0.99
    ... continued
*/

function sortProducts(data){
    return data.sort((a, b) => a.price - b.price)
}

const listByCheapest = sortProducts(products);
listByCheapest.map(i => console.log(i.product, i.price));


 