// Pure Function(Set 'Same input', you can get 'Same Output' )
// Pure Function uses in 'Functional Programming'.
function area(w, b){
   return w * b;
}
console.log(area(15, 50));
console.log(area(15, 50));
console.log(area(15, 50));
console.log(area(15, 50));
console.log(area(15, 50));

// impure function(function with side effect)
// Impure Function is not use in 'Functional Programming'.
let total = 0;
function buy(amount){
    total +=amount;
    return amount;
}

console.log(buy(100));
console.log(buy(100));
console.log(buy(100));
console.log(buy(100));

console.log(total);

// Higher Order Function

const filter = (arr, callback) => {
    const result = [];
    for(el of arr){
        if(callback(el)){
            result.push(el)
        }
    }
    return result;
}

console.log(filter([1,2,3,4,5,6], x => x >3)); //callback


// Immutability

// Mutable Way
const arr = ["a","b","c"];
console.log(arr);
arr[3] = "d"
console.log(arr);

// Immutable Way

const arrTwo = ["a","b","c"];
console.log(arrTwo);
console.log([...arrTwo,"d"]);
console.log(arrTwo);

// Object like this array
