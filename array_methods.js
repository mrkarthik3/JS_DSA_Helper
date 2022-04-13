//*************************************************************** */
// DIFFERENT WAYS TO CREATE AN ARRAY
// There is no restriction on type of elements in an array
// Index starts from 0 and ends at (ArrayLength-1)
let arr0 = [1, 3, 5, 6, 7, 9, 11];
let arr1 = [100, true, 'freeCodeCamp', {}];

// When only one number is passed into Array constructor....
let arr2 = new Array(8); // Creates empty array of length = 8
console.log(arr2);
console.log(arr2[0]);

// When multiple numbers are passed into Array constructor...
let arr3 = new Array(1, 2); // new array [1, 2] is created.
console.log(arr3);

// Pass an array like object (Eg. HTMLCollection) into Array.of
// to convert it into a proper array.
// Array.of() is a static method of Array Class
// Array.of(element0)
// Array.of(element0, element1)
// Array.of(element0, element1, /* ... ,*/ elementN)
let arrNew = Array.of(3);
console.log(arrNew);

let arrNew0 = Array.of(1, 2, 3);
console.log(arrNew0);

let arrNew1 = Array.of([1, 2, 3], 4, 5, null, undefined);
console.log(arrNew1);

// Array.from() 
// This is a Static method of Array Class
// The Array.from() static method creates a new, shallow-copied Array instance from an array-like (those with length property and indexed elements like Array,NodeList...) or iterable objects like Map/Set.

// Array.from(arrayLike, (element) => { /* ... */ } )
// Array.from(arrayLike, (element, index) => { /* ... */ } )

// String to Array
console.log(Array.from('foo'));

// used will callback
console.log(Array.from([1, 2, 3], x => x + x));

// Set to Array
const set = new Set(['foo', 'bar', 'baz', 'foo']);
console.log(Array.from(set));

// Map to Array
const map = new Map([[1, 2], [2, 4], [4, 8]]);
console.log(Array.from(map));

// Creating separate arrays of keys and values of a Map 
const mapper = new Map([['1', 'a'], ['2', 'b']]);
console.log(Array.from(mapper.values()));
console.log(Array.from(mapper.keys()));

// Create an array based on a property of DOM Elements

// const images = document.getElementsByTagName('img'); // gives NodeList

// NodeList to Array via callback
// const sources = Array.from(images, image => image.src); 

// below is not relevant for this example
// const insecureSources = sources.filter(link => link.startsWith('http://'));

//*************************************************************** */

/**
 * Array.isArray() => Static Method of Array Class
 * TO CHECK IF SOMETHING IS AN ARRAY
 */
let arr4 = [1, 3, 5];
console.log(Array.isArray(arr4));
console.log(Array.isArray([...arr4]));

console.log(Array.isArray({ a: 1, b: 2 }))

//*************************************************************** */
/**
 * Array.prototype.push()
 * Array.prototype.unshift()
 * ADD ELEMENTS TO AN ARRAY
 * 
 * Add at the end using push()
 * Add at the front using unshift()
 * 
 * You can push more than one element at once. Separate them by comma
 * push(element0)
 * push(element0, element1)
 * push(element0, element1, ...,  elementN)
 * 
 * 
 * You can unshift more than one element at once. Separate them by comma
 * unshift() returns length of new array
 * 
 * unshift(element0) 
 * unshift(element0, element1)
 * unshift(element0, element1, ...,  elementN)
 * 
 */
{
    let arr5 = [1, 2, 3];
    arr5.push(4);
    arr5.push(5, 6, 7, 8, 9)
    console.log(arr5);

    // Merge 2 arrays like this
    let vegetables = ['parsnip', 'potato']
    let moreVegs = ['celery', 'beetroot']

    // Merge the second array into the first one
    vegetables.push(...moreVegs);

    console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']

    arr5.unshift(0);
    arr5.unshift(-3, -2, -1);
    console.log(arr5);
}
//*************************************************************** */
/**
 * Array.prototype.pop()
 * Array.prototype.shift()
 * REMOVE ELEMENTS FROM AN ARRAY
 * 
 * pop() removes & returns last element of array
 * shift() removes & returns first element of array
 * 
 * pop() can be used on array-like objects (that have 'length' property)
 */

