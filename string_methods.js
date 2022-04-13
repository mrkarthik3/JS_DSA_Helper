/**
 * DIFFERENT WAYS TO CREATE A STRING
 * Primitive strings are converted to non-primitive strings to access String methods
 */

// Below 3 are primitive strings
const string1 = "A string primitive";       // double quotes
const string2 = 'Also a string primitive';  // single quotes 
const string3 = `Yet another string primitive`; // back ticks

// Below one is non-primitive string because of using constructor.
const string4 = new String("A String object");


/**
 * ACCESSING CHARACTERS OF A STRING
 * 
 * String.prototype.charAt()
 * 
 * charAt(index)
 * 
 * returns a new string consisting of the single UTF-16 code unit located at the
 * specified offset into the string.
 */

{
    const sentence = 'The quick brown fox jumps over the lazy dog.';

    const index = 4;

    console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
    // expected output: "The character at index 4 is q"


    // Below is Accessing an index of string like accessing an array's element
    // at an index
    console.log('cat'[1]);  // returns "a"
}


/**
 * String.prototype.charCodeAt()
 * 
 * charCodeAt(index)
 * 
 * The charCodeAt() method returns an integer between 0 and 65535 representing 
 * the UTF-16 code unit at the given index.
 */
{
    const sentence = 'The quick brown fox jumps over the lazy dog.';

    const index = 4;

    console.log(`The character code of ${sentence.charAt(index)} 
                    is = ${sentence.charCodeAt(index)}`);
    // expected output: "The character code of q = 113"
}

/**
 * 
 * String.prototype.codePointAt()
 * 
 * codePointAt(pos)
 * 
 * The codePointAt() method returns a non-negative integer that is the 
 * Unicode code point value at the given position
 */
{

    const icons = '☃★♲';

    console.log(icons.codePointAt(0));
    // expected output: "9733"
}

/**
 * String.prototype.concat()
 * 
 * concat(str1)
 * concat(str1, str2)
 * concat(str1, str2, ... , strN)
 * The concat() method concatenates the string arguments to the 
 * calling string and returns a new string
 */
{
    let hello = 'Hello, '
    console.log(hello.concat('Kevin', '. Have a nice day.'))
    // Hello, Kevin. Have a nice day.

    let greetList = ['Hello', ' ', 'Venkat', '!']
    "".concat(...greetList)  // "Hello Venkat!"

    "".concat({})    // [object Object]
    "".concat([])    // ""
    "".concat(null)  // "null"
    "".concat(true)  // "true"
    "".concat(4, 5)  // "45"
}

/**
 * LENGTH
 * 
 * length is a read-only PROPERTY (not method) of a String object
 */
{
    const str = 'I am worthy and I deserve better.'
    console.log(str.length);
}

/**
 * String.prototype.endsWith()
 * 
 * endsWith(searchString)
 * endsWith(searchString, length)
 * 
 * The endsWith() method determines whether a string ends with the 
 * characters of a specified string, returning true or false as appropriate.   
 */

{
    let str = 'To be, or not to be, that is the question.'

    console.log(str.endsWith('question.'))  // true
    console.log(str.endsWith('to be'))      // false
    console.log(str.endsWith('to be', 19))  // true
}

/**
 * String.prototype.startsWith()
 * 
 * startsWith(searchString)
 * startsWith(searchString, position)
 * 
 * The startsWith() method determines whether a string begins with 
 * the characters of a specified string, returning true or false as appropriate.
 */
{
    let str = 'To be, or not to be, that is the question.'

    console.log(str.startsWith('To be'))          // true
    console.log(str.startsWith('not to be'))      // false
    console.log(str.startsWith('not to be', 10))  // true
}

/**
 * String.prototype.substring()
 * 
 * substring(indexStart)
 * substring(indexStart, indexEnd)

 * The substring() method returns the part of the string 
 * between the start and end indexes, or to the end of the string.
 */

{
    let anyString = 'Mozilla'

    // Displays 'M'
    console.log(anyString.substring(0, 1))
    console.log(anyString.substring(1, 0))

    // Displays 'Mozill'
    console.log(anyString.substring(0, 6))

    // Displays 'lla'
    console.log(anyString.substring(4))
    console.log(anyString.substring(4, 7))
    console.log(anyString.substring(7, 4))

    // Displays 'Mozilla'
    console.log(anyString.substring(0, 7))
    console.log(anyString.substring(0, 10))
}

