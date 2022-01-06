var baleno={
    colours:["red","black","white"],
    varients:["petrol"],
    price:"8 lack",
    manufacture:"nexa",
getPrice(){
 return this.price
}

}
var glanza={
    manufacture:"toyota",
    price:"9lack"
}
glanza.__proto__=baleno
console.log(glanza.getPrice());