{
    let arr6 = [0, 1, 2, 3, 4];

    let last = arr6.pop();
    console.log(last);

    const myFish = { 0: 'angel', 1: 'clown', 2: 'mandarin', 3: 'sturgeon', length: 4 };
    const popped = Array.prototype.pop.call(myFish); //same syntax for using apply( )
    console.log(myFish); // {0:'angel', 1:'clown', 2:'mandarin', length: 3}
    console.log(popped); // 'sturgeon'
    // Note that length property will be automatically incremented/decremented

    let first = arr6.shift();
    console.log(first);
}
//*************************************************************** */
/**
 * Array.prototype.slice()
 * COPY AN ARRAY
 * 
 * slice() creates shallow copy of an array
 * IT RETURNS NEW ARRAY
 * Does NOT modify original array
 * 
 * Shallow copy means... only first level is fully copied.
 * Any nested objects still point to old references. Beware of that!!
 * 
 * slice()
 * slice(start)
 * slice(start, end)
 * 
 */

let arr7 = [1, 2, 3, 4, 5];
// This copies all elements
let arr7Copy = arr7.slice();
console.log(arr7Copy);

// Copy elements of arr7 from index 3 
let arr7Copy0 = arr7.slice(3);
console.log(arr7Copy0);

let arr7Copy1 = arr7.slice(1, 3);
// Copy elements of arr7 from start (1) index to end (3) index 
console.log(arr7Copy1);

//*************************************************************** */

// Array.prototype.copyWithin()
//
// copyWithin(target, start, end) -
// The copyWithin() method overwrites the existing values and does NOT add items
// The copyWithin() method copies array elements to another position in the same array.
// (required) target = The index (position) to copy the elements to.
// (optional) start = The start index (position). Default is 0.
// (optional) end = The end index (position). Default is the array length.

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];

// Copy from index 0 (default) and past those from index 3
fruits.copyWithin(3);
console.log(fruits);

// In below... copy elements from index 3 till end(default) and paste those from index 1
fruits.copyWithin(1, 3);
console.log(fruits);

// In below... copy elements from 0 to 3 (excl) and overwrite the elements from target index = 2
fruits.copyWithin(2, 0, 3);
console.log(fruits);

//*************************************************************** */

/**
 * Array.prototype.splice()
 * 
 * It modifies original array 
 * It returns any removed elements as an array. 
 * It returns empty array [] if no elements are removed.
 *  
 * splice() is used...
 *      to insert elements starting from an index with/without deleting existing elements
 *      to delete "N" number of elements from any index position
 * 
 * if deleteCount = 0 it behaves as if I am extending the array
 * if deleteCount > 0 it behaves as if I am overwriting an array partly/fully
 *  
 * splice(start)
 * splice(start, deleteCount)
 * splice(start, deleteCount, item1)
 * splice(start, deleteCount, item1, item2, itemN)
 */
{
    const months = [];

    // nothing is inserted/deleted
    let deleted = months.splice();
    console.log(deleted);
    console.log(months);

    /** INSERTING without deleting = This EXTENDS the array
     *  when no. of elements to delete = 0 from the start index... 
     *  second argument = 0
     */


    months.splice(0, 0, 'Jan');
    // starting at index 0 insert "Jan" with deleting 0 elements
    console.log(months);

    // starting from index 1, without deleting any elements, insert "Feb", "Mar"
    months.splice(1, 0, "Feb", "Mar")
    console.log(months);

    // start from index 3, without deleting any elements, insert "May"
    months.splice(3, 0, "May");
    console.log(months);

    // start from index 3, without deleting any elements, insert "Apr"
    months.splice(3, 0, "Apr");
    console.log(months);

    /** REMOVING */

    // starting from index 4, delete 1 element
    deleted = months.splice(4, 1);
    console.log(months);
    console.log(deleted);

    // starting from index 2, delete 3 elements
    // from index 2 there are only 2 elements. so those 2 are deleted.
    deleted = months.splice(2, 3);
    console.log(deleted);
    console.log(months);

    // remove all elements starting from index 2
    let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
    let removed = myFish.splice(2)
    console.log(myFish);
    console.log(removed);

    // myFish is ["angel", "clown"]
    // removed is ["mandarin", "sturgeon"]

    /** REMOVE & REPLACE or INSERTING WITH DELETING */

    months.length = 7;  // increased length
    months.fill("Jan"); // filled with some starter values
    console.log(months);

    // starting from index 1, delete 2 elements and 
    // insert in indices starting from 1 with "Feb" and "Mar" 
    deleted = months.splice(1, 2, "Feb", "Mar");
    console.log(deleted);
    console.log(months);

    // starting from index 1,  delete 2 elements and
    // insert in indices start at 1 "Feb", "Mar", "Apr"
    deleted = months.splice(1, 2, "Feb", "Mar", "Apr");
    console.log(deleted);
    console.log(months);

    // starting from index 4, delete 5 elements
    // insert in index starting from 4, "May"
    deleted = months.splice(4, 5, "May")
    console.log(deleted);
    console.log(months);

    // This gives a good picture of how splice() is used to insert/delete
}

