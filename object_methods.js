/*** DIFFERENT WAYS TO CREATE AN OBJECT*/
{
    // APPROACH 1 : Object literal syntax
    // person is an object created using object literal syntax
    const person = {
        isHuman: false,
        printIntroduction: function () {
            console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
        }
    };

    // APPROACH 2: Object created using Object.create()
    // Object.create(proto)
    // Object.create(proto, propertiesObject)
    //  proto has to be null or an object

    // 'me' is an instance of 'person' object
    // In other words, the prototype of "me" is "person"

    // So Object.create() is used to create new object of a prototype
    const me = Object.create(person);

    me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
    me.isHuman = true; // inherited properties can be overwritten

    me.printIntroduction();
    // expected output: "My name is Matthew. Am I human? true"

    // APPROACH 3: This is NOT recommended
    var object = new Object();

    // APPROACH 4: Using function constructor
    function Person(name) {
        this.name = name;
        this.age = 21;
    }
    var object = new Person("Karthik");

    // APPROACH 5 : Using ES6 Class syntax
    class Professional {
        constructor(name) {
            this.name = name;
        }
    }

    var object = new Professional("Sai");

    // APPROACH 6 : Singleton Class
    // A Singleton is an object which can only be instantiated one time.
    // Repeated calls to its constructor return the same instance and 
    // this way one can ensure that they don't accidentally 
    // create multiple instances.

    var object = new function () {
        this.name = "Sudheer";
    }


    // APPROACH 7 : Object.fromEntries(Iterable)
    // It transforms a list of key-value pairs into an object.
    // Iterable = Array / Map...

    {
        const entries = new Map([
            ['foo', 'bar'],
            ['baz', 42]
        ]);

        const obj = Object.fromEntries(entries);

        console.log(obj);
        // expected output: Object { foo: "bar", baz: 42 }

        const array = [[1, 2], ["hi", 3]]

        const obj2 = Object.fromEntries(array);

        console.log(obj2)
        // expected output: Object { 1: 2, hi: 3}
    }

    // NOTE: Object.fromEntries() performs the reverse of Object.entries().
    // Object.fromEntries() creates an object from Array/Map

    // Object.entries() converts an object into an Array.
    // Each element in that array is a sub array with key 
    // and value as elements
}

/******************************************************************* */

/**
 * Object.prototype.constructor
 * 
 * constructor property returns a reference to 
 * the Object constructor function
 * that created the instance object.
 */

{
    let o = {}
    o.constructor === Object // true

    o = new Object
    o.constructor === Object // true

    let a = []
    a.constructor === Array // true

    a = new Array
    a.constructor === Array // true

    let n = new Number(3)
    n.constructor === Number // true
}
/******************************************************************* */

/**
 * Object.assign()
 * 
 * Object.assign(target, ...sources)
 * 
 * The Object.assign() method copies all enumerable OWN properties 
 * from one or more source objects to a target object. 
 * 
 * It returns the modified target object.
 * 
 * source is unchanged
 * target is modified and returned
 */

// Basic usage
{
    let target = { a: 1, b: 2 };
    const source1 = { b: 4, c: 5 };
    const source2 = { d: 4, e: 5 };
    const source3 = { f: 4, a: 5 };

    const returnedTarget = Object.assign(target, source1);

    console.log(target);
    // expected output: Object { a: 1, b: 4, c: 5 }

    console.log(returnedTarget);
    // expected output: Object { a: 1, b: 4, c: 5 }

    // I can merge multiple objects
    target = {};
    const mergedObj = Object.assign(target, source1, source2, source3);
    // mergedObj = { b: 4, c: 5, d: 4, e: 5, f: 4, a: 5 }

    // Merging Objects with same properties...
    // Values of properties are overwritten by the last added source.
    const o1 = { a: 1, b: 1, c: 1 };
    const o2 = { b: 2, c: 2 };
    const o3 = { c: 3 };

    const obj = Object.assign({}, o1, o2, o3);
    console.log(obj); // { a: 1, b: 2, c: 3 }
    // Note that c is 1, it changes to 2 and finally takes value = 3
}