/**
 * String.prototype.includes()
 * 
 * includes(searchString)
 * includes(searchString, position)
 * 
 * The includes() method performs a ""case-sensitive"" search to determine
 * whether one string may be found within another string,
 *  returning true or false as appropriate.
 */

{
    const str = 'To be, or not to be, that is the question.'

    console.log(str.includes('To be'))        // true
    console.log(str.includes('question'))     // true
    console.log(str.includes('nonexistent'))  // false
    console.log(str.includes('To be', 1))     // false
    console.log(str.includes('TO BE'))        // false
    console.log(str.includes(''))             // true

    // you can mention starting index of search
    console.log(str.includes('or', 19))       // false
    console.log(str.includes('or', 2))       // true
}

/**
 * String.prototype.indexOf()
 * 
 * indexOf(searchString)
 * indexOf(searchString, position)
 * 
 * returns the index of the first occurrence of the specified substring.
 * If not found, -1 is returned.
 * 
 * This is also case-sensitive
 * if second argument (number) is given, returns the first occurrence
 * of the specified substring at an index greater than 
 * or equal to the specified number.
 */
{
    'Blue Whale'.indexOf('Blue')      // returns  0
    'Blue Whale'.indexOf('Blute')     // returns -1 // not found
    'Blue Whale'.indexOf('Whale', 0)  // returns  5
    'Blue Whale'.indexOf('Whale', 5)  // returns  5
    'Blue Whale'.indexOf('Whale', 7)  // returns -1 // not found

    // Don't use this to search empty string. 
    // In this case, output becomes equal to second argument
    'Blue Whale'.indexOf('')          // returns  0
    'Blue Whale'.indexOf('', 9)       // returns  9
    'Blue Whale'.indexOf('', 10)      // returns 10
    'Blue Whale'.indexOf('', 11)      // returns 10

    // with a second argument whose value is greater than 
    // or equal to the string's length,
    //  the return value is the string's length:
    'hello world'.indexOf('', 11) // returns 11
    'hello world'.indexOf('', 13) // returns 11
    'hello world'.indexOf('', 22) // returns 11

    'hello world hello'.indexOf('o', -5)
    // returns 4 — 
    // because it causes the method to behave as if 
    // the second argument were 0, 
    // and the first occurrence of hello at a position 
    // greater or equal to 0 is at position 4.
    'hello world hello'.indexOf('world', 12)
    // returns -1 — 
    // because, while it's true the substring world occurs at index 6, 
    // that position is not greater than or equal to 12.
    'hello world hello'.indexOf('o', 99)
    // returns -1 —
    // because 99 is greater than the length of hello world hello, 
    // which causes the method to not search the string at all.
}

/**
 * String.prototype.lastIndexOf()
 * 
 * lastIndexOf(searchString)
 * lastIndexOf(searchString, position)
 * 
 * returns the index of the last occurrence of the specified substring.
 * If not found, -1 is returned.
 * 
 * This is also case-sensitive
 * if second argument (number) is given, it returns the last occurrence 
 * of the specified substring at an index less than or equal to the 
 * specified number.
 * 
 */
{
    'canal'.lastIndexOf('a');     // returns 3
    'canal'.lastIndexOf('x');     // returns -1
    'canal'.lastIndexOf('a', 2);  // returns 1
    'canal'.lastIndexOf('a', 0);  // returns -1
    'canal'.lastIndexOf('c', -5); // returns 0
    'canal'.lastIndexOf('c', 0);  // returns 0
    'canal'.lastIndexOf('');      // returns 5
    'canal'.lastIndexOf('', 2);   // returns 2

    'hello world hello'.lastIndexOf('world', 4) // returns -1 — 
    // because, while the substring world does occurs at index 6, that 
    // position is not less than or equal to 4.
    'hello world hello'.lastIndexOf('hello', 99) // returns 12 — 
    // because the last occurrence of hello at a position less than 
    // or equal to 99 is at position 12.

    'hello world hello'.lastIndexOf('hello', 0) // and 
    'hello world hello'.lastIndexOf('hello', -5) // both return 0 — 
    // because both cause the method to only look for hello at index 0
}