//*************************************************************** */
/**
 * Array.prototype.reverse()
 * 
 * It reverses the original array & also returns reversed array
 * So, be careful with it.
 *  
 * REVERSE ARRAY or "ARRAY-LIKE" Object (that has "length" property)
 */

let arr8 = [1, 2, 3];
let arr8Reverse = arr8.reverse();
console.log(arr8Reverse);
console.log(arr8);

// NOTE: reverse() can be applied on "Array-like objects" which have length property
// reverse() cannot be directly called on an object, but via call() method only... like below
let obj1 = { 0: 1, 1: 2, 2: 3, length: 3 }
let obj2 = Array.prototype.reverse.call(obj1);
console.log(obj2);
// obj2 =  { 0: 3, 1: 2, 2: 1, length: 3 }

//*************************************************************** */

// Array.prototype.toString()
// PRINT ARRAY AS STRING

const arr9 = [1, 2, 'a', '1a'];

console.log(arr9.toString());
// output: "1,2,a,1a"

//*************************************************************** */

/**
 * Iterations in JavaScript
 */

// for loop (NOT RECOMMENDED)
let loopEg = [1, 2, 3, 4]
for (let i = 0; i < loopEg.length; i++) {
    console.log(loopEg[i]);
}

/**
 * Array.prototype.forEach();
 * 
 * forEach((element) => {  ...  })
 * forEach((element, index) => {  ...  }) 
 * forEach((element, index, array) => {  ...  })
 * 
 * I wants a callback.
 * That callback will execute on each element of the array
 */

// just element of arr is used inside callback.
loopEg.forEach((elem) => console.log(elem));

// element and index are used inside callback.
loopEg.forEach((el, i,) => console.log(el, i));

// element, index and an array is used inside callback.
loopEg.forEach((el, i, loopEg) => console.log(el + loopEg[i]));

//*************************************************************** */
/**
 * Array.prototype.length
 * 
 * Length of an array is found in 'length' property
 */

// arr is an array
let lenEg = [1, 2, 3, 4];

let length = lenEg.length;
console.log(length);

//*************************************************************** */

/**
 * 
 * Array.prototype.concat()
 * 
 * concat() 2 arrays.
 * 
 * array1.concat(array2)
 * This creates a shallow copy
 * changes made in one array array1/array2 will be visible in final concatenation
 */
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];

let a3 = a1.concat(a2);
console.log(a3); // [ 1, 2, 3, 4, 5, 6 ]

//*************************************************************** */

/**
 * Array.prototype.fill()
 * 
 * fill(value)
 * fill(value, start)
 * fill(value, start, end)
 */

const fillEg = new Array(5); // empty array of length = 5 is created
// fill entire array with value 8
fillEg.fill(8);
console.log(fillEg); // [ 8, 8, 8, 8, 8 ]

// From index 3 till end, fill 1
fillEg.fill(1, 3);
console.log(fillEg);

// From index 2 to 4 (excl) fill 9.
fillEg.fill(9, 2, 4);
console.log(fillEg);


//*************************************************************** */

/**
 * Array.prototype.some()
 * 
 * When atleast one element satisfies a condition mentioned inside callback
 * Then it returns true. 
 * It returns false when none of the elements in the array satisfy the condition
 * 
 * some((element) => { ... } )
 * some((element, index) => {  ...  } )
 * some((element, index, array) => {  ...  } )
 */
{
    const arr = [1, 2, 3, 4, 6, 8, 91];

    // Is there atleast one element which is == 4
    let ans = arr.some((el) => el == 4);
    console.log(ans);

    // Is there any one element that is >= 99 ?
    ans = arr.some((el) => el >= 99);
    console.log(ans);
}

//*************************************************************** */

/**
 * Array.prototype.every()
 * 
 * This returns 'true' when all elements satisfy a condition.
 * Otherwise returns 'false'.
 * The condition is mentioned in callback
 * 
 * every((element) => { ... } )
 * every((element, index) => {  ...  } )
 * every((element, index, array) => {  ...  } )
 */

let everyExample = [1, 3, 4, 5, 11, 23, 32];
// is every element greater than 9 ?
let everyOutput0 = everyExample.every((el) => el > 9);
console.log(everyOutput0); // false

// is every element after operation >= 1 ?
let everyOutput1 = everyExample.every((el, i) => el + i >= 1);
console.log(everyOutput1); // true