// Object.assign(clonetarget, source) can create shallow copy of Objects.
// Nested objects will point to same reference in both target and source
{
    const obj = { a: 1 };
    const copy = Object.assign({}, obj);
    console.log(copy); // { a: 1 }
}

// For deep clone use following method
{
    obj1 = { a: 0, b: { c: 0 } };
    let obj3 = JSON.parse(JSON.stringify(obj1));
    obj1.a = 4;
    obj1.b.c = 4;
    console.log(JSON.stringify(obj3)); // { "a": 0, "b": { "c": 0}}

    // When deep cloning is done, changine nested object in source
    // WILL NOT affect the target/clone
}

// Remember that Object.assign() copies only OWN & enumerable properties
/******************************************************************* */

/**
 * Object.is()
 * 
 * Object.is(value1, value2);
 * 
 * The Object.is() method determines whether two values are the same value.
 * 
 * Object.is doesn't coerce either value.
 * 
 * This is not the same as being equal according to the == / === operator.
 */
{
    // Case 1: Evaluation result is the same as using ===
    Object.is(25, 25);                // true
    Object.is('foo', 'foo');          // true
    Object.is('foo', 'bar');          // false
    Object.is(null, null);            // true
    Object.is(undefined, undefined);  // true
    // Object.is(window, window);     // true
    Object.is([], []);                // false
    var foo = { a: 1 };
    var bar = { a: 1 };
    Object.is(foo, foo);              // true
    Object.is(foo, bar);              // false << Note: this is FALSE!

    // Case 2: Signed zero
    Object.is(0, -0);                 // false
    Object.is(+0, -0);                // false
    Object.is(-0, -0);                // true
    Object.is(0n, -0n);               // true

    // Case 3: NaN
    Object.is(NaN, 0 / 0);              // true
    Object.is(NaN, Number.NaN)        // true
    console.log(Object.is(undefined, undefined)); // true
    console.log(Object.is(undefined, null)); // false
    console.log(Object.is(null, NaN)); // false
    console.log(Object.is(undefined, NaN)); // false
}
/******************************************************************* */

/**
 * Object.defineProperties()
 * 
 * Object.defineProperties(obj, props)
 * 
 * It creates new or modifies existing properties
 * directly on an object & returns the object.
 */
{

    var obj = {};
    Object.defineProperties(obj, {
        'property1': {
            value: true,
            writable: true
        },
        'property2': {
            value: 'Hello',
            writable: false
        }
        // etc. etc.
    });

    console.log(obj.property1);
    console.log(obj.property2);
}
/******************************************************************* */

/** Object.defineProperty() 
 * 
 * Object.defineProperty(obj, prop, descriptor)
 * 
 * creates a new property directly on an object, or...
 * modifies an existing property on an object, and returns the object.
*/
{
    const object1 = {};

    // creating a new property on object1
    Object.defineProperty(object1, 'property1', {
        value: 42,
        writable: true
    });

    // You can use one or more of "enumerable" or "configurable" or 
    // "writeable" property descriptors
    // along with "value"  

    object1.property1 = 77;
    // throws an error in strict mode when "writeable : false"

    // Note that 
    //      writeable, configurable and enumerable are false BY DEFAULT

    console.log(object1.property1);
    // expected output: 77 ... when writeable: true above.
    // expected output: 42 ... when writeable: false above.

    // Modifying an existing property on object1.
    // You can modify existing property ONLY if its writeable : true.
    Object.defineProperty(object1, 'property1', { value: 33, writeable: true });
    console.log(object1.property1); // 33
}
/******************************************************************* */

