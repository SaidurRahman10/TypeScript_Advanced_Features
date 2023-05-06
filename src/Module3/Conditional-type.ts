// a type depends on another type

type a1 = null;
type a3 = undefined;
type a4 = number;

type a2 = a1 extends string ? string : null;

// nested condition type
type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;


type sheikh = {
    wife1: string;
    wife2: string;
};

// check korbe ei Sheikh Type a wife2 ase kina ? true : false