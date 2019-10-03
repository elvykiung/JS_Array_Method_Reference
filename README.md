# JS_Array_Method_Reference

Here is the summary for most use Array method in JS

|  num   | Description                                                       |                                       Syntax                                        | Example                                                                                                                                                                                                                                   | Note                                                                                                                                                                                                                                   |
| :----: | :---------------------------------------------------------------- | :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   1    | Converting Arrays to Strings                                      |                                 object.toString();                                  | const arr = ["a","b","c"];  arr.toStings(); //output : a,b,c                                                                                                                                                                              | <ul><li>convert with comma separated</li><li>convert object to string</li></ul>                                                                                                                                                        |
|        |                                                                   |                               arr.join([separator]);                                | const arr = ["a","b","c"];  arr.join(""); //output : abc                                                                                                                                                                                  | <ul><li> Have options to join without comma by `.join("")` empty string</li><li>Default will be with comma separation </li><li>Can join with a specified separator </li><li>this method will not change the original array. </li></ul> |
| *sting | Convert string to array                                           |                                     str.split()                                     | const str = "abc"; const arr = str.split("")  // ["a","b","c"] empty sting split between char (" ") split between empty space                                                                                                             | <ul><li>split() method does not change the original string and</li> <li>return new array </li>                                                                                                                                         |
|   2    | Remove(pop) or add(push)  last element in array                   |                               arr.pop() / arr.push()                                | let arr1 = ["a","b","c"]; let arr2 = arr1.pop() // output: arr1:["a","b"] arr2: ["c"]                                                                                                                                                     | <ul><li>Changes the length of an array.</li><li>using`.delete()` to remove array will let undefined holes in array, use `pop()` instead</li></ul>                                                                                      |
|   3    | Remove(shift) or add(unshift)  first element in array             |                             arr.shift() / arr.unshift()                             | let arr1 = ["a","b","c"]; let arr2 = arr1.shift() // output: arr1:["b","c"] arr2: ["a"]                                                                                                                                                   | <ul><li>Changes the length of an array.</li></ul>                                                                                                                                                                                      |
|   4    | Returns the selected elements in an array, as a new array object. |                              array.slice(from, until)                               | let arr1 = [1,2,3,4,5]; let arr2 = arr1.slice(1,3) //return [2,3] until index 3 but not include 3                                                                                                                                         | <ul><li>DO NOT change the length of an array.</li></ul>                                                                                                                                                                                |
|   5    | Adds/removes items to/from an array                               | arr.splice(starting index, number of elements to remove when call, element to add); | <ol><li> let arr = [1,2,3,4,5];  let arr2 = arr.splice(2);  // Every element starting from index 2, will be removed [3,4,5]</li><li> array.splice(0, 0, 'a', 'b'); //staring index 0, nothing to remove, add element ["a","b"] </li></ol> | <ul><li>similar to pop but can specify which elements to remove or add</li><li>Changes the length of an array.</li></ul>                                                                                                               |
|   6    | Description                                                       |                                       split()                                       | Example                                                                                                                                                                                                                                   | Note                                                                                                                                                                                                                                   |
|  num   | Description                                                       |                                       Syntax                                        | Example                                                                                                                                                                                                                                   | Note                                                                                                                                                                                                                                   |
|  num   | Description                                                       |                                       Syntax                                        | Example                                                                                                                                                                                                                                   | Note                                                                                                                                                                                                                                   |