/**
 * indexOf() searches to the right and finds index of first occurence....
 * lastIndexOf() searches to the left and finds index of last occurence...
 */

/**
 * String.prototype.toLowerCase() & String.prototype.toUpperCase()
 * 
 * toLowerCase() & toUpperCase()
 * 
 * The toLowerCase() converts input string to lower case.
 * The toUpperCase() converts input string to upper case.
 */
{
    const sentence = 'WORK HARD';

    console.log(sentence.toLowerCase()); // work hard

    const sentence2 = "work hard now";

    console.log(sentence2.toUpperCase()); // WORK HARD NOW
}

/**
 * String.prototype.toString()
 * 
 * toString();
 * 
 * The toString() method returns a string representing the specified object.
 */

{
    var x = new String("Hello world");
    console.log(x.toString()); // logs 'Hello world'

    // prints binary representation
    var x = new String("13");
    console.log(parseInt(x).toString(2)); // logs '1101'

    // prints binary representation
    var x = new Number(13);
    console.log(x.toString(2)); // logs '1101'
}

/**
 * String.prototype.trim()
 * 
 * The trim() method removes whitespace from both ends of a string and
 *  returns a new string,
 * without modifying the original string. 
 * 
 * Whitespace in this context is all the whitespace characters 
 * (space, tab, no-break space, etc.) 
 * and all the line terminator characters (LF, CR, etc.).
 */
{
    const greeting = '   Hello world!   ';

    console.log(greeting);
    // expected output: "   Hello world!   ";

    console.log(greeting.trim());
    // expected output: "Hello world!";
}

/**
 * String.prototype.trimEnd()
 * 
 * trimEnd()
 * trimRight()
 * The trimEnd() method removes whitespace from the end of a string. 
 * trimRight() is an alias of this method.
 */
{
    const greeting = '   Hello world!   ';

    console.log(greeting);
    // expected output: "   Hello world!   ";

    console.log(greeting.trimEnd());
    // expected output: "   Hello world!";
}

/**
 * String.prototype.trimStart()
 * 
 * trimStart()
 * trimLeft()
 * 
 * The trimStart() method removes whitespace from the beginning of a string. 
 * trimLeft() is an alias of this method.
 */
{
    var str = '   foo  ';

    console.log(str.length); // 8

    str = str.trimStart();
    console.log(str.length); // 5
    console.log(str);        // 'foo  '

}
/**
 * String.prototype.valueOf()
 * 
 * valueOf()
 * 
 * The valueOf() method returns the primitive value of a String object.
 */
{
    const stringObj = new String('foo');

    console.log(stringObj);
    // expected output: String { "foo" }

    console.log(stringObj.valueOf());
    // expected output: "foo"
}
/**
 * String.prototype.toLocaleLowerCase() & String.prototype.toLocaleUpperCase()
 * 
 * toLocaleLowerCase()
 * toLocaleLowerCase(locale)
 * toLocaleLowerCase([locale1, locale2, ...])
 * 
 * toLocaleUpperCase()
 * toLocaleUpperCase(locale)
 * toLocaleUpperCase([locale1, locale2, ...])
 * 
 * The toLocaleLowerCase() returns input string converted to lower case,
 * according to any locale-specific case mappings.
 *
 * The toLocaleUpperCase() returns input string converted to upper case, 
 * according to any locale-specific case mappings.
 *  
 * In most cases, toLocaleLowerCase() & toLocaleUpperCase() 
 * will produce the same result as toLowerCase()
 * 
 * for some locales, such as Turkish, whose case mappings do not follow 
 * the default case mappings in Unicode, there may be a different result
 */
{
    // lower
    'ALPHABET'.toLocaleLowerCase(); // 'alphabet'

    '\u0130'.toLocaleLowerCase('tr') === 'i';    // true
    '\u0130'.toLocaleLowerCase('en-US') === 'i'; // false

    let locales1 = ['tr', 'TR', 'tr-TR', 'tr-u-co-search', 'tr-x-turkish'];
    '\u0130'.toLocaleLowerCase(locales1) === 'i'; // true

    // upper
    'alphabet'.toLocaleUpperCase(); // 'ALPHABET'

    'Gesäß'.toLocaleUpperCase(); // 'GESÄSS'

    'i\u0307'.toLocaleUpperCase('lt-LT'); // 'I'

    let locales2 = ['lt', 'LT', 'lt-LT', 'lt-u-co-phonebk', 'lt-x-lietuva'];
    'i\u0307'.toLocaleUpperCase(locales2); // 'I'
}
/**
 * String.prototype.localeCompare()
 * 
 * localeCompare(compareString)
 * localeCompare(compareString, locales)
 * localeCompare(compareString, locales, options)
 *  
 * This returns an integer indicating whether the referenceStr 
 * comes before, after or is equivalent to the compareString.
 * 
 * Negative when the referenceStr occurs before compareString
 * Positive when the referenceStr occurs after compareString
 * Returns 0 if they are equivalent
 */
{
    // The letter "a" is before "c" yielding a negative value
    'a'.localeCompare('c'); // -2 or -1 (or some other negative value)

    // Alphabetically the word "check" comes after "against" 
    // So yields a positive value
    'check'.localeCompare('against'); // 2 or 1 (or some other positive value)

    // "a" and "a" are equivalent yielding a neutral value of zero
    'a'.localeCompare('a'); // 0

    let items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
    items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
    // ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']

}