// is every element after operation greater than 1 ?
let everyOutput2 = everyExample.every((el, i, everyExample) => {
    return el + i + everyExample[0] > 1
});
console.log(everyOutput2); // true

//*************************************************************** */
/**
 * Array.prototype.filter()
 * 
 * Creates a new array with ALL ELEMENTS that satisfy a condition (mentioned in the callback function)
 *
 * filter((element) => {  ...  } )
 * filter((element, index) => {  ...  } )
 * filter((element, index, array) => {  ...  } )
 */

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// I only want elements whose length < 7
const result = words.filter(word => word.length < 7);
console.log(result); // ['spray', 'limit', 'elite']

const filterEg = [1, 3, 4, 5, 6, 7, 9];
// I only want odd numbers
const filterOutput = filterEg.filter((el, i) => (el + i - i) % 2 === 1)
console.log(filterOutput); // [ 1, 3, 5, 7, 9]

// I only want elements that satisfy this condition
const filterOutput1 = filterEg.filter((el, i, filterEg) => el * filterEg[i] >= 20);
console.log(filterOutput1); // [ 5, 6, 7, 9]

//*************************************************************** */
/**
 * Array.prototype.find()
 * 
 * Returns the FIRST "element" in the array that satisfies the condition in callback function
 * 
 * If no element satisfies the condition, undefined is returned.
 * 
 * find((element) => {  ...  } )
 * find((element, index) => {  ...  } )
 * find((element, index, array) => {  ...  } )
 */

let findEg = [2, 3, 1, 4, 13, 1];
let findAns = findEg.find((el) => el === 1);
console.log(findAns); // 1

let findAns1 = findEg.find((el, i) => el * i === 1);
console.log(findAns1); // undefined

let findAns2 = findEg.find((el, i, findEg) => el === 4);
console.log(findAns2); // 4

//*************************************************************** */
/**
 * Array.prototype.findIndex()
 * 
 * returns the "index" of the FIRST element in the array that satisfies the provided testing function.
 * Otherwise, it returns -1
 * 
 * findIndex((element) => {  ...  } )
 * findIndex((element, index) => {  ...  } )
 * findIndex((element, index, array) => {  ...  } )
 * 
 */

const findIndexEg = [1, 4, 9, 16, 25, 36];

const findIndexAns = findIndexEg.findIndex((el) => el == 9);
console.log(findIndexAns); // 2

const findIndexAns1 = findIndexEg.findIndex((el, i) => el * 1 == el);
console.log(findIndexAns1); // 0

const findIndexAns2 = findIndexEg.findIndex((el, i, findIndexEg) => findIndexEg[i] === 125);
console.log(findIndexAns2); // -1 as no element is found that satisfies the condition

//****************************************************************/

/** find() returns FIRST element that satisfied a condition
 *  findIndex() returns "index" of the FIRST element that satisfied the condition
 */

//****************************************************************/

/** 
 * Array.prototype.flat()
 * 
 * It creates a NEW array
 * 
 * flat() removes nested arrays in original array and saves the elements in those
 * nested arrays into the original array (upto a specified depth)
 * 
 * when depth is not used... it is assumed to be 1
 * 
 * flat()
 * flat(depth)
 */

let flatEg = [1, 2, 3, [1, 3, [4]]];
// depth is not mentioned... so it is 1 by default
let flatAns = flatEg.flat();
console.log(flatAns); // [ 1, 2, 3, 1, 3, [ 4 ] ]

// depth = 2
let flatAns2 = flatEg.flat(2);
console.log(flatAns2); //[ 1, 2, 3, 1, 3, 4 ] 

//****************************************************************/

/**
 * Array.prototype.entries()
 * 
 * The entries() method returns a new Array-Iterator object 
 * that contains the key/value pairs for each index in the array
 */
{
    const array1 = ['a', 'b', 'c'];

    // Note how an iterator object behaves below..
    const iterator1 = array1.entries();

    console.log(typeof iterator1); // object

    console.log(iterator1.next());
    console.log(iterator1.next());
    console.log(iterator1.next());
    console.log(iterator1.next());


    const iterator2 = array1.entries();

    // to get values... you must access 'value' property in each iteration
    console.log(typeof iterator2);
    console.log(iterator2.next().value);
    console.log(iterator2.next().value);
    console.log(iterator2.next().value);
    console.log(iterator2.next().value);

    const iterator3 = array1.entries();

    // Note that calling next() method on iterator object make the iterator
    // move to the next item whether you access 'value' property or not...
    console.log(iterator3.next());
    console.log(iterator3.next().value);
    console.log(iterator3.next());
    console.log(iterator3.next().value);

    {
        const a = ['a', 'b', 'c'];

        for (const [index, element] of a.entries())
            console.log(index, element);
        // 0 'a'
        // 1 'b'
        // 2 'c'
    }

    {
        var a = ['a', 'b', 'c'];
        var iterator = a.entries();

        for (let e of iterator) {
            console.log(e);
        }
        // [0, 'a']
        // [1, 'b']
        // [2, 'c']
    }
}

