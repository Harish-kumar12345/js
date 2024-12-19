// function sayHello(){
//     alert("Hello world")
// }
document.write("<h1>This is my First JS Webpage</h1>")
// document.write('<h1>this is my first jacascript page</h1>');   /*   comment in Js---> /*  */
// var month='May';
// document.write(month);
// var pi=3.14;
// var person="are you GOD"
// var answer ='Yes i am!';
// document.write(pi+"<br>");
// document.write(person+"<br>");
// document.write(answer+"<br>");
// function myfunction(){
//     var carname="Welcome";
//     document.getElementById("demo").innerHTML=carname;
// }
   /*  let a=23;//give error 
        a=23; //4;will give result , reassign having new value*/
// var num=10;
// console.log(num);
// console.log(typeof(num));
// num=false;
// console.log(num);
// console.log(typeof(num));
// num=null;
// console.log(num);
// console.log(typeof(num));
// num=undefined;
// console.log(num);
// console.log(typeof(num));

// var numberArray=[1,2,3];
// var animals = new Array("cat","dog","mouse")
// console.log(animals);
// var person={
//     name:'Harish kumar',
//     age:'51'
// }
// console.log(numberArray);
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// document.write(person);
    // var person = {
    //     firstName: 'Harish',
    //     lastName: 'Kumar',
    //     id: 55,
    //     getInfo: function () {
    //         return this.firstName + " " + this.lastName;
    //     }
    // };
    // document.getElementById("demo").innerHTML = person.getInfo();
//     var person={
//         name: 'Ramesh',
//         age:30,
//         isMarried:true,
//           address:{
//             street: 'vinay kumar',
//             flatno:323
          
//           }
//     };
// document.write("<br>");
// console.log(person);
// console.log(person.name);
// console.log(person.flatno);
// document.write(person.name);
// document.write("<br>");
// var person2=new Object();
// person2.name='abhi';
// person2.age=32;
// person2.isMarried=true;
// person2.address={};
// person2.address.street="nagar road";
// person2['address']['flatNO']=33;
// console.log(person2);
// console.log(person2.name);
// document.write(person2.name);
// document.write("<br>");

// function myFunction(){
// var carName="volvo";
// document.getElementById("demo1").innerHTML= typeof carName+" "+carName;

// }
// myFunction();
// document.getElementById("demo2").innerHTML=typeof carName;

// var locales={
//     europe:function(){
//         var myFriend="Monique";
//         var france=function(){
//         var paris =function(){
//             console.log(myFriend);
//         };
//         paris();
//         };
//         france();
//     }
// };
// locales.europe();

// function show(){
//     var a="a is a local outer variable";
//     document.write(a+"<br>");
//     function disk(){
//         var b="b is a local inner variable";
//         document.write(b+"<br>");
//     }
//     disk();
// }
// show();

// var myVar="global";
// function check(){
//     var myVar = "local";
//     document.write(myVar);
// }
// check();

// var name='John';
// function first(){
//     var a = 'Hello!';
//     second();
//     var x=a + name;
//     console.log(x);
// }
// function second(){
//     var b = 'Hi!';
//     third();
//     var z=b + name;
//     console.log(z);
    
// }
// function third(){
//     var c ='Hey!';
//     var z= c + name;
//     console.log(z);
    
// }
// first();
// // console.log(first);
// document.write("<br>");

// var age=20;
// if(age>18){
//     document.write("<b> You are eligible to cast the vote.</b>");
// }
// var grade='A';
// document.write("Entering switch block<br/>");
// switch: (grade){
//     case'A': document.write("Good job<br/>");
//     break;
//     case'B': document.write("preety good<br/>");
//     break;
//     case'C': document.write("passed<br/>");
//     break;
//     case'D': document.write("Not so good<br/>");
//     break;
//     case'E': document.write("Failed<br/>");
//     break;
//     default: document.write("unknown grade <br/>")
// }
// document.write("Exiting switch block");

// var count;
// document.write("Starting Loop" + "<br/>");
// for(count=0; count<10; count++){
//     document.write("Current count:"+count);
//     document.write("<br/>");
// }
// document.write("Loop stopped!");
// for(var i=0; i<100; i++)
// {
//     if(i%2==0)
//     {
//         console.log(i +"is an even number");
//     }
//     else{
//         console.log(i + "is an odd number");
//     }
// }
// var myarray=["A","B","C"];
// for(var i=0; i<myarray.length; i++)
// {
//     console.log("the number of my array in index"+" "+ i+" " +"is"+ " "+myarray[i]);
// }

// var count=0;
// document.write("Starting Loop"+"<br/>");
// while(count<10)
// {
//     document.write("Current count:"+ count + "<br/>");
//     count++;
// }
// document.write("Loop stopped!");
//Function in javascript
function Myfunction(){
    alert("hello world");
}


function sayHello(name,age){
    document.write(name+" is "+age+"years old")
}
function add(a,b){
    console.log("the sume is ",a+b);
    document.write("<br/>","the sume is ",a+b);
}
add(5,10);
var res=mul(12,10)
function mul(x,y){
    return x*y;
}
document.write("<br>",res);

const square=function(number){
    return number*number;
}
const x= square(4); 
console.log(x); 

function myfunction1(g1, g2){
    return g1/g2;
}
const value = myfunction1(8,2);
console.log(value);

//Arrow function
 var add2=(a,b)=>{
    console.log(a+b);
 }
 add2(5,6)
 //Arrow function for single line parameter
 var add3=(a,b)=> console.log(a+b);
 add3(9,1);
 
 //Arthmatic operator
 var a=100;
 var b=15;
 var c=10;
 var linebreak="<br>"

 document.write("<br>","a+b-c=");
 result=a+b-c;
 document.write(result);
 document.write(linebreak);

 document.write("<br>","a+b=");
 result=a+b;
 document.write(result);
 document.write(linebreak); 

function myfunction4(){
    var x=5+5;
    var y="5"+5;
    var z="Hello"+5;
    var demoP=document.getElementById("demo3");
    demoP.innerHTML=x+"<br>"+y+"<br>"+z;
}

var g=5;
var h="5";
console.log(g==h);
console.log(g===h);

var n=6;
var m=3;

console.log((n=10 && m>1));
console.log((n==6 || m==3));
console.log(!(n==m));

var age=34;
var voteable=(age<18)?"too young":"too old";
console.log(voteable);



