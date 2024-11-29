// 1-Create and Modify an Object
let user={}
console.log(user);
user.name="john";
user.surname="smith";
console.log(user);
user.name="pete";
console.log(user);
delete user.name;
console.log(user);

// 2 check for empty object

let obj={}

function isEmpty(a)
{
    if(Object.keys(a).length===0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log("Question 2 output  "+isEmpty(obj));
obj.a="notempty";

console.log("Question 2 output  "+isEmpty(obj));



//3 sum of salaries

let salaries={
    john:100,
    smith:500,
    rob:1000
}
let sum=0;
for(let i in salaries)
{
    sum=sum+salaries[i];
}
console.log("sum of salaries"+sum);


// 4 multiply numeric values

function multiplyNumeric(obj)
{
    for(let j in obj)
    {
        if(typeof obj[j]=='number')
        {
            obj[j]=obj[j]*2;
        }
    }
}
let person={
    name: "ccavad",
    age: 10,
    salary:15000
}
console.log(person);
multiplyNumeric(person);
console.log(person);