/**
 * The Intl.Collator object enables language-sensitive string comparison.
 * 
 * When comparing large numbers of strings, such as in sorting large arrays, 
 * it is better to create an Intl.Collator object and use the 
 * function provided by its compare property.
 */
{
    // without using locales
    console.log(new Intl.Collator().compare('a', 'c')); // → a negative value
    console.log(new Intl.Collator().compare('c', 'a')); // → a positive value
    console.log(new Intl.Collator().compare('a', 'a')); // → 0

    // with using locales
    // in German, ä sorts with a
    console.log(new Intl.Collator('de').compare('ä', 'z'));
    // → a negative value

    // in Swedish, ä sorts after z
    console.log(new Intl.Collator('sv').compare('ä', 'z'));
    // → a positive value
}

/**
 * String.prototype.match()
 * 
 * match(regexp)
 * 
 * The match() method retrieves the result of matching a string against 
 * a regular expression.
 * 
 * Returns an Array whose contents depend on the presence or absence 
 * of the global (g) flag.
 * Returns null if no matches are found.
 * 
 * If the g flag is used, 
 * all results matching the complete regular expression will be returned, 
 * but capturing groups will not.
 * 
 * If the g flag is not used, only the first complete match and 
 * its related capturing groups are returned.
 * In this case, the returned item will have additional properties 
 * 
 * Those additional properties are 'groups', 'index' & 'input'
 */
{
    const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
    const regex = /[A-Z]/g;
    const found = paragraph.match(regex);

    console.log(found);
    // expected output: Array ["T", "I"]

    // using global and ignoring case
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const regexp = /[A-E]/gi;
    const matches_array = str.match(regexp);

    console.log(matches_array);
    // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

    // using named capture groups
    //In browsers which support named capturing groups, the following code 
    // captures "fox" or "cat" into a group named "animal":
    const para2 = 'The quick brown fox jumps over the lazy dog. It barked.';

    const capturingRegex = /(?<animal>fox|cat) jumps over/;
    const found2 = para2.match(capturingRegex);
    console.log(found2.groups); // {animal: "fox"}
}

/**
 * String.prototype.matchAll()
 * 
 * matchAll(regexp)
 * 
 * The matchAll() method returns an iterator of all results matching a string 
 * against a regular expression, including capturing groups.
 * 
 * Return value is an iterator (which is not a restartable iterable) of matches.
 * Each match is an array (with extra properties index and input
 * 
 * The match array has the matched text as the first item, 
 * and then one item for each parenthetical capture group of the matched text.
 */
{
    const regexp = /t(e)(st(\d?))/g;
    const str = 'test1test2';

    const iterator1 = str.matchAll(regexp);
    // returns iterator object that has all matches

    // one way to get all matches

    console.log(iterator1.next());
    // Object { value: Array ["test1", "e", "st1", "1"], done: false }

    console.log(iterator1.next());
    // Object { value: Array ["test2", "e", "st2", "2"], done: false }

    console.log(iterator1.next());
    // Object { value: undefined, done: true }


    // another way to get all matches
    const array = [...str.matchAll(regexp)];

    console.log(array[0]);
    // expected output: Array ["test1", "e", "st1", "1"]

    console.log(array[1]);
    // expected output: Array ["test2", "e", "st2", "2"]
}

