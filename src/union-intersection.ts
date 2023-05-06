type NoobDev = {
    name:string;
}

// type JuniorDev = {
//     name:string,
//     expertise: string,
//     experience: number
// }

// intersection type

type JuniorDev = NoobDev & {
    name:string,
    expertise: string,
    experience: number,
    address:string
}



type NextLevelDeveloper = JuniorDev & {
    leadershipExperience : number,
    level: string
   
}

// union type
const newDeveloper : NoobDev | JuniorDev = {
    name:'Naruto Uzumaki',
    address: 'Hidden leaf Village',
    expertise:' Rasingan',
    experience:3
}





const developerG: NextLevelDeveloper = {
    name:'Susuke Uciha',
    expertise: 'Sharingan',
    experience: 3,
    leadershipExperience: 1,
    level: 'mid',
    address:'Uciha Clan'
    

}