//****************************************************************/

/**
 * Array.prototype.flatMap()
 * 
 *  returns a new array formed by applying a given callback function 
 *  to each element of the array, 
 *  and then flattening the result by one level. 
 * 
 * It is identical to a map() followed by a flat() of depth 1, but slightly
 * more efficient than calling those two methods separately.
 * 
 * findIndex((element) => {  ...  } )
 * findIndex((element, index) => {  ...  } )
 * findIndex((element, index, array) => {  ...  } )
 */

{
    let arr = [1, 2, 3, 4, 5];
    let resArr = arr.map((el) => [el * el]);
    console.log(resArr);
    resArr = resArr.flat();
    console.log(resArr);

    // Instead of doing like above use flatMap

    resArr = arr.flatMap(el => [el * el]);
    console.log(resArr);
}

/**
 * Array.prototype.includes()
 * 
 * returns 'true' if an element is present in the array
 * otherwise returns 'false
 * 
 * includes(searchElement)
 * includes(searchElement, fromIndex)
 * 
 * includes() can be used on Array-Like objects also 
 * (Eg. NodeList, HTMLCollection etc..)
 */

{
    const array1 = [1, 2, 3];
    console.log(array1.includes(2));

    const pets = ['cat', 'dog', 'bat'];
    console.log(pets.includes('cat'));
    console.log(pets.includes('cow'));

    const farmAnimals = ['cow', 'sheep', 'alpaca', 'camel', 'buffalo'];
    console.log(farmAnimals.includes('cow'));

    // starts searching for 'cow' in the array from index 1
    console.log(farmAnimals.includes('cow', 1));
}

/**
 * Array.prototype.indexOf()
 * 
 * It returns index of searched element if it is present. 
 * Otherwise returns -1
 * 
 * includes(searchElement)
 * includes(searchElement, fromIndex)
 */
{
    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
    console.log(beasts.indexOf('bison'));

    // start search from index 2
    console.log(beasts.indexOf('bison', 2));

    console.log(beasts.indexOf('giraffe'));
}

/**
 * Array.prototype.join()
 * 
 * Joins all elements in Array/Array-Like object and returns a string.
 * You can specify a separator to include between each element in 
 * the output string 
 * 
 * join()
 * join(separator)
 */

{
    const a = ['Wind', 'Water', 'Fire'];
    a.join();      // 'Wind,Water,Fire'
    a.join(', ');  // 'Wind, Water, Fire'
    a.join(' + '); // 'Wind + Water + Fire'
    a.join('');    // 'WindWaterFire'
}


/**
 * Array.prototype.keys()
 * 
 * The keys() method returns a new Array Iterator object that contains the keys 
 * for each index in the array.
 */

{
    const array1 = ['a', 'b', 'c'];
    const iterator = array1.keys();

    for (const key of iterator) {
        console.log(key);
    }
    // expected output: 0
    // expected output: 1
    // expected output: 2

    const iterator2 = array1.keys();

    console.log(iterator2.next())
    console.log(iterator2.next())
    console.log(iterator2.next().value)
    console.log(iterator2.next())

    // NOTE: key() iterator does not ignore missing/holes
    const arr = ['a', , 'c'];
    const sparseKeys = Object.keys(arr);
    console.log(sparseKeys); // ['0', '2']

    const denseKeys = [...arr.keys()];
    console.log(denseKeys);  // [0, 1, 2]
}

/**
 * Array.prototype.values()
 * 
 * The values() method returns a new Array-Iterator object that contains 
 * the values for each index in the array.
 */

{
    const array1 = ['a', 'b', 'c'];
    const iterator = array1.values();

    for (const key of iterator) {
        console.log(key);
    }
    // expected output: a
    // expected output: b
    // expected output: c

    const iterator2 = array1.values();

    console.log(iterator2.next())
    console.log(iterator2.next())
    console.log(iterator2.next().value)
    console.log(iterator2.next())

    // NOTE: values() iterator does not ignore missing/holes
    const arr = ['a', , 'c'];
    const sparsevalues = Object.values(arr);
    console.log(sparsevalues); // ['0', '2']

    const denseValues = [...arr.values()];
    console.log(denseValues);  // [0, 1, 2]
}

