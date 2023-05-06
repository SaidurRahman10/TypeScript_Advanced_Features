// Mocking

//Json Placeholder

interface ITodo {
    userId: number;
    id:number;
    title:string;
    completed:boolean
}


const getTodo = async(): Promise<ITodo> =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await res.json();
    
}

const getToDoData = async(): Promise<void> =>{
    const result = await getTodo();
    console.log(result)

}

getToDoData();




const makePromise = () =>{
  return  new Promise<string>((resolve, reject)=>{
        const data:string = 'Data is fetched'
        if(data){
            resolve(data)
        }else{
            reject('Faield to fetch data')
        }
    })
}


const getPromiseData = async (): Promise<string> =>{
    const data = await makePromise();
    return data;
}

// const result451 = makePromise()