

// const isAdult = age >= 18 ? 'adult' : 'no u r kid'

// console.log(isAdult)





//Nullish Coalesce Operator
// Null & adult

const isAuthenticatedUser = null;
const userName = isAuthenticatedUser ?? 'Guest';

// console.log(userName)




type Man = {
    name:string,
 
    profession:string,
    address:{
        city:string,
        home?: ""
    }
}


const girl : Man = {
    name:'Honey',
    address:{
        city:'Feni'

    },
    profession:'Web Dev Senior',
 
}

const home = girl?.address?.home ?? 'No home'
console.log(home)