/**
* Object.entries()
*
* Object.entries(obj)
*
* method returns an array of a given object's own enumerable
* string-keyed property [key, value] pairs.
* This is the same as iterating with a for...in loop, except that 

* a for...in loop enumerates properties in the prototype chain as well.
* 
*/
{
    const object1 = {
        a: 'somestring',
        b: 42
    };

    const result = Object.entries(object1);
    console.log(result);

    // expected output:
    // [ [ 'a', 'somestring' ], [ 'b', 42 ] ]

    for (const [key, value] of Object.entries(object1)) {
        console.log(`${key}: ${value}`);
    }

    // expected output:
    // "a: somestring"
    // "b: 42"


    for (const arr of Object.entries(object1)) {
        console.log(arr);
    }

    // expected output:
    // ['a', 'somestring']
    // ['b', 42]
}
/******************************************************************* */

/**
 * Object.isExtensible() & Object.preventExtensions()
 * 
 * Object.isExtensible(obj) & Object.preventExtensions(obj)
 * 
 * The Object.isExtensible() method determines if an object is extensible 
 * (whether it can have new properties added to it).
 * 
 * The Object.preventExtensions() method prevents new properties from ever
 * being added to an object (i.e. prevents future extensions to the object).
 */
{
    const object1 = {};

    console.log(Object.isExtensible(object1));
    // expected output: true

    Object.preventExtensions(object1);

    console.log(Object.isExtensible(object1));
    // expected output: false
}
/******************************************************************* */

/**
 * Object.freeze() & Object.isFrozen()
 * 
 * Object.freeze(obj)
 * The Object.freeze() method freezes an object. Returns the same object
 *  that was passed in.
 * 
 * Object.isFrozen(obj)
 * The Object.isFrozen() determines if an object is frozen. Returns true/false
 * 
 * A frozen object can no longer be changed; 
 * 
 * freezing an object prevents addition of new properties
 * AND modification of existing properties 
 * AND removal of existing of properties. 
 * 
 * It also prevents changing the enumerability, configurability, 
 * or writability of existing properties, 
 * 
 * In addition, freezing an object also prevents its prototype 
 * from being changed.
 */
{
    const obj = {
        prop: 42
    };

    console.log(Object.isFrozen(obj));
    // expected output: false

    Object.freeze(obj);

    console.log(Object.isFrozen(obj));
    // expected output: true

    obj.prop = 33;
    // Throws an error in strict mode

    // Although it doesn't throw error in normal mode
    // Above line will NOT modify 'obj' as it is frozen

    console.log(obj.prop);
    // expected output: 42
}
/******************************************************************* */

/**
 * Object.seal() & Object.isSealed()
 * 
 * Object.seal(obj) & Object.isSealed(obj)
 * 
 * The Object.seal() method seals an object, 
 * preventing new properties from being added to it & 
 * marking all existing properties as non-configurable.
 *  
 * Values of present properties can still be changed as long as 
 * they are writable.
 * 
 * The Object.isSealed() method determines if an object is sealed. 
 */
{
    const object1 = {
        property1: 42
    };

    console.log(Object.isSealed(object1));
    // expected output: false

    Object.seal(object1);

    console.log(Object.isSealed(object1));
    // expected output: true

    // sealed object's properties can be changed
    object1.property1 = 33;
    console.log(object1.property1);
    // expected output: 33

    // cannot delete when sealed
    delete object1.property1;

    console.log(object1.property1);
    // expected output: 33
}

/** Object.freeze() vs Object.seal() */
// Existing properties in objects frozen with Object.freeze() 
// are made immutable / unchangeable. 
// Objects sealed with Object.seal() can have their existing properties changed.

/******************************************************************* */

/**
 * Object.getOwnPropertyDescriptor()
 * 
 * Object.getOwnPropertyDescriptor(property)
 * method returns an object describing the configuration of a specific property 
 * on a given object  * (that is, one directly present on an object and 
 * not in the object's prototype chain). 
 * 
 * The object returned is mutable but mutating it has no effect on the 
 * original property's configuration.
 */
{
    const object1 = {
        property1: 42
    };

    const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

    console.log(descriptor1);
    // { value: 42, writable: true, enumerable: true, configurable: true }

    // I can add new or modify existing property using 
    // Object.defineProperty() like below
    // It has already been discussed above.
    Object.defineProperty(object1, 'property1', { value: 33, writeable: true });
    console.log(object1.property1); // 33
}
/******************************************************************* */