/**
 * String.prototype.padEnd()
 * 
 * padEnd(targetLength)
 * padEnd(targetLength, padString)

 * this method pads the current string with a given string (repeated, if needed) 
 * so that the resulting string reaches a given length. 
 * The padding is applied from the end of the current string.
 */

{
    const str1 = 'Breaded Mushrooms';

    console.log(str1.padEnd(25, '.'));
    // expected output: "Breaded Mushrooms........"

    const str2 = '200';

    console.log(str2.padEnd(5));
    // expected output: "200  "

    'abc'.padEnd(10);          // "abc       "
    'abc'.padEnd(10, "foo");   // "abcfoofoof"
    'abc'.padEnd(6, "123456"); // "abc123" 
    // padString is not applied as target length is already reached
    'abc'.padEnd(1);           // "abc"
}

/**
 * String.prototype.padStart()
 * 
 * padStart(targetLength)
 * padStart(targetLength, padString)
 * 
 * 
 * The padStart() method pads the current string with another string 
 * (multiple times, if needed) until 
 * the resulting string reaches the given length. 
 * 
 * The padding is applied from the start of the current string.
 */
{
    'abc'.padStart(10);         // "       abc"
    'abc'.padStart(10, "foo");  // "foofoofabc"
    'abc'.padStart(6, "123465"); // "123abc"
    'abc'.padStart(8, "0");     // "00000abc"
    'abc'.padStart(1);          // "abc"
}

/**
 * String.raw()
 * 
 * String.raw(callSite, ...substitutions)
 * String.raw`templateString`
 * 
 * It's used to get the raw string form of template literals, that is, 
 * substitutions (e.g. ${foo}) are processed, but escapes (e.g. \n) are not.
 * 
 * String.raw() is the only built-in tag function of template literals. 
 * It works just like the default template function and performs concatenation.
 */

{
    // Create a variable that uses a Windows
    // path without escaping the backslashes:
    const filePath = String.raw`C:\Development\profile\aboutme.html`;

    console.log(`The file was uploaded from: ${filePath}`);
    // "The file was uploaded from: C:\Development\profile\aboutme.html"

    let ans = String.raw`Hi\n${2 + 3}!`;
    // 'Hi\\n5!', the character after 'Hi'
    // is not a newline character,
    // '\' and 'n' are two characters.
    console.log(ans); // Hi\n5!

    ans = String.raw`Hi\u000A!`;
    // 'Hi\\u000A!', same here, this time we will get the
    //  \, u, 0, 0, 0, A, 6 characters.
    // All kinds of escape characters will be ineffective
    // and backslashes will be present in the output string.
    // You can confirm this by checking the .length property
    // of the string.
    console.log(ans); // Hi\u000A!

    let name = 'Bob';
    ans = String.raw`Hi\n${name}!`;
    // 'Hi\\nBob!', substitutions are processed.
    console.log(ans); // Hi\nBob!

    // Normally you would not call String.raw() as a function,
    // but to simulate `foo${2 + 3}bar${'Java' + 'Script'}baz` you can do:
    ans = String.raw({
        raw: ['foo', 'bar', 'baz']
    }, 2 + 3, 'Java' + 'Script'); // 'foo5barJavaScriptbaz'
    // Notice the first argument is an object with a 'raw' property,
    // whose value is an "iterable" representing the 
    // separated strings in the template literal.
    // The rest of the arguments are the substitutions.
    console.log(ans); // foo5barJavaScriptbaz

    // The first argument's 'raw' value can be any iterable, even a string!
    // For example, 'test' is treated as ['t', 'e', 's', 't'].
    // The following is equivalent to
    // `t${0}e${1}s${2}t`:
    String.raw({ raw: 'test' }, 0, 1, 2); // 't0e1s2t'
}

/**
 * String.prototype.repeat()
 * 
 * repeat(count)
 * 
 * It returns a new string containing the 
 * specified number of copies of the given string.
 */

