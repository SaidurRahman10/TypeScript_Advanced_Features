type PersonType={
    name: string;
    age:number;
    address: string
}

type newType = "name" | 'age' | 'address' ; //Manually korsi

type newTypeUsingKeyOf = keyof PersonType;

const a:newType = 'address'