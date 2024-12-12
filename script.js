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
    var person={
        name: 'Ramesh',
        age:30,
        isMarried:true,
          address:{
            street: 'vinay kumar',
            flatno:323
          
          }
    };
document.write("<br>");
console.log(person);
console.log(person.name);
console.log(person.flatno);
document.write(person.name);
document.write("<br>");
var person2=new Object();
person2.name='abhi';
person2.age=32;
person2.isMarried=true;
person2.address={};
person2.address.street="nagar road";
person2['address']['flatNO']=33;
console.log(person2);
console.log(person2.name);
document.write(person2.name);
document.write("<br>");

// function myFunction(){
// var carName="volvo";
// document.getElementById("demo1").innerHTML= typeof carName+" "+carName;

// }
// myFunction();
// document.getElementById("demo2").innerHTML=typeof carName;

var locales={
    europe:function(){
        var myFriend="Monique";
        var france=function(){
        var paris =function(){
            console.log(myFriend);
        };
        paris();
        };
        france();
    }
};
locales.europe();

function show(){
    var a="a is a local outer variable";
    document.write(a+"<br>");
    function disk(){
        var b="b is a local inner variable";
        document.write(b+"<br>");
    }
    disk();
}
show();

var myVar="global";
function check(){
    var myVar = "local";
    document.write(myVar);
}
check();

var name='John';
function first(){
    var a = 'Hello!';
    second();
    var x=a + name;
    console.log(x);
}
function second(){
    var b = 'Hi!';
    third();
    var z=b + name;
    console.log(z);
    
}
function third(){
    var c ='Hey!';
    var z= c + name;
    console.log(z);
    
}
first();
// console.log(first);
document.write("<br>");

var age=20;
if(age>18){
    document.write("<b> You are eligible to cast the vote.</b>");
}

