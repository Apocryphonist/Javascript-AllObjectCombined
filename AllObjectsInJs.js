/**
 * Created by Apo
 **/




/*
******************************************************
********************>Date Object<*********************
******************************************************
*/


//1. We use Date Object to get and set date using the method new Date()
//2.





/*
*get....() *************************>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/

/*
var times = new Date();
        //this is how you create a new Date() object assigning it to the variable times//
hour = times.getHours();
        //here the method, how can we get "hour" from the new Date() object we created previously
minute = times.getMinutes();
        //here the method, how can we get "minutes" from the new Date() object we created previously
seconds = times.getSeconds();
        //here the method, how can we get "second" from the new Date() object we created previously
date = times.getDate();
        //here the method, how can we get "date" from the new Date() object we created previously
month = times.getMonth();
        //here the method, how can we get "month" from the new Date() object we created previously
year = times.getFullYear();
        //here the method, how can we get "fullYear" from the new Date() object we created previously


console.log("Date "+date+": "+"Month "+month+": "+"Year "+year);            //Date 31: Month 4: Year 2017
console.log("Hour "+hour+": "+"Minute "+minute+": "+"Second "+seconds);     //Hour 0: Minute 33: Second 11
*/



/*
set...() *************************>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/

/*
var dates = new Date();
dates.setDate(25);
dates.setMonth(11);
dates.setFullYear(2016);
        //First we have to set the date, month, year...
date = dates.getDate();
month = dates.getMonth();
year = dates.getFullYear();
        //Then get the set date, month, year by get...() method and assign them to different variables...

console.log(date +" "+ month +" "+ year);       //25 11 2016
*/










/*
 ******************************************************
 ********************>String Object<*******************
 ******************************************************
 */


// 1. We can use the string object to do this method -> length, match, replace, toUpperCase, toLowerCase, charAt, indexOf(), substring(), typesOf, split()





/*
*length() method********************>>>>>>>>>>>>>>>>>>>
*/

// 1. to find the length of string

/*
var a = "Hello, How are you?";

console.log(a.length);      //19
        // .length method is to find the length of the object or string,
        //mainly it will count from 0 and with all the "space" and "," and "?", those will also count as an index//
*/



/*
 *match("..string/number..") method********************>>>>>>>>>>>>>>>>>>>
 */

// 1. to find the match in a large combo of string.

/*
var a = "Hello, How are you? 35";

console.log(a.match("are"));        // [ 'are', index: 11, input: 'Hello, How are you?' ]
        //it will search the strings for the match of "are", we can see that there is a match for "are" at starting index 11

console.log(a.match("you"));       //[ 'you', index: 15, input: 'Hello, How are you?' ]
        //same as before but now its index is in 15, remember Js is case sensitive so "Are" will not be found in the string...>>

console.log(a.match("Are"));        //null

console.log(a.match("35"));         //[ '35', index: 20, input: 'Hello, How are you? 35' ]
        // "35" starts at index number 20
*/


/*
*replace method********************>>>>>>>>>>>>>>>>>>>
*/

//1. replace("sting/number", "replace string/number") method is used to replace a string with another string

/*
var a = "Hello, How are you? 35";

console.log(a.replace("Hello", "Hi"))       //Hi, How are you? 35
        // .replace() method take two parameters first for which word to replace, and second to the new replaced word.
        //here "Hello" replaced with "Hi"

console.log(a.replace("are you", " is Hasan"));         //Hello, How  is Hasan? 35
        //same as before now "are you" replced with "is Hasan"..

console.log(a.replace("35", "37"));     //Hello, How are you? 37
        //heere replacing the number "35" with "37", we must have to use " " double quote around them
*/


/*
*toUpperCase() and toLowerCase() method********************>>>>>>>>>>>>>>>>>>>
*/

// 1. This will convert the string to upper and lower case letter...

/*
var a = "Hello, How are you?";

console.log(a.toUpperCase());       //HELLO, HOW ARE YOU?
        //as You guessed it will convert the whole string into uppercase letter

console.log(a.toLowerCase());       //hello, how are you?
        //again as You guessed it will convert the whole string into lowercase letter
*/