/**
 * Object.getOwnPropertyDescriptors()
 * 
 * Object.getOwnPropertyDescriptors(object1)
 * 
 * This method returns all own property descriptors of a given object.
 * 
 * Each property has its own descriptor object
 */
{
    const object1 = {
        pr1: 42,
        pr2: true
    };

    const descriptors1 = Object.getOwnPropertyDescriptors(object1);

    console.log(descriptors1);
    // expected output:
    const ouptput =
    {
        pr1: { value: 42, writable: true, enumerable: true, configurable: true },
        pr2: { value: true, writable: true, enumerable: true, configurable: true }
    }
}
/******************************************************************* */

/** Object.getOwnPropertyNames()
 * 
 * Object.getOwnPropertyNames(obj)
 * 
 * method returns an array of all properties found directly in a given object
 * (incl non-enumerable properties except for those which use Symbol)
 * 
 */
{
    const object1 = {
        a: 1,
        b: 2,
        c: 3
    };

    console.log(Object.getOwnPropertyNames(object1));
    // ["a", "b", "c"]

    const array = [1, 2, 3];
    console.log(Object.getOwnPropertyNames(array));
    // ['0', '1', '2', 'length']
    // Note that length is non-enumerable property. 
    // So, this gives non-enumerable property names also!
}
/******************************************************************* */

/**
 * Object.values() & Object.keys()
 * 
 * Object.values(obj) & Object.keys(obj)
 * 
 * The Object.values() method returns an array of 
 * a given object's OWN ENUMERABLE property values, 
 * in the same order as that provided by a for...in loop. 
 * (The only difference is that a 
 * for...in loop enumerates properties in the prototype chain as well.)
 * 
 * The Object.keys() method returns an array of 
 * a given object's OWN ENUMERABLE property names, 
 * iterated in the same order that a normal loop would.
 */

{
    const object1 = {
        a: 'somestring',
        b: 42,
        c: false
    };

    const values = Object.values(object1);
    console.log(values);
    // ["somestring", 42, false]

    const keys = Object.keys(object1);
    console.log(keys);
    // ["a", "b", "c"]
}

// NOTE: Object.keys(obj) & Object.getOwnPropertyNames(obj) behave ALMOST same.
// DIFFERENCE IS... Object.keys() will give only OWN ENUMERABLE PROPERTY NAMES
// Object.getOwnPropertyName() will give NON-ENUMERABLE PROPERTY NAMES ALSO...
/******************************************************************* */

/**
 * Object.getOwnPropertySymbols()
 * 
 * Object.getOwnPropertySymbols(obj)
 * 
 * method returns an array of all symbol properties found directly upon a given object.
 */
{
    const object1 = {};

    // This is how you create Symbol
    /**
     * Symbol is a built-in object whose constructor returns a symbol primitive —
     * also called a Symbol value or just a Symbol 
     * — that's guaranteed to be unique. Symbols are often used to 
     * 
     * add unique property keys to an object that won't collide with keys 
     * any other code might add to the object, 
     * and which are hidden from any mechanisms other code will typically 
     * use to access the object.
     */
    const a = Symbol('a');
    const b = Symbol.for('b');

    console.log(a); // Symbol(a)
    console.log(b); // Symbol(b)

    // Every Symbol() call is guaranteed to return a unique Symbol
    // Every Symbol.for("key") call will always return the same Symbol for a 
    // given value of "key".
    // When Symbol.for("key") is called, if a Symbol with the given key can be found 
    // in the global Symbol registry,
    // that Symbol is returned.Otherwise, a new Symbol is created, added to the 
    // global Symbol registry under the given key, and returned.

    object1[a] = 'localSymbol';
    object1[b] = 'globalSymbol';

    const objectSymbols = Object.getOwnPropertySymbols(object1);

    console.log(objectSymbols); // [ Symbol(a), Symbol(b) ]
}
/******************************************************************* */

