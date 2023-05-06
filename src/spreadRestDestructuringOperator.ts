// defult value 
// const runTheCode = (num1:number , num2:number = 50): number =>{
// return num1+ num2
// }
// console.log(runTheCode(50))



// spread operator 
const newFriend = ['ashraf', 'mufa', 'ohin']
const sabbirFriend = ['arman', 'rikon', 'topu']
sabbirFriend.push(...newFriend)

// console.log(sabbirFriend)



// For example more spreadOperator with GenericType


// const myInfo={
//     name:"Sabbir",
//     age:100,
//     sallery:100000,
// };



// const addMeOnYourMind = <T>(myInfo: T) =>{
//     const crush = "Sakura"
//     const newData = {...myInfo, crush}
//     return newData;

// }

// const result55 = addMeOnYourMind(myInfo);



// console.log(result55)




// rest parameter 
const greetFriends = (...friends:string[]) : void =>  friends.forEach(friend => console.log(`hi ${friend}`))
greetFriends('Arman', 'Topu', 'Ohin', 'Pub g is colo')


// array & object Destructuring

const bestBuddy = {
    fullName:'Zero',
    age:21
}

const {fullName}  = bestBuddy


console.log(fullName)