// Arrow Function 

const createArray=(param: string):string[] =>{

    return [param];
};


const createArray2=  <T>(param: T):T[] =>{

    return [param];
};

const result = createArray2<string>("Bangladesh")

const result2 = createArray2<boolean>(true)


type NameRoll ={
    name:string,
    roll:number
}


const result9 = createArray2<{name: string, roll:number}>({name:'Naruto Uzumaki', roll:40})

const result5 = createArray2<NameRoll>({name:'Naruto Uzumaki', roll:40})




// Generic Tuple | we can add to type of dataType


const createArrayTuple = <X, Y>(param1: X, param2: Y): [X,Y] =>{
    return [param1, param2]
}

const TupleResult = createArrayTuple<string,boolean>('bangladesh',true)




// Spread Operator

const myInfo={
    name:"Sabbir",
    age:100,
    sallery:100000,
};




const addMeOnYourMind = <T>(myInfo: T) =>{
    const crush = "Sakura"
    const newData = {...myInfo, crush}
    return newData;

}

const result55 = addMeOnYourMind(myInfo);



console.log(result55)