{
    // 'abc'.repeat(-1)    // RangeError
    'abc'.repeat(0)     // ''
    'abc'.repeat(1)     // 'abc'
    'abc'.repeat(2)     // 'abcabc'
    'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)

    // 'abc'.repeat(1 / 0)   // RangeError

    // ({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2)
    // 'abcabc' 
    // (repeat() is a generic method)
}

/**
 * String.prototype.replace()
 * 
 * replace(regexp, newSubstr)
 * replace(regexp, replacerFunction)
 * 
 * replace(substr, newSubstr)
 * replace(substr, replacerFunction)
 * 
 * The replace() method returns a new string with some or all matches of 
 * a pattern replaced by a replacement. 
 * 
 * The pattern can be a string or a RegExp, 
 * and the replacement can be a string or a function to be called for each match. 
 * 
 * If pattern is a string, only the first occurrence will be replaced.
 * 
 * The original string is left unchanged.
 */

/**
 * The replacement string (when used as second arg) can include the 
 * following special replacement patterns
 * Pattern	    Inserts
 * $$	    Inserts a "$".
 * $&	    Inserts the matched substring.
 * $`	    Inserts the portion of string that precedes the matched substring.
 * $'	    Inserts the portion of string that follows matched substring.
 * $n	    Where n is a positive integer less than 100, inserts 
 *          the nth parenthesized submatch string, 
 *          provided the first argument was a RegExp object. 
 *          Note that this is 1-indexed. 
 *          If a group n is not present (e.g., if group is 3), 
 *          it will be replaced as a literal (e.g., $3).
 * $<Name>	Where Name is a capturing group name. 
 * If the group is not in the match, or not in the regular expression, 
 * or if a string was passed as the first argument to replace 
 * instead of a regular expression, this resolves to a literal (e.g., $<Name>). 
 * 
 * Only available in browser versions supporting named capturing groups
 * 
 * replacerFunction() can be used as second argument
 * The function's result (return value) will be used as the replacement string.
 * replacerFunction() can have the following arguments
 * Possible name    Supplied value
    match           The matched substring. (Corresponds to $& above.)
    p1, p2, ...	    The nth string found by a parenthesized capture group 
        (including named capturing groups), 
        provided the first argument to replace() was a RegExp object. 
        (Corresponds to $1, $2, etc. above.) 
        For example, if /(\a+)(\b+)/, was given, 
        p1 is the match for \a+, and p2 for \b+.
    offset	        The offset of the matched substring within the whole string
        being examined. 
        For example, if the whole string was 'abcd', and the 
        matched substring was 'bc', then this argument will be 1.)
    string	        The whole string being examined.
    groups	        In browser versions supporting named capturing groups, 
        will be an object whose keys
        are the used group names, and whose values are the matched portions 
        (undefined if not matched).
    
    The exact number of arguments depends on whether the first argument 
    is a RegExp object—and, if so, how many parenthesized 
    submatches it specifies.
 */
{
    const p = `The quick brown fox jumps over the lazy dog. 
                If the dog reacted, was it really lazy?`;

    // example of using string for both matching and replacement
    // this is most simplest usage.
    console.log(p.replace('dog', 'monkey'));
    // expected output: "The quick brown fox jumps over the lazy monkey.
    //  If the dog reacted, was it really lazy?"

    // example of using regex for match and string for replacement
    // this is slightly advanced usage
    const regex = /Dog/i;
    console.log(p.replace(regex, 'ferret'));
    // expected output: "The quick brown fox jumps over the lazy ferret.
    //  If the dog reacted, was it really lazy?"

    // example of using regex for match and replacerFunction for replacement
    // this is highly advanced usage.
    function replacer(match, p1, p2, p3, offset, string) {
        // p1 is nondigits, p2 digits, and p3 non-alphanumerics
        return [p1, p2, p3].join(' - ');
    }
    let newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
    console.log(newString);  // abc - 12345 - #$*%


    // example of using global and ignore flags in regex
    let re0 = /apples/gi;
    let str0 = 'Apples are round, and apples are juicy.';
    let newstr0 = str0.replace(re0, 'oranges');
    console.log(newstr0);  // oranges are round, and oranges are juicy.

    // here replacement is done via patterns (in second argument) 
    // instead of the second argument being a string or replacer function
    let re = /(\w+)\s(\w+)/;
    let str = 'John Smith';
    let newstr = str.replace(re, '$2, $1');
    console.log(newstr);
    // This switches both selected groups. 
    // output:  Smith, John
}

