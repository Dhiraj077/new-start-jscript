const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
// console.log(descripter);

const product = {
    name: 'paint',
    price: 234,
    isAvailable: true


}

console.log(Object.getOwnPropertyDescriptor(product, 'price'));

Object.defineProperty(product, 'name',{
//     writeable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(product, 'name'));

for (let [key, value] of Object.entries(product)){
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    // console.log(`${key} : ${value}`);
}



