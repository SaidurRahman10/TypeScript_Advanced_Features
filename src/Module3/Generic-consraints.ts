
type MyInfoType = {
    name:string,
    age:number,
    sallery: number
}

const myInfo5: MyInfoType={
    name:"Sabbir",
    age:100,
    sallery:100000,
};


const addMeOnYourMind65= <T extends {name:string, age:number}>(myInfo: T) =>{
    const crush = "Sakura"
    const newData = {...myInfo, crush}
    return newData;

}

const result500 = addMeOnYourMind(myInfo);





