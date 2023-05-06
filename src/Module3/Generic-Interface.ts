// Generic Interface

interface CrushInterface<T>{
    name: string
    husband: T
}

const crush100: CrushInterface<boolean>={
    name:'Ino',
    husband: true,
}