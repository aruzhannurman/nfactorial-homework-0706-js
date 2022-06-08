const info={
    nutritionist:"Dalida",
    years_of_experience: 3,
    degree_in: "nutrition",
    acrreditation: true
};
info.companyName="Dalida's Vitamins";

console.log("Welcome to "+info.companyName + " shop for your health!\n\n");
console.log("Our main nutritionist  "+ info.nutritionist +" has "+ info.years_of_experience +" years of experience; She got a degree in "+info.degree_in+".\n");

const today_date="07.06.2022";

delete[info.companyName];
delete info.years_of_experience;


if(info.companyName === undefined)
{
    console.log("wait a minute, please!\n");
}else{
    console.log("Oops\n");
}


const key=()=>{
    console.log("heoo\n");
}
key();


function test(t) {
    if (t === undefined) {
      return 'Undefined value!\n';
    }
    return t;
  }
  
  let x;
  
  console.log(test(x));




if(info.acrreditation)
{
    console.log("Moreover, she is an accredited specialist, so trust us!\n");
}



const vitamins = ["Vitamin_A", "Vitamin_D3", "Lutein","Iodine","Selenium",
                "Calcium","Magnesium","Vitamin_E","Sodium_Ascorbate","B_complex"];

const[first,second]=vitamins;
console.log(first);
console.log(second);

function count_vitamins(){
  return vitamins.length;
}

const filtering_vitamins = vitamins.filter(vitamins => vitamins.length > 4);
console.log(filtering_vitamins);

switch (vitamins[1]) {
  case 'Magnezium':
    console.log('hey');
    break;
  case 'bye':
  case 'Vitamin_D3':
    console.log('Buy vitamins');
    break;
  default:
    console.log(`Sorry, we are out of ${vitamins[1]}.`);
}


let value=null;
let finalval=vitamins[2]??"Vitamin_OMG";


let exampleVitamin=true? "Lutein":"Omega";

vitamins.push("Zinc");
vitamins.unshift("Zinc");
vitamins.shift();

let pills=["terapflu","mezim","dari"];
function rest_pills(name, price ...pills)
{
  return '$'
}

vitamins= vitamins.concat(pills);


for(let i=vitamins.length;i>=2;i--)
{
    vitamins.pop();
}

console.log(vitamins);

do{
    vitamins.unshift("Zinc");

}while(vitamins.length===null);

while(vitamins.length)
{
    vitamins.shift();
}
let order;

const price_vitamin = [
    {vitamin: "Iodine", price: 1000},
    {vitamin: "Vitamin_D", price: 2000},
    {vitamin: "Omega", price: 5000}

  ];
 
let a=price_vitamin.map(map_func=> map_func.vitamin+ " Vitamin_A" );

 console.log(a);


 function sum(num1, ...basket)
 {
   console.log(num1);
    let total=0;
    for(const arg of basket)
    {
      total+=arg;
    }
    return total;
 }
 console.log(sum(1,2,3));
 


 function buy(name, price, ...pills)
 {
   return `${name} should take ${pills} for ${price}`;
 }
 console.log(buy('teraflu',1000, 'aa','aaa','aaaa'));

 function spread_vitamins(...elements)
 {
 }
 
 const elements=[1,2,3,4,4,5,6,7];
 spread_vitamins(...elements);

 const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
    
