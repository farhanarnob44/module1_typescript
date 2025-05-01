{

// learn type alias 





type Student ={
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
}



const student1: Student = {
    name: 'Farhan',
    age: 20,
    gender: "male",
    contactNo: "0120000000",
    address: "ctg",
};



const student2: Student = {
    name: 'Amit',
    age: 21,
    gender: "male",
    contactNo: "013294340",
    address: "dnj",
};

type Add = (num1: number , num2 : number) => number;

const add : Add = (num1, num2) => num1 + num2;

}