type CrushType = {
    name:string,
    age?:number, // optional
    profession:string,
    address:string
}



const crush1: CrushType = {
    name:'Honey',
    age:22,
    profession:'Web Dev Senior',
    address:'Pakistan'
}

const crush2: CrushType= {
    name:'Pro',
    
    profession:'NEXT Lavel Web Dev Senior',
    address:'BD'
}

// boolean

type CrushSingle = boolean;

const isCrushSingle:CrushSingle = false;


// function 

const calculate = (number1 : number, number2 : number, operation: (x: number, y : number)=> number) =>{
    return operation(number1, number2);
}

calculate(10,20, (x,y)=> x+y)
calculate(10,20, (x,y)=> x-y)