/**
 * Array.prototype.lastIndexOf()
 * 
 * Returns last index of searched element (strict equality check is used)
 * You can start search from a specific index also.
 * 
 * lastIndexOf(searchElement)
 * lastIndexOf(searchElement, fromIndex)
 */
{
    const animals = ['Dodo', 'Tiger', 'Penguin', 'Tiger', 'Dodo'];

    console.log(animals.lastIndexOf('Dodo'));
    // expected output: 4

    console.log(animals.lastIndexOf('Tiger'));
    // expected output: 3

    // start search from index 2 in the array
    console.log(animals.lastIndexOf('Tiger', 2));
    // output : 1
}

/**
 * Array.prototype.map()
 * 
 * map() wants a callback function.
 * It applies the callback function on each element and
 * returns a new array from the return values of the callback function
 * 
 * map((element) => { ... })
 * map((element, index) => { ... })
 * map((element, index, array) => { ... })
 * 
 * You shouldn't be using map if:
 *      you're not using the array it returns; and/or
 *      you're not returning a value from the callback.
 */
{
    const array1 = [1, 4, 9, 16];

    // pass a function to map
    const map1 = array1.map(x => Math.sqrt(x));

    console.log(map1);
    // expected output: Array [1, 2, 3, 4]
}


/**
 * Array.prototype.reduce()
 * 
 * reduce() will return one value at the end. It does NOT mutate the array
 *  
 * When initialValue is provided, it is treated as accumulator of first iteration. 
 *      So, first iteration's accumulator = initialValue... 
 *      Therefore currentValue = 1st element of the array
 * 
 * When initialValue is not provied,
 *      first element of the array is treated as accumulator for first iteration 
 *      currentValue = 2nd element in the array.
 * 
 * After first iteration (in both cases above), return value from callback function
 *      is stored as 'accmulator' and used for next iteration.
 * 
 * reduce((accumulator, currentValue) => { ... } ) 
 * reduce((accumulator, currentValue, currentIndex) => { ... } )
 * reduce((accumulator, currentValue, currentIndex, array) => { ... } )
 * reduce((accumulator, currentValue, currentIndex, array) => { ... }, initialValue)
 * 
 */

{
    const arr = [1, 2, 3, 4];
    //  TASK: Sum all Elements in the array

    // 0 + 1 + 2 + 3 + 4
    // initialValue = 0 is provided
    // So, acc = initialValue = 0
    // cV starts from arr[0]
    const sumWithInitial = arr.reduce((acc, cV) => acc + cV, 0);
    console.log(sumWithInitial);

    // initialValue is NOT provided
    // 1 + 2 + 3 + 4
    // so acc = arr[0] for first iteration. 
    // cV starts from arr[1]
    const sumWithoutInitial = arr.reduce((acc, cV) => acc + cV);
    console.log(sumWithoutInitial);

    // TASK: Multiply all elements in the array

    // initialValue is provided
    // So, acc = initialValue 
    // cV starts from arr[0]
    const multi_with_initialVal = arr.reduce((acc, cV) => acc * cV, 1);
    console.log(multi_with_initialVal);

    // initialValue is NOT provided. 
    // so acc = arr[0] for first iteration. 
    // cV starts from arr[1]
    const multi_without_initialVal = arr.reduce((acc, cV) => acc * cV);
    console.log(multi_without_initialVal);
}

/**
 * Array.prototype.reduceRight()
 * 
 * This works exactly same as reduce() but with one difference 
 * 
 * In reduce() the elements are processed from left to right
 * In reduceRight() the elements are processed from right to left
 * 
 * 
 * reduceRight((accumulator, currentValue) => { ... } ) 
 * reduceRight((accumulator, currentValue, currentIndex) => { ... } )
 * reduceRight((accumulator, currentValue, currentIndex, array) => { ... } )
 * reduceRight((accumulator, currentValue, currentIndex, array) => { ... }, initialValue)
 * 
 */
{
    // initial value is not provided
    // Because this is reduceRight().....
    // The accumulator takes "last element" of array as its intial value
    // Processing starts from 2nd last element
    // Thus processing happens right to left....
    const arr = [[0, 1], [2, 3], [4, 5]]
    const result = arr.reduceRight((acc, cV) => acc.concat(cV));
    console.log(result);


    // initial value [] is passed. 
    // accumulator takes initial value for first iteration
    // processing starts from last element... goes right to left
    const flattened = arr.reduceRight((acc, el) => acc.concat(el), []);
    console.log(flattened);
    // flattened is [4, 5, 2, 3, 0, 1]
}

