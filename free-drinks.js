/***
 * Free Drinks
 * - Burger more than 500tk: free Coke
 *  - Else Coke: 30tk
*/



const burger=500;
if(burger>=500){
    console.log("you are free coke")
}
else{
    console.log("please buy the coke")
}



// const food=400;
// if(food>=500){
//     console.log("Free Coke with food. But you have to buy food worth 500 taka. ")
// }
// else{
//     console.log("50tk coke ")
// }5

// const age=10;

// if(age>=18){
//     console.log("apne melai dhukte parben")
// }
// else if(age>=13){
//     console.log("tmi mala te dhukte parbe")
// }
// else{
//     console.log("tmi dhukte parbena")
// }

let i=0;
while(i<=60){
    console.log("I will invest at least 6 hrs every single day for next 60 days!",i)
    i++;

}
for(let i=61; i<=100;i++){
    if(i%2===1){
        console.log(i)
    }
    
}
for(let m=78;m<=98;m++){
    if(m%2===0){
        console.log(m)
    }
}
console.log("Md:Mosarof HOssen")

for(let n=81;n<=131;n++){
    if(n%2 ===1){
        console.log(n)
    }
}
console.log("Display sum of all the even numbers from 206 to 311.")
for(let q=206;q<=311;q++){
    if(q%2===0){
        console.log(q)
    }
}

console.log("As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5")
// let number=5;
// for(let i=1;i<=10;i++){
//    console.log(number +"x"+i+"="+number*i)
// }
let nem=5;
let x=1;
while(x<=10){
    
    console.log(nem+"x"+x+"="+nem*x);
    x++;
}


console.log("Implement a countdown timer that counts down from 21 to 15.");
for(let b=21;b>=15;b--){
    console.log(b)
}


// const ok=[2,534,764,74,32,643,12,]
// console.log(ok)
// console.log(ok[4])
// const done=ok[2]
// console.log(done)

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;

let text = "";
for (let i = 0; i < len; i++) {
  text += cars[i] ;
}
console.log(text)


const m=["mosarof","munir","hamja", "firoz"];
let worde=m.length;
let typ="";
for(let i=0;i<worde;i++){
    typ+=m[i];
}
console.log(typ)