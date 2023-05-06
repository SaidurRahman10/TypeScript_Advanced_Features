type GenericTuple<X,Y> = [X,Y]

type GenericArray<T> = Array<T>



const rollNumbers: GenericArray<number> = [1,2,6,8]

const rollString: GenericArray<string> = ['1','2','6','8'];

type NameRollType = {name:string, roll:number};

const student1 : GenericArray<NameRollType> = [
    {
        name:'Susuke',
        roll:1
    },
    {
        name:'Naruto Uzumaki',
        roll:40
    },
    {
        name:'Sakura Uciha',
        roll:2
    }
]

