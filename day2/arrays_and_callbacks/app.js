// const arr=["tata","mahindra","suzuki","hyundai"];
// arr.splice(1,2, "kia","byd","honda"); //removing & adding elements
// arr.splice(1,1); // removing new element
// arr.splice(1,0,"johndeer"); //adding new element
// console.log("arr:",arr);

// const arr=["tata","mahindra","suzuki","hyundai"];
// console.log(arr.indexOf("Suzuki"));

const arr =[
    {name: "Swati", city:"Delhi", score:33 },
    {name: "Prachi", city:"Kanpur",score: 24},
    {name: "Ankita", city:"Mumbai",score: 42},
];

const myFunc=(elem)=>{
    if(elem.score<25){
        return{...elem,remark:"fail"};
    }else{
        return{...elem,remark:"pass"};
    }
};

const resArr=arr.map(myFunc);
console.log("resArr:",resArr);