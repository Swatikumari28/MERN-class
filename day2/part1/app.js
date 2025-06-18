const printBill = (txt)=>{
    console.log("------------");
    console.log("Rs",txt);
    console.log("------------");
};
const calculateBillAmountForFood=(price)=>{
    return price*1.05;
};
const calculateBillAmountForClothes=(price)=>{
    return price*1.12;
};
const calculateBillAmountForDrinks=(price)=>{
    return price*1.20;
};
const printBillForFood = (txt)=>{
    console.log("------------");
    console.log("Rs",txt);
    console.log("------------");
};
const printBillForFoodandDrinks = (txt)=>{
    console.log("------------");
    console.log("Rs",txt);
    console.log("------------");
};
const printBillForAll = (txt)=>{
    console.log("------------");
    console.log("Rs",txt);
    console.log("------------");
};

const generateBill=(food, clothes, drinks,cb)=>{
    const foodAmount=calculateBillAmountForFood(food);
    const clothesAmount=calculateBillAmountForClothes(clothes);
    const drinksAmount=calculateBillAmountForDrinks(drinks);
    
    const finalAmount = foodAmount+clothesAmount+drinksAmount;
    cb(finalAmount);
};
generateBill(100,400,100,printBillForAll);
generateBill(100,400,0,printBillForFoodandDrinks);
generateBill(200,0,0,printBillForFood);