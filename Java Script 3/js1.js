var a={  f: "abc",l: "xyz"}
var b={ f: "efg", l: "klm"}
function funnn(x,y)
{
  console.log( x+" "+this.f+"    "+y+" "+this.l);
}

funnn.call(a," Call \nfirst name: ","last name: ");
funnn.call(b,"first name: ","last name: ");


funnn.apply(a,[" Apply \nfirst name: ","last name: "]);
funnn.apply(b,["first name: ","last name: "]);


var res=funnn.bind(a," Bind \nfirst name: ","last name: ");
res();
var res2=funnn.bind(a,"first name: ","last name: ");
res2();

