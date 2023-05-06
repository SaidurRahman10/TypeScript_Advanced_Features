//NUll

const searchName  = ( value:string | null) =>{
    if(value === null){
        console.log('There is nothing to search')
    }else{
        console.log('Searching...')
    }
}
searchName(null)


//Unknown

const getMyCarSpeed = (speed:unknown) =>{
    if(typeof speed === 'number'){

    }

}


getMyCarSpeed(10)
getMyCarSpeed('10 kmh-1')






const throwError = ( message: string): never => {
    throw new Error(message);
}

throwError('Error hoice bodda thik koro tara tari')
