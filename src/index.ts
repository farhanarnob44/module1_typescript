let firstName : string = 'farhan'

let d : number ;

d = 123 

// array 

let friends : string [] = ['rachel', 'monica']

let eligibleRollList : number [] = [1,2,3]


// tuple --> array --> order --> type of values 

let coordinates : [number , number] = [1,5]

let ageName : [number , string , boolean] = [50, 'Mr. Farhan Alam Arnob' , true]

// video 5 starts 

// reference type --> Object 

const user : {
    readonly company : 'programming hero';
    firstName : string;
    middleName? : string; //optional type
    lastName : string;
    isMarried : boolean;
} = {
    company : "programming hero",
    firstName : "Farhan",
    // middleName : "Alam",
    lastName : "Arnob",
    isMarried : true
}

user.middleName