/**
 * 
 * Arrays.prototype.sort()
 * 
 * sort() modifies original array
 * 
 * // Functionless
 * sort()
 * 
 * // Arrow function
 * sort((a, b) => { ... } )
 * return value of this callback must be +ve/-ve/ 0
 * 
 * sort((a, b) => a - b); // if a-b > 0 this causes ascending sort
 * sort((a, b) => a - b); // if a-b < 0 this causes descending sort
 * sort((a, b) => a - b); // if a-b == 0 this causes no sort 
 *
 */

{
    // default sort() without any callback works for strings only
    // It will NOT work for numbers
    const arr = ['d', 'e', 'b', 'a', 'c', 'h'];
    let sorted = arr.sort();
    console.log(sorted); // correct

    const arr2 = [5, 1, 3, 22, 9];
    sorted = arr2.sort();
    console.log(sorted); // incorrect

    const numbers = [4, 2, 5, 1, 3];
    numbers.sort((a, b) => a - b);
    console.log(numbers); // Ascending sort. This works

    const items = [
        { name: 'Edward', value: 21 },
        { name: 'Sharpe', value: 37 },
        { name: 'And', value: 45 },
        { name: 'The', value: -12 },
        { name: 'Magnetic', value: 13 },
        { name: 'Zeros', value: 37 }
    ];

    // sort by value
    items.sort(function (a, b) {
        return a.value - b.value;
    });

    console.log(items);
}

/**
 * Array.prototype.toLocaleString()
 * 
 * returns a string
 * 
 * elements are co  nverted to Strings 
 * these Strings are separated by a locale-specific String (such as a comma ",")
 * 
 * toLocaleString(); 
 * toLocaleString(locales);
 * toLocaleString(locales, options);
 * 
 */
{
    const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];

    let localeString = array1.toLocaleString();
    console.log(localeString);

    localeString = array1.toLocaleString('en', { timeZone: 'PST' });
    console.log(localeString);

    localeString = array1.toLocaleString('en-UK', { timeZone: 'EST' });
    console.log(localeString);

    const prices = ['￥7', 500, 8123, 12];
    localeString = prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
    console.log(localeString);
    // "￥7,￥500,￥8,123,￥12"
}


/**
 * NOTE:
 * Note that each function is an instance of the Function Object. 
 * There are methods of the Function prototype that can be applied on all functions 
 * which are nothing but instances of the Function Object.
 * 
 * call(), apply(), bind() & toString() are methods on Function.prototype.
 * That means they are applied on all instances of functions/methods
 * 
 * length & name are properties of Function  
 *
 */


/**
 * Function.prototype.toString()
 * 
 * This returns a string which is the source code of the function
 */
{
    function sum(a, b) {
        return a + b;
    }

    console.log(sum.toString());
    // expected output: "function sum(a, b) {
    //                     return a + b;
    //                   }"

    // in-built methods like 'abs', 'max' etc... will not show full code
    console.log(Math.abs.toString());
    // expected output: "function abs() { [native code] }"
}


/**
 * Function.prototype.call()
 * 
 * "this" will point to first argument
 * 
 * Any no. of args can be put after the first argument.
 * Those will be treated as arguments to the 
 * function on which call() is being used.
 * 
 */

// Usage of call() with one argument.
// call() changes 'this'. 
// this is very important task of call()
{
    const obj = { a: 10, b: null };

    function myFn() {
        console.log(this);
    }

    myFn(); // "this" is window
    // window

    myFn.call(obj); // "this" points to 'obj'
    // { a: 10, b: null }
}


// You can use call() with extra arguments
// "this" points to first argument
// Other arguments are treated as arguments for the function
{
    const obj = { a: 10, b: null }

    function myFn(a, b) {
        console.log(a + b);
        console.log(this);
    }

    // In below, call()... there could be extra arguments.
    // First argument will replace "window" of "this" with... "obj".
    // So, 'this' points to 'obj
    // Other arguments are simply applied to corresponding parameters.
    // So, a = 10 and b = 5
    myFn.call(obj, 10, 5);
    // output :
    // 15
    // { a: 10, b: null }
}

