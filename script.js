let enternumber;
let secumber;

let result;


function firstt(){

ttk= document.getElementById("tt").value;
if(document.getElementById("iu").value =="0"){
document.getElementById("iu").value=ttk;
}
else if(document.getElementById("iu").value !="0"){
document.getElementById("iu").value=document.getElementById("iu").value + ttk ;
}
}


function secondd(){
ttk = document.getElementById("four").value;
if(document.getElementById("iu").value =="0"){
document.getElementById("iu").value=ttk;
}
else if(document.getElementById("iu").value !="0"){
document.getElementById("iu").value=document.getElementById("iu").value + ttk;


}


}

function thirdd(){


ttk = document.getElementById("seven").value;
if(document.getElementById("iu").value =="0"){
document.getElementById("iu").value=ttk;

}
else if(document.getElementById("iu").value !="0"){

document.getElementById("iu").value=document.getElementById("iu").value + ttk;


}

}

function fourr(){


ttk = document.getElementById("two").value;
if(document.getElementById("iu").value =="0"){
document.getElementById("iu").value=ttk;
}
else if(document.getElementById("iu").value !="0"){
document.getElementById("iu").value=document.getElementById("iu").value + ttk;

}}

function fivee(){


ttk = document.getElementById("five").value;
if(document.getElementById("iu").value =="0"){
document.getElementById("iu").value=ttk;
}
else if(document.getElementById("iu").value !="0"){
document.getElementById("iu").value=document.getElementById("iu").value + ttk;
}}

function sixx(){
ttk = document.getElementById("eight").value;
if(document.getElementById("iu").value =="0"){
document.getElementById("iu").value=ttk;
}
else if(document.getElementById("iu").value !="0"){
document.getElementById("iu").value=document.getElementById("iu").value + ttk;
}}


function sevenn(){
ttk = document.getElementById("three").value;
if(document.getElementById("iu").value =="0"){
document.getElementById("iu").value=ttk;
}
else if(document.getElementById("iu").value !="0"){
document.getElementById("iu").value=document.getElementById("iu").value + ttk;
}}


function eightt(){
ttk = document.getElementById("six").value;
if(document.getElementById("iu").value =="0"){
document.getElementById("iu").value=ttk;
}
else if(document.getElementById("iu").value !="0"){
document.getElementById("iu").value=document.getElementById("iu").value + ttk;
}}



function ninee(){
ttk = document.getElementById("nine").value;
if(document.getElementById("iu").value =="0"){
document.getElementById("iu").value=ttk;
}
else if(document.getElementById("iu").value !="0"){
document.getElementById("iu").value=document.getElementById("iu").value + ttk;
}}

function zeroo(){
ttk = document.getElementById("zero").value;
if(document.getElementById("iu").value =="0"){
document.getElementById("iu").value=ttk;
}
else if(document.getElementById("iu").value !="0"){
document.getElementById("iu").value=document.getElementById("iu").value + ttk;
}}



function clearr(){
    document.getElementById("kk").value="";
	document.getElementById("iu").value="0";
}


function pluss(){  
   
 operation = "+";  
 enternumber = parseInt(document.getElementById("iu").value);  
 console.log("hjkgh"+enternumber);
 document.getElementById("iu").value = "0";  
 document.getElementById("kk").value = enternumber + operation;  

 
    
}  

function multi(){  
   
 operation = "*";  
 enternumber = parseInt(document.getElementById("iu").value);  
 console.log("hjkgh"+enternumber);
 document.getElementById("iu").value = "";  
 document.getElementById("kk").value = enternumber + operation;  


    
}  


function subb(){  
   
 operation = "-";  
 enternumber = parseInt(document.getElementById("iu").value);  
 console.log("hjkgh"+enternumber);
 document.getElementById("iu").value = "";  
 document.getElementById("kk").value = enternumber + operation;  


    
}  


function divv(){  
   
 operation = "/";  
 enternumber = parseInt(document.getElementById("iu").value);  
 console.log("hjkgh"+enternumber);
 document.getElementById("iu").value = "";  
 document.getElementById("kk").value = enternumber + operation;  

  
    
}  




function equalto(){

secondnumber=parseInt(document.getElementById("iu").value);
if(operation=="+"){

l1=document.getElementById("kk").value;
console.log("test"+l1);
console.log("test2"+enternumber);
result=enternumber+secondnumber;
	console.log(result);
}

else if(operation=="*"){

l1=document.getElementById("kk").value;
console.log("test"+l1);
console.log("test2"+enternumber);
result=enternumber*secondnumber;
	console.log(result);
}


else if(operation=="-"){

l1=document.getElementById("kk").value;
console.log("test"+l1);
console.log("test2"+enternumber);
result=enternumber-secondnumber;
	console.log(result);
}


else if(operation=="/"){

l1=document.getElementById("kk").value;
console.log("test"+l1);
console.log("test2"+enternumber);
result=enternumber/secondnumber;
	console.log(result);
}
document.getElementById("iu").value="result="+result.toString();
document.getElementById("kk").value = enternumber + operation + secondnumber + " = " ;

}




