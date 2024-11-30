
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