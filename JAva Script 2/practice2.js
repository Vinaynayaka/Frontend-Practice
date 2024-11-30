// Loops and Algorithms
// Write a function that takes a number as input and returns its factorial using a for loop.

function fact(n)
{
    let res=1;
     for(let i=1;i<=n;i++)
     {
        res=res*i;
     }
     return res;
}
console.log("factorial using a for loop: "+fact(9));


// Create a function to check if a given number is prime. Use a loop to perform the check

function prime(n)
{
    let flag=true;
    if(n==1 || n==2)
    {
        flag=true;
    }
    for(let i=2;i<n;i++)
    {
        if(n%i==0)
        {
            flag=false;
            break;
        }
    }
    if(flag==true)
    {
        return n+" is Prime";
    }
    else
    {
        return n+" is Not a Prime";
    }
}
console.log(prime(10));

//Write a loop to print all even numbers between 1 and 50.
// console.log("all even numbers between 1 and 50");
// for(let i=1;i<=50;i++)
// {
//     if(i%2==0)
//         console.log(i);
// }

// Use a loop to reverse a string provided as input. 

let  s="abcd";
let rev="";
for(let i=s.length-1;i>=0;i--)
{
    rev=rev+s.charAt(i);
}
console.log("\""+s+"\" the reverse is \""+rev+"\"");


// Use nested loops to print the following pattern:
//     *
//     **
//     ***
//     ****
//     *****

for(let i=1;i<=5;i++)
{
    let star='';
    for(let j=1;j<=i;j++)
    {
        star=star+'*';
    }
    console.log(star);
}



//Implement a function to count the number of vowels in a given string.

function vowel(s)
{
    let c=0;
    for(let i=0;i<s.length;i++)
    {
        if(s.charAt(i)=='a'||s.charAt(i)=='e'||s.charAt(i)=='i'||s.charAt(i)=='o'||s.charAt(i)=='u'||s.charAt(i)=='A'||s.charAt(i)=='E'||s.charAt(i)=='I'||s.charAt(i)=='O'||s.charAt(i)=='U')
            c++;
    }
    return c;
}

let str="ABCDEFGabcdefg";
console.log("the number of vowels in the given string:"+str+" are: "+vowel(str))

// How do you write a program to calculate the power of a number (e.g., base^exponent) without using the Math.pow() function?

function power(n,p)
{
    while(p>1)
    {
        n=n*n;
        p--;
    }
    return n;
}
console.log(power(5,2));

// What is the algorithm for sorting an array of numbers in ascending order using loops (e.g., bubble sort)?

let ar=[1,5,9,5,7,4,6,3,0];
for(let i=0;i<ar.length-1;i++)
{
    for(let j=i+1;j<ar.length;j++)
    {
        if(ar[j]<ar[i])
        {
            let t=ar[i];
            ar[i]=ar[j];
            ar[j]=t;
        }
    }
}
console.log(ar);

// How can you write a loop to find the intersection of two arrays and return the common elements?
let ar1=[1,5,9,5,7,4,6,3,0];
let br=[4,8,7,6,4];
function findIntersection(arr1, arr2) {
    const intersection = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
            intersection.push(arr1[i]);
        }
    }
    return intersection;
}
console.log(findIntersection(ar1,br));

// How do you create an object car with properties like brand, model, and year and access them to print their values?
console.log(" ");
console.log(" ");
console.log(" ");
console.log("Object Properties and Methods");
let car={
    brand: "Porsche",
    model: "911",
    year: "2014"
}
for(let i in car)
{
    console.log(i+"  "+car[i]);
}
// How can you add properties to an empty object person and then delete a specific property?
let person={

}
console.log(person);
person.name="ABCD";
person.age=20;
person.gender="male";
console.log(person);
delete(person.gender);
console.log(person);    

// What approach would you use to check if a specific property exists in an object like book?

let book={
    title:"sdgsdf",
    price:500,
    author:"vfd"
}
if(Object.keys(book).includes("title"))
    console.log("Property Exists");
else
    console.log("Property Does not Exist");

// How can you iterate through all properties of an object student and print their key-value pairs?
for(let i in book)
{
    console.log(i+":"+book[i]);
}

// How do you write a function that counts the number of properties in an object?

function countProerties(a)
{
    let c=0;
    for(i in a)
    {
        c++;
    }
    return c;
}
console.log(countProerties(book));

// How can you add methods like add and subtract to an object calculator that use its properties to perform calculations?


