
var number1=prompt("Enter a number between 1 and 3");

while(number1!=2){

number1=prompt("try again number between 1 and 3");

}


var number2= prompt("enter the number of images you would see in this website between 1-5");
var xx=false;
while(xx==false) {
if(number2<1 ){
xx=false;
number2=prompt("Enter a number between 1-5");
}
 else if(number2>5) {
xx=false;
number2=prompt("Enter a number between 1-5");
}
else 
xx=true;



}




for (i=0;i<number2;i++) {



document.write("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThes-hcz9Kjc4P_4yN2tH_PWgG1B8_YgbnlQ&usqp=CAU' alt=''>")
}