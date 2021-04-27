// sum of squares

// array= [2, 3, 4, 7] [4, ]

// squared and added 

//function sumOfSq(arr) {
//    return arr.map(function (elem) {
//        return elem *elem
//    }).reduce(function (prev, curr) {
//        return prev + curr
//    }, 0)
//}




//function even(arr) {
//    return arr.filter(function(elem){return elem%2 === 0})
//}

//even(2, 3, 4, 5 )
//function even(arr) {
//    var args = Array.prototype.slice.call(arguments);
//    return args.filter(function (elem) { return elem % 2 === 0 })
//}
 

//console.log(even(2, 4, 5, 7));

// higher order functions 
//function arr_neg(arr, criteria) { // criteria= function(){}
//    return arr.filter(function (i) {
//        return !criteria(i)
//    })
//}
//// nested functions
//function num1{
//    function num2{
//        return y
//    }
//    return x
//}

// map, filter, reduce 
var bdays = ["12-01", "10-02", "30-03"] // 12/01
 
// the format of the dates shoulld converted to: DD/MM
// .replace()

var bday = bdays.map(function (elem) {
    return elem.replace('-', '/')
})

console.log(bday);


var nums = [-4, 3, 2, -21, 1];

// filter out all the positive numbers 

var pos = nums.filter(function (el) {
    return el > 0
});

console.log(pos);


var data = [
    { name: "A", age: 45 }, // index value = 0
    { name: "B", age: 23 }, // index value = 1
    { name: "C", age: null },
    { name: "D", age: undefined },
    { name: null, age: undefined },
];

// return all the datasets that have valid values 

var dataMod = data.filter(function (el) {
    if (el.name != undefined && el.age != undefined) {
        return true;
    } else {
        return false;
    }
});

console.log(dataMod);