/*
*charAt(..number...) method********************>>>>>>>>>>>>>>>>>>>
*/

// 1. This method help us to find which character are in a particular position in the string...

/*
var a = "Hello, How are you?";

console.log(a.charAt(0));      //H
        // "H" is the in the 0 index/position of the string

console.log(a.charAt(18));     //?
        // "?" is in the 18th index/position of the string

console.log(a.charAt(20));      //
        //this will be empty coz there is no character at index/position 20, meaning there is no 20th character of this string
*/



/*
*typeof(...variable...) method********************>>>>>>>>>>>>>>>>>>>
*/

// 1. this method will tell us which type of variable we are using
// 2. We can use this method mostly to find which typeof variable we are using

/*
var a = "Hello, How are you?";

console.log(typeof(a));     //string
        //as you probably guessed this "a" variable is a "string" type
console.log(typeof a);      //string
        //works just the same, but in this way you don't have to use parenthesis
*/



/*
 *indexOf(..."string"...) method********************>>>>>>>>>>>>>>>>>>>
 */

// 1. It will find the index of a particular string

/*
var a = "Hello, How are you?";

console.log(a.indexOf("Hello"));        //0
        //it nearly works same as charAt(), which here will find the possion of a particular string or if it is a word you are looking for then it gives the index or position of where the word started

console.log(a.indexOf("?"));        //18
        //same "?" is in 18th index/position of the string..
*/



/*
*substring(...number...) method********************>>>>>>>>>>>>>>>>>>>
*/

// 1. it will print everything start from the index position and the rest of the string, which(index/position) you declared inside the parenthesis

/*
var a = "Hello, How are you?";

console.log(a.substring(8));        //ow are you?
        // at the 8th position there is "o" so it started printing from "o" and rest of the strint "ow are you?"

console.log(a.substring(17));       //u?
        //same as before

console.log(a.substring(21));       //
        //print nothing coz there is nothing in the index/position 21.
*/


/*
 *split() method********************>>>>>>>>>>>>>>>>>>>
 */

/*
var a = "Hello";



console.log(a.split("")); //[ 'H', 'e', 'l', 'l', 'o' ]
        //this will split the string into array ....

*/




/*
 ******************************************************
 ********************>Array Object<********************
 ******************************************************
*/





// Array can store more than one value to a variable and you can access them through index..
// 1. We can use the Array object do to this methods -> concat(), join(), sort(), reverse(), push(), pop(),



/*
 *Array********************>>>>>>>>>>>>>>>>>>>
 */

/*
var arrayName = [];
for( var i = 0; i< 4 ; i++){
    j = prompt("name is ");
    arrayName[i] = j;
}

for(var k in arrayName){
    document.write(arrayName[k]+"<br>");
}
*/


/*
 *length method********************>>>>>>>>>>>>>>>>>>>
 */


// 1. this length property will find the length of the array same as the string

/*
var a = [1, 2, 3, 4, 5];

console.log(a.length);      //5
//it will find the length of the array...
*/



/*
 *concat(...string/number...) method********************>>>>>>>>>>>>>>>>>>>
 */


// 1. With this method we can concatenate two array(string, number, float, boolean) with each other


/*
var a = [1, 2, 3, true, "hasan"];
var b = [4, 5, 6];

var c = a.concat(b);
        //it will add the array between the () "parenthesis" after the one before the  . "dot" separator and combined them into new array.

console.log(c);         //[ 1, 2, 3, true, 'hasan', 4, 5, 6 ]
        //as mentioned earlier first it print out all of the "a" array and then concat it with "b" array
        //now what happen if we type b.concat(a);

var d = b.concat(a);

console.log(d);         //[ 4, 5, 6, 1, 2, 3, true, 'hasan' ]
        //as you probably guessed the opposite of previous one...

for(var i in c){
    console.log(c[i]);
                    // 1
                    // 2
                    // 3
                    // true
                    // hasan
                    // 4
                    // 5
                    // 6
}
*/



/*
 *join(...string....) method********************>>>>>>>>>>>>>>>>>>>
 */

// 1. This method is to output a set of array into a big joined string with a "," "koma" separator