/** Object.getPrototypeOf()
 * 
 * Object.getPrototypeOf(obj)
 * 
 * method returns the prototype 
 * (i.e. the value of the internal [[Prototype]] property) of the specified object.
 */
{
    const prototype1 = {};
    const object1 = Object.create(prototype1);

    console.log(Object.getPrototypeOf(object1) === prototype1);

    // NOTE: YOU CANNOT ACCESS the internal [[Prototype]] like below. IT wont work.
    // console.log(Object.getPrototypeOf(object1)); // {}
    // console.log(Object.getPrototypeOf(prototype1)); // {}

    // expected output: true
}
/******************************************************************* */

/** Object.setPrototypeOf()
 *
 * Object.setPrototypeOf(obj, prototype)
 *
 * sets the prototype (i.e., the internal [[Prototype]] property) of a specified object
 * to another object or null.
 * 
 * USAGE OF setPrototypeOf() is NOT RECOMMENDED as it is slow.
 * 
 * Instead, create a new object with the desired [[Prototype]] using Object.create().
 */

/**
 *  Object.prototype.hasOwnProperty()   
 * 
 * Note that this is a method on 'prototype' of Object.
 * Therefore it is accessible by all objects.
 * 
 * hasOwnProperty(prop)
 * 
 * returns a boolean indicating whether the object has the specified property as 
 * its own property (as opposed to inheriting it).
 * 
 */
{
    const object1 = {};
    object1.property1 = 42;

    console.log(object1.hasOwnProperty('property1'));
    // expected output: true

    console.log(object1.hasOwnProperty('property2'));
    // expected output: false (because it is absent)

    console.log(object1.hasOwnProperty('toString'));
    // expected output: false (because it is inherited)

    console.log(object1.hasOwnProperty('hasOwnProperty'));
    // expected output: false (because it is inherited)
}
/******************************************************************* */

/**
 * Object.prototype.isPrototypeOf()
 * 
 * The isPrototypeOf() method checks if 
 * an object exists in another object's prototype chain.
 */
{
    function Foo() { }
    function Bar() { }
    function Baz() { }

    /**Below 2 lines are for connecting the prototype chains*/

    // Setting prototype of Bar to Foo.prototype
    Bar.prototype = Object.create(Foo.prototype);

    // Setting prototype of Baz to Bar.prototype
    Baz.prototype = Object.create(Bar.prototype);

    //create objects
    const foo = new Foo();
    const bar = new Bar();
    const baz = new Baz();

    // Existing prototype chains:
    // foo: Foo <- Object
    // bar: Bar <- Foo <- Object
    // baz: Baz <- Bar <- Foo <- Object

    // is 'baz' object present in Baz prototype chain ?
    console.log(Baz.prototype.isPrototypeOf(baz));    // true

    // is 'bar' object present in Baz prototype chain ?
    console.log(Baz.prototype.isPrototypeOf(bar));    // false

    // is 'foo' object present in Baz prototype chain ?
    console.log(Baz.prototype.isPrototypeOf(foo));    // false

    // is 'baz' object present in Bar prototype chain ?
    console.log(Bar.prototype.isPrototypeOf(baz));    // true

    // is 'foo' object present in Bar prototype chain ?
    console.log(Bar.prototype.isPrototypeOf(foo));    // false

    // is 'baz' object present in Foo prototype chain ?
    console.log(Foo.prototype.isPrototypeOf(baz));    // true

    // is 'bar' object present in Foo prototype chain ?
    console.log(Foo.prototype.isPrototypeOf(bar));    // true

    // is 'baz' object present in Object prototype chain ?
    console.log(Object.prototype.isPrototypeOf(baz)); // true
}
/******************************************************************* */

/**
 * Object.prototype.propertyIsEnumerable()
 * 
 * propertyIsEnumerable(prop)
 * 
 * returns a Boolean indicating whether the specified property is enumerable and
 * is the object's own property.
 * 
 * If a property of an object is its own... then it is enumerable.
 * 
 * So, if it is not enumerable, it returns false...
 * That means... that property is also not its own.
 */