/**
 * String.prototype.replaceAll()
 * 
 * When using a `regexp` you have to set the global ("g") flag;
 * otherwise, it will throw a TypeError: 
 * "replaceAll must be called with a global RegExp".
 * 
 * replaceAll(regexp, newSubstr)
 * replaceAll(regexp, replacerFunction)
 * 
 * replaceAll(substr, newSubstr)
 * replaceAll(substr, replacerFunction)
 * 
 * The replaceAll() method returns a new string with all matches of a 
 * pattern replaced by a replacement.
 * The original string is left unchanged.
 * 
 * The pattern can be a string or a RegExp, and the
 * replacement can be a string or a function to be called for each match.
 * 
 * 
 * The replacement string (when used as second arg) can include the 
 * following special replacement patterns:
 * 
 * Pattern	Inserts
 * $$	    Inserts a "$".
 * $&	    Inserts the matched substring.
 * $`	    Inserts portion of string that precedes matched substring.
 * $'	    Inserts portion of string that follows matched substring.
 * $n	    Where n is a positive integer less than 100, inserts the 
 *          nth parenthesized submatch string, provided the first argument
 *          was a RegExp object. Note that this is 1-indexed.
 * 
 * 
 * replacerFunction() can be used as second argument
 * The function's result (return value) will be used as the replacement string.
 * replacerFunction() can have the following arguments
 * Possible name    Supplied value
    match           The matched substring. (Corresponds to $& above.)
    p1, p2, ...	    The nth string found by a parenthesized capture group 
        (including named capturing groups), 
        provided the first argument to replaceAll() was a RegExp object. 
        (Corresponds to $1, $2, etc. above.) 
        For example, if /(\a+)(\b+)/, was given, 
        p1 is the match for \a+, and p2 for \b+.
    offset	        The offset of the matched substring within the 
        whole string being examined. 
        (For example, if the whole string was 'abcd', and the 
        matched substring was 'bc', then this argument will be 1.)
    string	        The whole string being examined.
    namedGroups	    An object of all named capturing groups. 
        The keys are the names of the capturing groups and each value is the 
        substring matching the named capture group. 
        If the regular expression doesn't contain 
        any capturing groups then... namedGroups is undefined.
    
    The exact number of arguments depends on whether the first argument 
    is a RegExp object—and, if so, how many parenthesized submatches it specifies.
 */
{
    const p = `The quick brown dogfox jumps & dogied over the lazy dog.
                 If the dog reacted, was it really lazy?`;

    console.log(p.replaceAll('dog', 'monkey'));
    // expected output: "The quick brown fox jumps over the lazy monkey. 
    // If the monkey reacted, was it really lazy?"

    // global flag required when calling replaceAll with regex
    const regex = /Dog/ig;
    console.log(p.replaceAll(regex, 'ferret'));
    // expected output: "The quick brown fox jumps over the lazy ferret. 
    // If the ferret reacted, was it really lazy?"

    'aabbcc'.replaceAll('b', '.');
    // 'aa..cc'

    // below throws type error as /g flag is not used in regexp for replaceAll()
    // 'aabbcc'.replaceAll(/b/, '.');
    // TypeError: replaceAll must be called with a global RegExp

    // this is correct usage.
    'aabbcc'.replaceAll(/b/g, '.');
    // "aa..cc"
}

/**
 * String.prototype.search()
 * 
 * search(regexp)
 * It returns index of the first match between 
 * the regular expression and the given string, or 
 * -1 if no match was found.
 */
{
    let str = "hey JudE"
    let re = /[A-Z]/g
    let reDot = /[.]/g
    console.log(str.search(re))
    // returns 4, which is the index of the first capital letter "J"
    console.log(str.search(reDot))
    // returns -1 cannot find '.' dot punctuation

    // For more information (but slower execution) use match()
}

/**
 * String.prototype.slice()
 * 
 * slice(beginIndex)
 * slice(beginIndex, endIndex)
 * 
 * The slice() method extracts a section of a string and returns it as a new string, 
 * without modifying the original string.
 */
{
    const str = 'The quick brown fox jumps over the lazy dog.';

    console.log(str.slice());
    // output is same as str (input)

    console.log(str.slice(31));
    // expected output: "the lazy dog."

    console.log(str.slice(4, 19));
    // expected output: "quick brown fox"

    console.log(str.slice(-4));
    // expected output: "dog."

    console.log(str.slice(-9, -5));
    // expected output: "lazy"
}

