type User ={
    name: string;
    age: number;
}
interface IUser{
    name: string;
    age:number;

}

const userWithTypeAlias: IUser={
    name:'Type Alias',
    age:100,
   
}

type rollNumberType = number[];


const rollNumber: rollNumberType = [1,5,1,8,6];//index

// interface use only for object's
interface IRollNumbers{
    [index:number]:number
}