{
    const object1 = {};
    const array1 = [];
    object1.property1 = 42;
    array1[0] = 42;

    console.log(object1.propertyIsEnumerable('property1'));
    // expected output: true

    console.log(array1.propertyIsEnumerable(0));
    // expected output: true

    console.log(array1.propertyIsEnumerable('length'));
    // expected output: false (length property of an array is NOT enumerable)

    // Note that built-in properties are by default NOT enumerable.

    var a = ['is enumerable'];

    a.propertyIsEnumerable(0);          // returns true
    a.propertyIsEnumerable('length');   // returns false

    Math.propertyIsEnumerable('random');   // returns false
    this.propertyIsEnumerable('Math');     // returns false
}
/******************************************************************* */

/**
 * Object.prototype.toString()
 * 
 * toString()
 * 
 * The toString() method returns a string representing the object.
 */
{
    function Dog(name) {
        this.name = name;
    }

    const dog1 = new Dog('Gabby');

    console.log(dog1.toString());
    // gives output: [object Object]

    // to overcome above obscure printing... override the toString() method 
    // like below
    Dog.prototype.toString = function dogToString() {
        return `${this.name}`;
    };

    console.log(dog1.toString());
    // expected output: "Gabby"
}
/******************************************************************* */

/**
 * Object.prototype.valueOf()
 * 
 * valueOf()
 * 
 * The valueOf() method returns the primitive value of the specified object.
 * JavaScript calls the valueOf method to convert an object to a primitive value. 
 * JavaScript automatically invokes it when encountering an object where a 
 * primitive value is expected.
 */
{
    function MyNumberType(n) {
        this.number = n;
    }

    const obj = new MyNumberType(3);

    // By default, valueOf() returns the object itself
    console.log(obj.valueOf());
    // output: 
    // MyNumberType { number: 3 }

    // overriding valueOf() to return primitive value
    MyNumberType.prototype.valueOf = function () {
        return this.number;
    };

    const object1 = new MyNumberType(4);

    // primitive value of object1 is used in below expression
    console.log(object1 + 3);
    // output: 7

    // below usage is ame as above
    console.log(object1.valueOf() + 3);
    // output: 7

    // valueOf() is automatically invoked whenever an object is used.
    // by default it returns the object itself
    // but I can override it to return a primitive value.

    // Every built-in core object overrides this method to return an appropriate value. 
    // If an object has no primitive value, valueOf returns the object itself.

    // You can use valueOf within your own code to convert a built-in object 
    // into a primitive value. 
    // When you create a custom object, you can override Object.prototype.valueOf() 
    // to call a custom method instead of the default Object method
}
/******************************************************************* */

/**
 * Object.prototype.toLocaleString()
 * 
 * toLocaleString()
 * 
 * method returns a string representing the object. 
 * This method is meant to be overridden by derived objects for locale-specific purposes
 */

{
    const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

    console.log(date1.toLocaleString('ar-EG'));
    // expected output: "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

    const number1 = 123456.789;

    console.log(number1.toLocaleString('de-DE'));
    // expected output: "123.456,789"

    const testArray = [4, 7, 10];

    let eu = testArray.toLocaleString('fr', { style: 'currency', currency: 'EUR' });
    // "4,00 €,7,00 €,10,00 €"

    const testDate = new Date(Date.now());
    // "Date Fri May 29 2020 18:04:24 GMT+0100 (British Summer Time)"

    let deDate = testDate.toLocaleString('de');
    // "29.5.2020, 18:04:24"

    const testNumber = 2901234564;
    // "2901234564"

    let deNumber = testNumber.toLocaleString('de');
    // "2.901.234.564"

    /**
     * Objects overriding toLocaleString
     * 
     * Array: Array.prototype.toLocaleString()
     * Number: Number.prototype.toLocaleString()
     * Date: Date.prototype.toLocaleString()
     * TypedArray: TypedArray.prototype.toLocaleString()
     * BigInt: BigInt.prototype.toLocaleString()
     */
}
/******************************************************************* */
