// const cse018={
//     name: "Swati",
//     address: "Ranchi, JH",
//     bloodGroup: "B+",
// };
// //Read the value of property
// const studentName = cse018.name;
// console.log("StudentName:",studentName);

// //update the value of property
// cse018.bloodGroup="A+";

// //add a key-value pair
// cse018.college="LPU";

// //delete a key-value pair
// delete cse018.address;
// console.log("cse018",cse018);

// -----------------------------------------------------------------

// const person_he_100 ={
//     name:'Swati',
//     height:'2', //meters
//     weight:'40', //kg
//     college:'LPU',
//     rollNumber:'1234',
//     getBMI: function(){
//         const bmi = this.weight/this.height**2;
//         console.log('bmi for ${this.nam} is ${bmi}'); 
//         if(bmi<20){
//             console.log("It iseems he is underweight");
//         }
//     },
// };
// person_he_100.getBMI;
// person_he_100.weight=90;
// person_he_100.getBMI();
//---------------------------------------------------------------------------

// const person1 ={
//     name:'Swati',
//     height:'2', //meters
//     weight:'40', //kg
//     college:'LPU',
//     rollNumber:'1234',
// };
// const person2=person1;
// person2.name="Raj";
// console.log("person1", person1);
// console.log("person2",person2);

const person1 ={
    name:'Swati',
    height:'2', //meters
    weight:'40', //kg
    college:'LPU',
    rollNumber:'1234',
};

const person2 ={
    name:'Swati',
    height:'2', //meters
    weight:'40', //kg
    college:'LPU',
    rollNumber:'1234',
};

//----------De-structuring
const{weight,college}=person1;