// call() allows borrowing methods from other objects.  
{
    const person1 = {
        city: "NY",
        name: "Bob",
        info: function () {
            console.log(this.name + " lives in " + this.city);
        }
    }

    const person2 = {
        city: "Hyderabad",
        name: "Karthik"
    }

    // Although person2 has no info() method,
    // By using call() I am able to borrow info() method from person1 
    // and use it on person2

    // Since call() changes 'this',
    // "this" will point to person2
    // So, person2's values are taken for info() method.

    person1.info.call(person2);
    // Karthik lives in Hyderabad

}

/**
 * Function.prototype.apply()
 * 
 * apply() works EXACTLY SAME as call().
 * BUT, there can only be 2 arguments.
 * 
 * "this" will point to first argument
 * 
 * Second argument must be an array
 * 
 * Elements of the array are treated as arguments to 
 * the function on which apply is being used.
 */

// apply() behaves exactly the same as call() when only 1 arguments is used
// 
{
    const obj = { a: 10, b: null }

    function myFn() {
        console.log(this);
    }

    myFn();
    // this points to 'window'

    myFn.apply(obj);
    // output :
    // this = { a: 10, b: null }
}

// apply() with 2 arguments
// first argument points to new 'this'
// second argument must be array
{
    const obj = { a: 10, b: null }

    function myFn(a, b) {
        console.log(a + b);
        console.log(this);
    }

    // a = 10 and b = 5 are taken from the second argument (array) and 
    // used as arguments to myFn() function
    myFn.apply(obj, [10, 5]);
    // output :
    // 15
    // { a: 10, b: null }
}

// apply() allows borrowing methods from other objects.
// This behavour is EXACTLY SAME as call()!!
// Especially when only 1 argument is passed into both  
{
    const person1 = {
        city: "NY",
        name: "Bob",
        info: function () {
            console.log(this.name + " lives in " + this.city);
        }
    }

    const person2 = {
        city: "Hyderabad",
        name: "Karthik"
    }

    // Although person2 has no info() method,
    // By using apply() I am able to borrow info() method from person1 
    // and use it on person2

    // Since apply() changes 'this',
    // "this" will point to person2
    // So, person2's values are taken for info() method.

    person1.info.apply(person2);
    // Karthik lives in Hyderabad

    // THIS PROVES THAT call() and apply() behave EXACTLY SAME when one argument is used
    // Both call() and apply() change 'this' to the first argument

    // call() wants rest of arguments (AFTER first) as individual arguments.
    // apply() wants rest of arguments (AFTER first) as a single array with one/more elements.

    // So, call() can have more than 2 arguments
    // apply() can only have 2 arguments.
}

/**
 * Function.prototype.bind()
 * 
 * Two main functions of bind()
 * 
 * (1) It changes 'this'
 * 
 * "this" will point to first argument
 * 
 * (2) It helps us create template functions
 * 
 * all arguments passed after first argument are
 * treated as arguments for the function on which
 * bind() is being called
 * 
 * It will help create template functions with preset values.
 * These template functions take their structure from the 
 * original function on which bind() is applied/called.
 */

// bind() lets us create template functions
{
    const myObj = {
        a: 10,
        b: null
    }

    function myFn(a, b) {
        console.log(this);
        console.log(a + b);
    }

    const templateFn1 = myFn.bind(myObj, 10, 5);

    templateFn1();
    // this points to myObj = { a: 10, b: null }

    // a takes 10 as default value, 
    // b takes 5 as default value,
    // So, (a+b) = 15 is printed.


    const templateFn2 = myFn.bind(null, 11, 22);

    templateFn2();

    // this points to null

    // a takes 11, b takes 22
    // (a+b) = 33
}

// Thus
// bind() will change 'this'
// bind() also helps us create template functions.

/**
 * Function.length
 * 
 * The Function constructor is itself a Function object. Its "length" data property has a value of 1.
 * 
 * length is a property of a function object, and indicates how many arguments the function expects
 */
{
    console.log(Function.length); /* 1 */

    console.log((function () { }).length); /* 0 */
    console.log((function (a) { }).length); /* 1 */
    console.log((function (a, b) { }).length); /* 2 etc. */

    console.log((function (...args) { }).length);
    // 0, rest parameter is not counted

    console.log((function (a, b = 1, c) { }).length);
    // 1, only parameters before the first one with a default value is counted   
}

/**
 * Function.name
 * 
 * A Function object's read-only name property indicates the function's name as specified 
 * when it was created, or it may be either 
 * anonymous or '' (an empty string) for functions created anonymously.
 */
{
    const func1 = function () { };

    const object = {
        func2: function () { }
    };

    console.log(func1.name);
    // expected output: "func1"

    console.log(object.func2.name);
    // expected output: "func2"
}