/*
var a = new Array();
a[0] = "Hasan";
a[1] = "Koli";
a[2] = "Rumi";


console.log(a.join());      //Hasan,Koli,Rumi
        //as you guessed it will print the all the array in a string with a "," "Koma" separator

console.log(a.join(" "));      //Hasan Koli Rumi
        //we use " " "double quote" between the () "parenthesis" to get a space between strings rather than the , "koma" that was used before//
*/



/*
 *sort(...number/letter....) method********************>>>>>>>>>>>>>>>>>>>
 */

// 1. It will sort the letters at alphabetical order(according to ASCII chart)
// 2. This will sort the number in numeric alphabetic order (first all the 1's, then all the 2's, then all the 3's........ and so one) but with the help of a little function we can see the numeric order of an Array...


/*
var letter = ["a", "D", "B", "E","A"];

letterSort = letter.sort();

console.log(letterSort);        //[ 'A', 'B', 'D', 'E', 'a' ]

var a = [2, 3, 21, 1, 31, 34, 4];

var b = a.sort();

console.log(b);         //[ 1, 2, 21, 3, 31, 34, 4 ]
        // It is printing all the array's in alpha numeric order...

var c = a.sort(function (a, b){
    return a-b;
}
)       //but with the help of this function we can sort it out as numeric order...

console.log(c)          //[ 1, 2, 3, 4, 21, 31, 34 ]
*/



/*
 *reverse(...number/letter....) method********************>>>>>>>>>>>>>>>>>>>
 */


// 1. After sorting number or letter array we can reverse it...


/*
var letter = ["a", "D", "B", "E","A"];

letterSort = letter.sort();

console.log(letterSort);        //[ 'A', 'B', 'D', 'E', 'a' ]

console.log(letterSort.reverse());      //[ 'a', 'E', 'D', 'B', 'A' ]
        //as you guessed it just reversed the previously sorted letter or string array's


var a = [2, 3, 21, 1, 31, 34, 4];

var b = a.sort();

console.log(b);         //[ 1, 2, 21, 3, 31, 34, 4 ]

console.log(b.reverse());       //[ 4, 34, 31, 3, 21, 2, 1 ]
        //same here reversed but not in numeric order but in alpha numeric order

var c = a.sort(function (a, b){
        return a-b;
    }
)       //but with the help of this function we can sort it out as numeric order...

console.log(c)          //[ 1, 2, 3, 4, 21, 31, 34 ]

console.log(c.reverse());       //[ 34, 31, 21, 4, 3, 2, 1 ]
        //This time it is in reversed numeric order..
*/





/*
 *slice/splice(...number/letter....) method********************>>>>>>>>>>>>>>>>>>>
 */


// 1. slice() will print out everything between the given indexes with the first index excluding the last given index in between "()" parenthesis
// 2. splice() will print out everything after the given index including the given index...


/*
var a = [ 'A', 'B', 'D', 'E'];


console.log(a.slice(0,2));      //[ 'A', 'B' ]
            //first put two index number of a variable separated by "," . First index will tell from which index to cut and last index  will tell cut the all index before me...// look at the example
console.log(a.splice(2))        //[ 'D', 'E' ]
            //splice will cut out the given index with all the index after that given index in between parenthesis "()"..
            //Look at the example to understand better//

var a = [1,2,3,4];


console.log(a.slice(0,2));      //[ 1, 2 ]
            //print out everything before of last input index(without last input index)

console.log(a.splice(2))        //[ 3, 4 ]
            //print everything after with the input index
*/





/*
 *push/pop(...number/letter....) method********************>>>>>>>>>>>>>>>>>>>
 */


// 1. pop will delete the last one from the array
// 2. push will add the given one in the array

/*
var a = ["Hasan","rumi","koli"];

a.pop();

console.log(a);             //[ 'Hasan', 'rumi' ]
        //pop will delete the last element/value from the array

a.push("Nasif");
        //push will add the given element/value in the last of the array
console.log(a);            ////[ 'Hasan', 'rumi', 'Nasif' ]
*/


var a = 3;
console.log(a);
//Thankyou everyone
//I love you all









































































