alert("hello");


prompt("give your name",10);


let a=confirm("how are you");
console.log(a);

for(let i=1;i<=5;i++)
    {
      console.log(i);
    }
    
let j=1;
    while(j<6)
    {
      console.log(j);
      j++;
    }
let k=1;
    do
    {
      console.log(k);
      k++;
    }
    while(k<6) 
        
// for in loop
man=
{
    name: "vinay",
     age: 24,
     status : "unemployed"
}
          
for(let i in man)
  {
        console.log(i+" ---> "+man[i]);
  }

// for of loop 

let arr=[1,2,3,4,5];
for (let m of arr)
{
  console.log(m);
}