/**
 * String.prototype.split()
 * 
 * split()
 * split(separator)
 * split(separator, limit)
 * 
 * This converts a string into an array of substrings based on a separator
 * The separator can be a simple string or it can be a regular expression.
 */
{
    const str = 'The quick brown fox jumps';

    const words = str.split(' ');
    console.log(words); // [ 'The', 'quick', 'brown', 'fox', 'jumps' ]
    console.log(words[3]);
    // expected output: "fox"

    const chars = str.split('');
    console.log(chars);
    /*  
    [ 'T', 'h', 'e', ' ', 'q', 'u', 'i', 'c', 'k', ' ', 'b', 'r',
     'o', 'w', 'n', ' ', 'f', 'o', 'x', ' ', 'j', 'u', 'm', 'p', 's']
    */
    console.log(chars[8]);
    // expected output: "k"

    const strCopy = str.split();
    console.log(strCopy);
    // expected output: Array ["The quick brown fox jumps over the lazy dog."]


    // split() using regex
    const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand '

    console.log(names)

    const regex = /\s*(?:;|$)\s*/
    const nameList = names.split(regex)

    console.log(nameList)
}

/**
 * String.prototype.normalize()
 * 
 * normalize()
 * normalize(form)
 * 
 * This return value is a string containing 
 * the Unicode Normalization Form of the given string.
 */
{
    const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
    const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

    console.log(`${name1}, ${name2}`);
    // expected output: "Amélie, Amélie"
    console.log(name1 === name2);
    // expected output: false
    console.log(name1.length === name2.length);
    // expected output: false

    const name1NFC = name1.normalize('NFC');
    const name2NFC = name2.normalize('NFC');

    console.log(`${name1NFC}, ${name2NFC}`);
    // expected output: "Amélie, Amélie"
    console.log(name1NFC === name2NFC);
    // expected output: true
    console.log(name1NFC.length === name2NFC.length);
    // expected output: true

    // One of "NFC", "NFD", "NFKC", or "NFKD", 
    // specifying the Unicode Normalization Form.
    // If omitted or undefined, "NFC" is used.

    //"NFC" = Canonical Decomposition, followed by Canonical Composition.

    // "NFD" = Canonical Decomposition.

    // "NFKC" = Compatibility Decomposition, followed by Canonical Composition.

    // "NFKD" = Compatibility Decomposition.
}

/**
 * String.fromCharCode()
 * 
 * String.fromCharCode(num1)
 * String.fromCharCode(num1, num2)
 * String.fromCharCode(num1, num2, ..., numN)
 * 
 * The static String.fromCharCode() method returns a string created 
 * from the specified sequence of UTF-16 code units.
 */
{
    // BMP characters, in UTF-16, use a single code unit:
    String.fromCharCode(65, 66, 67);   // returns "ABC"
    String.fromCharCode(0x2014);       // returns "—"
    String.fromCharCode(0x12014);
    // also returns "—"; the digit 1 is truncated and ignored
    String.fromCharCode(8212);
    // also returns "—"; 8212 is the decimal form of 0x2014

    //Supplementary characters, in UTF-16, require two code units 
    // (i.e. a surrogate pair):
    String.fromCharCode(0xD83C, 0xDF03); // Code Point U+1F303 "Night with
    String.fromCharCode(55356, 57091);   // Stars" == "\uD83C\uDF03"
    String.fromCharCode(0xD834, 0xDF06, 0x61, 0xD834, 0xDF07);
    // "\uD834\uDF06a\uD834\uDF07"
}

/**
 * String.fromCodePoint()
 * 
 * String.fromCodePoint(num1)
 * String.fromCodePoint(num1, num2)
 * String.fromCodePoint(num1, num2, ..., numN)
 * 
 * The static String.fromCodePoint() method returns a string created 
 * by using the specified sequence of code points.
 * Return value is a string (primitive), but NOT String (non-primitive)
 */

{
    console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));
    // expected output: "☃★♲你"
}