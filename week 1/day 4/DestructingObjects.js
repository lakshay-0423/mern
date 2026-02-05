const address = {
    "houseNo" : "#67",
    "street"  : 7,
    "colony" : "lal bagh"
};

const {street : streetName,colony : area,pincode=147001} = address;
console.log(streetName);
console.log(area);
console.log(pincode);

