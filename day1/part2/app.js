// let juice = 50;
// let gstOnJuice = 0.1;
// let fries= 70;
// let gstOnJuice=0.05;

// let juiceBillAmount=juice+juice*gstOnJuice;
// let fiesBillAmount = fries+fries*gstOnJuice;

// const finalBill=juiceBillAmount+friesBillAmount;
// console.log
// -------

// let age=22;
// console.log("START",age);
// function calculateJuiceBillAmount(){
//     let juice=50;
//     let gstOnJuice=0.1;
//     let juiceBillAmount=juice+juice*gstOnJuice;
//     console.log(juiceBillAmount);
// }
// console.log("MID");
// calculateJuiceBillAmount();
// console.log("END");


function printBill(name,amount){
    console.log("______");
    console.log("Your bill for,name");
    console.log("Rs.",amount);
    console.log("_______");
}
//1. function declaration
function calculateBillAmount(price,gst){
    //parameter
    console.log("...calculating...");
    let billAmount=price+price*gst;
    return billAmount;

}
let res1=calculateBillAmount(60,0.1);
printBill("Mango Juice",res1);
let res2=calculateBillAmount(50,0.1);
printBill("Orange Juice",res2);
let res3=calculateBillAmount(110,0.05);
printBill("FRies",res3);